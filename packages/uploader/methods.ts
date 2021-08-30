import {ref, Ref} from 'vue';

export type IActionType = 'dragover' | 'dragleave' | 'drop' | '';
// code:
// FILE_TYPE_ERROR：文件类型错误,
// FILE_MAX_COUNT: 文件数量超过上传数量限制
// FILE_MAX_SIZE: 文件内存超过上传内存限制
// FILE_MIN_WITH_HEIGHT: 文件的宽高小于可裁剪到的最低宽高
export interface IValidateError {
  code: 'FILE_TYPE_ERROR' | 'FILE_MAX_COUNT' | 'FILE_MAX_SIZE' | 'FILE_MIN_WITH_HEIGHT' | 'FILE_UPLOAD_ERROR' | 'FILE_LIST_ERROR';
  message: string;
  fileList: File[];
}

export interface ImageProps {
  width: number,
  height: number,
  image: HTMLImageElement
}

export interface IPrevHandleImageOptions {
  minCropBoxWidth: number;
  minCropBoxHeight: number;
  maxWidth: number;
  maxHeight: number;
}

export interface IPreviewItem {
  file: File,
  name: string;
  url: string;
  originUrl: string;
  width: number;
  height: number;
  size: number;
  uploadSuccess: boolean;
  uploadFail: boolean;
  uploadLoading: boolean;
  checked?: boolean;
  aspectRatio?: string;
}

export interface IUploadOptions {
  domain: string;
  system?: string;
  authorization: string;
  timeout: number;
}

export interface IRequestConfig {
  url: string;
  method: string;
  header: {
    [prop: string]: any
  };
  body?: any;
  params?: {
    [prop: string]: any
  };
  timeout?: number;
}

export interface IQueryOptions {
  filename?: string;
  page: number;
  size: number;
}

// 初始化及设置拖动状态
export function useActionType(init: IActionType = ''): [Ref<IActionType>, (actionType: IActionType) => void] {
  const actionType = ref<IActionType>(init);

  const setActionType = (_actionType: IActionType) => {
    actionType.value = _actionType
  }

  return [actionType, setActionType]
}

// 获取图片的真实宽高
export async function getImageSize(src: string): Promise<ImageProps> {
  const image = new Image()
  image.src = src
  return new Promise((resolve) => {
    image.onload = () => {
      resolve({width: image.width, height: image.height, image})
    }
  })
}

// file转blob
export function fileToBlob(file: File): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e: ProgressEvent<FileReader>) {
      let blob;
      const result = (e.target as FileReader).result;
      if (typeof result === 'object') {
        blob = new Blob([result as ArrayBuffer]);
      } else {
        blob = (e.target as FileReader).result;
      }
      resolve(window.URL.createObjectURL(blob));
    };
  });
}

// 计算文件大小
export function computedMemorySize(size: number = 0) {
  const kbSize = Math.floor(size / 1024);
  if(kbSize < 0){
    return `${size}byte`
  }
  if (kbSize >= 1024) {
    return `${parseFloat((kbSize / 1024).toString()).toFixed(2)}M`
  } else {
    return `${kbSize}kb`
  }
}

// 通过选择文件校验后，使用canvas预处理图片，压缩宽高及大小
export async function canvasToFile(file: File, options: IPrevHandleImageOptions, getText: (key: string, value: any) => string): Promise<IPreviewItem> {
  const {minCropBoxWidth, minCropBoxHeight, maxHeight, maxWidth} = options;
  const src = await fileToBlob(file);
  const {width, height, image} = await getImageSize(src);
  // gif跳过前端预处理压缩
  if (file.type !== 'image/gif') {
    if ((minCropBoxWidth > 0 && width < minCropBoxWidth) || (minCropBoxHeight > 0 && height < minCropBoxHeight)) {
      return Promise.reject({
        code: 'FILE_MIN_WITH_HEIGHT',
        message: getText('uploaderError3', {size: `${minCropBoxWidth}x${minCropBoxHeight}`}),
        fileList: [file],
      } as IValidateError)
    }
    if (width > maxWidth || height > maxHeight) {
      let canvas: HTMLCanvasElement | null = document.createElement('canvas');
      const rate = width / height;
      if (rate >= 1) {
        canvas.width = maxWidth;
        canvas.height = Math.floor(maxWidth / rate);
      } else {
        canvas.width = Math.floor(maxHeight / rate);
        canvas.height = maxHeight;
      }
      if ((minCropBoxWidth > 0 && canvas.width < minCropBoxWidth) || (minCropBoxHeight > 0 && canvas.height < minCropBoxHeight)) {
        return Promise.reject({
          code: 'FILE_MIN_WITH_HEIGHT',
          message: getText('uploaderError3', {size: `${minCropBoxWidth}x${minCropBoxHeight}`}),
          fileList: [file],
        } as IValidateError)
      }
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      //通过canvas drawImage方法绘制图片
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      return new Promise((resolve) => {
        (canvas as HTMLCanvasElement).toBlob((blob) => {
          const newFile = new File([blob as Blob], file.name, {type: file.type});
          resolve({
            file: newFile,
            url: src,
            originUrl: src,
            name: file.name,
            width,
            height,
            size: newFile.size,
            aspectRatio: parseFloat(((canvas as HTMLCanvasElement).width / (canvas as HTMLCanvasElement).height).toString()).toFixed(4),
            uploadSuccess: false,
            uploadFail: false,
            uploadLoading: false,
          });
          canvas = null;
        }, file.type)
      })
    }
  }
  return {
    file,
    url: src,
    originUrl: src,
    name: file.name,
    width,
    height,
    size: file.size,
    aspectRatio: parseFloat((width / height).toString()).toFixed(4),
    uploadSuccess: false,
    uploadFail: false,
    uploadLoading: false,
  };
}

// 封装请求方法
export function request(requestConfig: IRequestConfig): Promise<any>{
  return new Promise((resolve, reject) => {
    let { url, body = null, header = {}, params = {}, method = 'GET', timeout } = requestConfig;
    const xhr = new XMLHttpRequest();
    let timeCount: any = null;
    xhr.onreadystatechange = () => {
      if (Number(xhr.readyState) === 4) {
        clearTimeout(timeCount);
        if(Number(xhr.status) === 200) {
          const result = JSON.parse(xhr.response);
          resolve(result)
        }else{
          reject(JSON.parse(xhr.responseText))
        }
      }
    };
    let hasParams = url.indexOf('?') > -1;
    Object.keys(params).map(key => {
      if(params[key] != null){
        if(hasParams){
          url += `&${key}=${params[key]}`;
        }else{
          url += `?${key}=${params[key]}`;
          hasParams = true;
        }
      }
    })
    xhr.open(method, url, true);
    Object.keys(header).map(key => {
      if(key === 'authorization'){
        xhr.setRequestHeader(key, typeof header[key] === 'function' ? header[key]() : header[key]);
      }else{
        xhr.setRequestHeader(key, header[key]);
      }
    });
    timeCount = setTimeout(() => {
      xhr.abort()
    }, timeout);
    xhr.send(body);
  })
}

// 上传文件的方法
export async function uploadPic(previewItem: IPreviewItem, options: IUploadOptions): Promise<IPreviewItem>{
  const { domain, authorization, system, timeout } = options;
  const form = new FormData();
  form.append('file', previewItem.file);
  form.append('system', system as string);
  form.append('width', previewItem.width.toString());
  form.append('height', previewItem.height.toString())
  try{
    const { url, name, size } = await request({
      url: `${domain}/v1/widget/upload`,
      method: 'POST',
      header: {
        authorization,
      },
      body: form,
      timeout: timeout,
    });
    return {
      ...previewItem,
      url,
      name,
      size: size,
      uploadLoading: false,
      uploadSuccess: true,
    }
  }catch (e) {
    return Promise.reject({
      code: 'FILE_UPLOAD_ERROR',
      message: e,
      fileList: [previewItem.file]
    })
  }
}

// 获取图片库列表
export async function getPicsList (params: IQueryOptions, options: IUploadOptions) {
  const { domain, authorization, timeout } = options;
  try{
    return await request({
      url: `${domain}/v1/widget/list`,
      method: 'GET',
      header: {
        authorization,
      },
      params,
      timeout: timeout,
    });
  }catch (e) {
    return Promise.reject({
      code: 'FILE_LIST_ERROR',
      message: e,
      fileList: []
    })
  }
}
