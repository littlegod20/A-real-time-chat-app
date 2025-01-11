String.prototype.capitalize = function () {
  const firstLetter = this[0].toUpperCase();
  const rest = this.slice(1).toLowerCase();
  return firstLetter + rest;
};

String.prototype.camelCase = function () {
  return this.split(" ")
    .map((item, index) => {
      if (index == 0) return item.toLowerCase();
      return item.capitalize();
    })
    .join("");
};
