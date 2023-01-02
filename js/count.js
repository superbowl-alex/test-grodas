export const countElements = () => {
  let elements = [];
  document.querySelectorAll("*").forEach((node) => {
    elements.push(node.nodeName.toLowerCase());
  });

  let elementsByTagName = {};
  elements.forEach((el) => {
    elementsByTagName[el] = elementsByTagName[el] + 1 || 1;
  });

  let elementsByTagLength = {};
  elements.forEach((el) => {
    elementsByTagLength[el.length] = elementsByTagLength[el.length] + 1 || 1;
  });

  const sortedElementsByTagName = Object.entries(elementsByTagName).sort(
    (a, b) => b[1] - a[1]
  );

  const arrayCountTag = Object.entries(elementsByTagLength);

  console.log("Загальна кількість елементів у DOM-дереві: ", elements.length);
  console.log("Елементи DOM-дерева, згруповані за назвою тега:");
  sortedElementsByTagName.forEach((el) => console.log(el[0], el[1]));
  console.log(
    "Елементи DOM-дерева, згруповані за кількістю символів у назві тегу:"
  );
  arrayCountTag.forEach((el) => console.log(el[0], el[1]));
};
