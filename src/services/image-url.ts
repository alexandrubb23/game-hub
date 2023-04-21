import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string, width = 600, height = 400) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
};

export default getCroppedImageUrl;
