module.exports = function check(str, bracketsConfig) {
    let brackets = {
        '(' : 0,
        ')' : 0
    };
  for (let bracket in str) {
    brackets[bracket] += 1;
 }
 return brackets['('] === brackets[')'];
};
