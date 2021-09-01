import hljs from 'highlight.js';
import marked from 'marked';

function createRenderer(wrapCodeWithCard = true) {
  const renderer = new marked.Renderer();
  const overrides = {
    table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return `<table><thead>${header}</thead>${body}</table>`;
    },
    tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    },
    tablecell(content, flags) {
      const type = flags.header ? 'th' : 'td';
      const tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    },
    code: (code, language) => {
      if (language.startsWith('__')) {
        language = language.replace('__', '');
      }
      const isLanguageValid = !!(language && hljs.getLanguage(language));
      if (!isLanguageValid) {
        throw new Error(`MdRendererError: ${language} is not valid for code - ${code}`);
      }
      const highlighted = hljs.highlight(code, { language }).value;
      const content = `<code><pre v-pre>${highlighted}</pre></code>`;
      return wrapCodeWithCard ? `<a-card>${content}</a-card>` : content;
    },
    heading: (text, level) => {
      const id = text.replace(/ /g, '-');
      return `<a-typography-title :level="${level}">${text}</a-typography-title>`;
    },
    blockquote: quote => {
      return `<p>${quote}</p>`;
    },
    hr: () => '<a-divider />',
    paragraph: text => {
      return `<a-typography-text>${text}</a-typography-text>`;
    },
    link(href, title, text) {
      if (/^(http:|https:)/.test(href)) {
        return `<a-typography-link href="${href}" target="_blank">${text}</a-typography-link>`;
      }
      return `<router-link to="${href}" #="{ navigate, href }" custom><a-typography-link :href="href" @click="navigate">${text}</a-typography-link></router-link>`;
    },
    list(body, ordered, start) {
      const type = ordered ? 'ol' : 'ul';
      return `<${type}>\n` + body + `</${type}>\n`;
    },
    listitem(text) {
      return `<li>${text}</li>`;
    },
    codespan(code) {
      return `<a-typography-text code>${code}</a-typography-text>`;
    },
    strong(text) {
      return `<a-typography-text strong>${text}</a-typography-text>`;
    },
    checkbox(checked) {
      return `<a-checkbox :checked="${checked}" style="vertical-align: -2px; margin-right: 8px;" />`;
    },
  };

  Object.keys(overrides).forEach(key => {
    renderer[key] = overrides[key];
  });
  return renderer;
}

export default createRenderer;
