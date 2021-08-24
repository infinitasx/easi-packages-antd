import {ref, Ref} from 'vue';

export type IActionType = 'dragover' | 'dragleave' | 'drop' | '';
// code:
// FILE_TYPE_ERROR：文件类型错误,
// FILE_MAX_COUNT: 文件数量超过上传数量限制
// FILE_MAX_SIZE: 文件内存超过上传内存限制
// FILE_MIN_WITH_HEIGHT: 文件的宽高小于可裁剪到的最低宽高
export interface IValidateError {
  code: 'FILE_TYPE_ERROR' | 'FILE_MAX_COUNT' | 'FILE_MAX_SIZE' | 'FILE_MIN_WITH_HEIGHT';
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
  size: string;
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

// 通过选择文件校验后，使用canvas预处理图片，压缩宽高及大小
export async function canvasToFile(file: File, options: IPrevHandleImageOptions, getText: (key: string, value: any) => string): Promise<IPreviewItem> {
  const {minCropBoxWidth, minCropBoxHeight, maxHeight, maxWidth} = options;
  const src = await fileToBlob(file);
  console.log(src);
  const {width, height, image} = await getImageSize(src);
  if((minCropBoxWidth > 0 && width < minCropBoxWidth) || (minCropBoxHeight > 0 && height < minCropBoxHeight)){
    console.log('FILE_MIN_WITH_HEIGHT');
    return Promise.reject({
      code: 'FILE_MIN_WITH_HEIGHT',
      message: getText('uploaderError3', { size: `${minCropBoxWidth}x${minCropBoxHeight}` }),
      fileList: [file],
    } as IValidateError)
  }
  if(width > maxWidth || height > maxHeight){
    let canvas: HTMLCanvasElement | null = document.createElement('canvas');
    const rate = width / height;
    if(rate >= 1){
      canvas.width = maxWidth;
      canvas.height = Math.floor(maxWidth / rate);
    } else {
      canvas.width = Math.floor(maxHeight / rate);
      canvas.height = maxHeight;
    }
    if((minCropBoxWidth > 0 && canvas.width < minCropBoxWidth) || (minCropBoxHeight > 0 && canvas.height < minCropBoxHeight)){
      console.log('FILE_MIN_WITH_HEIGHT');
      return Promise.reject({
        code: 'FILE_MIN_WITH_HEIGHT',
        message: getText('uploaderError3', { size: `${minCropBoxWidth}x${minCropBoxHeight}` }),
        fileList: [file],
      } as IValidateError)
    }
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    //通过canvas drawImage方法绘制图片
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    return new Promise((resolve) => {
      console.log('dsadsa');
      (canvas as HTMLCanvasElement).toBlob((blob) => {
        const newFile = new File([blob as Blob], file.name, {type: file.type});
        console.log(newFile);
        resolve({
          file: newFile,
          url: src,
          name: file.name,
          size: parseFloat((newFile.size / 1024 / 1024).toString()).toFixed(2) + 'M',
        });
        canvas = null;
      }, file.type)
    })
  }else{
    return {
      file,
      url: src,
      name: file.name,
      size: parseFloat((file.size / 1024 / 1024).toString()).toFixed(2) + 'M',
    };
  }
}
