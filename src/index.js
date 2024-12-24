module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPair = {};

  bracketsConfig.forEach(([open, close]) => {
    openBrackets.push(open);
    bracketsPair[close] = open;
  });

  let stack = [];

  for (let i = 0; i < str.length; i += 1) {
    let currSymbol = str[i];

    if (openBrackets.includes(currSymbol)) {
     
      if (bracketsPair[currSymbol] === currSymbol && stack[stack.length - 1] === currSymbol) {
        stack.pop();
      } else {
        stack.push(currSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topEl = stack[stack.length - 1];
      if (bracketsPair[currSymbol] === topEl) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
