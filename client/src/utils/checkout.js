
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const isNum = (s) => {
  // Remove whitespace
  s = s.replace(/\s/g, "");
  return /^\d+$/.test(s);
}

const hasWhiteSpace = (s) => {
  return /\s/g.test(s);
}

export const handleChangeZip = (string, zip) => {
  // Handle numbers only
  if (string.length > 0 && !isNum(string)) return 1;

  // Handle spacing
  if (string.length === 3) {
    // If we are removing a number
    if (zip.length > string.length) {
      return string.slice(0, -1);
    }
    // If we are adding a number
    return `${string} `;
  }

  // Handle copy paste string
  if (string.length > 3 && !hasWhiteSpace(string)) {
    if (string.length > 5) return 1;

    const num3 = string.charAt(2);
    const num4 = string.charAt(3);
    const num5 = string.charAt(4);

    // Add space to zip
    const addSpaceString = string.replaceAt(2, `${num3} ${num4}${num5}`);

    return addSpaceString;
  }

  return string;
}