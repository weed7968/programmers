function solution(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return arr.length > 1 ? arr.filter((e) => e !== min) : [-1];
}
