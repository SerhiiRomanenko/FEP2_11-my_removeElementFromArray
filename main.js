const array1 = [1, 2, 3, 4, 5, 6, 7, 5];
console.log(array1);

function removeElement(array, element) {
  return array.forEach((currentValue, index) => {
      if (currentValue === element) {
        array.splice(index,  1);
      }
  })
}

removeElement(array1, 5);

console.log(array1);      // Результат: [1, 2, 3, 4, 6, 7]