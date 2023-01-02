// const arr = document.children;
// console.log(arr);
// console.log(arr[0].children);
// const count = document.getElementsByTagName("*").length;
// console.log(count);
// function countChildrenNumber(el) {
//   let result = 0;
//   if (el.children && el.children.length > 0) {
//     result = result + el.children.length;
//     for (let i = 0; i < el.children.length; i++) {
//       result = result + countChildrenNumber(el.children[i]);
//     }
//   }
//   return result;
// }

// console.log(countChildrenNumber(document));

export const countElements = () => {
  let output = [];
  document.querySelectorAll("*").forEach((node) => {
    output.push(node.nodeName.toLowerCase());
  });
  console.log(output);
};

// const sortBy = (key) => {
//   return (a, b) => (a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0);
// };

// console.log(output.sort(sortBy("count")));
