//#####··········表单验证··········!//
//####········校验数字的表达式········####//
const number = [
  // 数字
  /^[0-9]*$/,
  // n位的数字
  /^\d{n}$/,
  // 至少n位的数字
  /^\d{n,}$/,
  // m-n位的数字
  /^\d{m,n}$/,
];
//####········校验字符串的表达式········####//
const string = [
  // 汉字
  /^[\u4e00-\u9fa5]{0,}$/,
  // 由数字、26个英文字母或者下划线组成的 3-20 位字符串
  /^\w{3,20}$/,
];
//####········校特殊的表达式········####//
const other = [
  // Email地址
  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  // 身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X
  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  // 强密码(必须为大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/,
  // 强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间)
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
];

export function test(str, reg, index) {
  if (reg == "num") return number[index].test(str);
  if (reg == "str") return string[index].test(str);
  if (reg == "other") return other[index].test(str);
}
