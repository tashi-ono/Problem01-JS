const { TestScheduler } = require("jest");
const WuTangForever = require("./WuTangForeverBuzz");

test("The Clan is coming through....", () => {
  let theWu = new WuTangForever();
  let expected = theWu.wuTangClan();
  let actual =
    "1\n2\nWu\n4\nTang\nWu\n7\n8\nWu\nTang\n11\nWu\n13\n14\nWuTangForever\n";
  expect(expected).toEqual(actual);
});
