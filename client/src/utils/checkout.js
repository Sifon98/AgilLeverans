// Made by Oliver. (2021)
// MIT - License

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const isNum = (s, char) => {
  // Remove char
  s = s.replaceAll(char, "");
  return /^\d+$/.test(s);
}

const hasWhiteSpace = (s) => {
  return /\s/g.test(s);
}

const getCharCount = (s, char) => {
  let str = "";
  for(let i = 0; i < s.length; i++) {
    if(s[i] === char) str += s[i]
  } 
  return str.length;

}

const handleSpaces = (string, oldString, char) => {
  // If we are removing a char
  if (oldString.length > string.length) {
    return string;
  }
  // If we are adding a char
  return `${string}${char}`;
}

const handleMaxLength = (string, stringLength, maxLength) => {
  // If string overflows maximum length
  if(stringLength > maxLength) {
    return 1;
  }
  // If we hit maximum length
  return string;
}

const handleCopyPaste = (string, modifyEvery, modifyAt, maxLength, char) => {
  if (!isNum(string, char)) return 1;
  // If has whitespace, remove it
  string = string.replace(/\s/g, "");

  let newString = "";
  let charCount = 0;
  for (let i = 0; i < string.length; i++) {
    // Handle last char
    if (i === (maxLength-1)) {
      newString += string[i];
      break;
    }

    const stringLength = newString.length - charCount;
    const shouldAddSpace = (stringLength+1) % modifyEvery === 0 || (stringLength+1) === modifyAt;

    if (shouldAddSpace) {
      newString += `${string[i]}${char}`;
      charCount++;
      continue;
    }

    newString += string[i];
  }

  return newString;
}

const findDiff = (str1, str2) => { 
  let diff= "";
  str2.split('').forEach((val, i) => {
    if (val != str1.charAt(i))
      diff += val;         
  });
  return diff;
}

export const handleStringModify = (string, oldString, modifyAt, modifyEvery, maxLength, char = " ") => {
  // Handle numbers only
  if (string.length > 0 && !isNum(string, char)) return 1;
  // Check if a space was added by user
  const lastChar = findDiff(oldString, string);
  if(hasWhiteSpace(lastChar.substring(0,1))) return 1;

  // Variables
  const charCount = getCharCount(string, char);
  const stringLength = string.length - charCount;
  const shouldAddSpace = stringLength % modifyEvery === 0 || stringLength === modifyAt;

  // Handle string without spaces (i.e. when user pastes string)
  if (Math.abs(string.length - oldString.length) !== 1) {
    return handleCopyPaste(string, modifyEvery, modifyAt, maxLength, char);
  }

  // Handle max length
  if(stringLength >= maxLength) {
    return handleMaxLength(string, stringLength, maxLength);
  };

  // Handle spacing
  if (shouldAddSpace) {
    return handleSpaces(string, oldString, char);
  };


  return string;
}