let json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};
let {name, birth} = json;
let familyName = name.family;
let birthDay = birth.day;
console.log(familyName);
console.log(birthDay);
