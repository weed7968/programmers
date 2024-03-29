function solution(n) {
  const countOnes = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((bit) => bit === "1").length;
  };

  let nextNumber = n + 1;

  while (true) {
    if (countOnes(n) === countOnes(nextNumber)) {
      return nextNumber;
    }
    nextNumber++;
  }
}
