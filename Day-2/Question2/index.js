import _ from "lodash";

const checkProperty = (data, searchedKey) => {
  if (!data && !searchedKey) {
    return "Please enter the object and property name to check";
  } else if (!searchedKey) {
    return "Please enter the property name to check";
  }
  let ans = false;
  _.forIn(data, function (value, key) {
    if (key == searchedKey) {
      ans = true;
    }
  });
  return ans;
};
console.log(checkProperty({ name: "raj", gender: "male" }));
console.log(checkProperty({ name: "raj", gender: "male" }, "interests"));
