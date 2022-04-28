let obj = [
  { a: 0, name: "张三", age: 20, b: 0 },
  { a: 1, name: "李四", age: 21, b: 1 },
  { a: 2, name: "王五", age: 22, b: 2 },
];
let format = { name: "姓名", age: "年龄" };

function $fmtObj(data, format) {
  let newArr = [];
  for (let [i, v] of data.entries()) {
    for (let _v of Object.entries(format)) {
      newArr[i] || (newArr[i] = {});
      newArr[i][_v[1]] = v[_v[0]];
    }
  }
  return newArr;
}

console.log($fmtObj(obj, format));
