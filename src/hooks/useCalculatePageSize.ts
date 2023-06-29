// itemHeight => This is rough estimate
const useCalculatePageSize = (itemHeight = 100) =>
  Math.ceil(window.innerHeight / itemHeight);

export default useCalculatePageSize;
