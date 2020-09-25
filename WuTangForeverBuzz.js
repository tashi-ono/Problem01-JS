class WuTangForeverBuzz {
  wuTangClan() {
    let n = 15;
    let output = "";
    for (let i = 1; i <= n; i += 1) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += "WuTangForever\n";
      } else if (i % 3 === 0) {
        output += "Wu\n";
      } else if (i % 5 === 0) {
        output += "Tang\n";
      } else {
        output += i.toString() + "\n";
      }
    }
    return output;
  }
}

module.exports = WuTangForeverBuzz;

// console.log(wuTangClan(15));
// .concat() is usually more efficient
// refactor as a switch statement, which is more time efficient
