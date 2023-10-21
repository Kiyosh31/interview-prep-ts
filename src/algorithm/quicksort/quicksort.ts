const partition = (arr: number[], low: number, high: number): number => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      const aux = arr[i];
      arr[i] = arr[j];
      arr[j] = aux;
    }
  }

  const aux = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = aux;

  return i + 1;
};

export const quicksort = (arr: number[], low: number, high: number) => {
  if (low >= high) return;

  const pivot = partition(arr, low, high);
  quicksort(arr, low, pivot - 1);
  quicksort(arr, pivot + 1, high);
};
