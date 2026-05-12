// kebab-case -> camelCase
String.prototype.kebab2camel = function () {
  return this.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
};

// camelCase -> kebab-case
String.prototype.camel2kebab = function () {
  return this.replace(/[A-Z]/g, function (letter) {
    return "-" + letter.toLowerCase();
  });
};

// TEST

const cssProperty = "background-color";
const jsProperty = "backgroundColor";

console.log(cssProperty.kebab2camel());
console.log(jsProperty.camel2kebab());
