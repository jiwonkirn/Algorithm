function solution(arr1, arr2) {
  return arr1.map((item, index) =>
    item.map((innerItem, innerIndex) => innerItem + arr2[index][innerIndex])
  );
}
