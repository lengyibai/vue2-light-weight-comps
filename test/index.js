let obj = {
  user: {
    name: "冷弋白",
    age: 20,
  },
};

let a = obj.user;

a.age = 21;

console.log(obj.user.age);
