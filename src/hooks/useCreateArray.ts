const useCreateArray = (length: number) =>
  Array.from({ length }, (_, i) => i + 1);

export default useCreateArray;
