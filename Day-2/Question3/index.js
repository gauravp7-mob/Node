import _ from "lodash";
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

_.forEach(companies, (value) => {
  console.log(value.name);
});
console.log("Name of companies who started after 1987");
_.forEach(companies, (value) => {
  if (value.start > 1987) {
    console.log(value.name);
  }
});
console.log("Companies based on their end date in ascending order");
for (let i = 0; i < companies.length; i++) {
  for (let j = 0; j < companies.length - i - 1; j++) {
    if (companies[j + 1].end < companies[j].end) {
      const swapElement = companies[j];
      companies[j] = companies[j + 1];
      companies[j + 1] = swapElement;
    }
  }
}
console.log(companies);
// const sort = _.orderBy(companies, ["end"]);
// console.log(sort);
console.log("Sorted Companies based on thier ages");
const sortByAge = _.orderBy(companies, ["end" - "start"]);
console.log(sortByAge);

const sumOfAges = _.reduce(
  companies,
  function (sum, company) {
    return sum + (company.end - company.start);
  },
  0
);
console.log(`sum of ages = ${sumOfAges}`);

const [company] = companies;

const printObject = (newObject) => {
  const { name, category } = newObject;
  console.log(`name : ${name}`);
  console.log(`category:${category}`);
};
printObject(company);

const sumArray = (...numberArray) => {
  return _.reduce(
    numberArray,
    function (sum, num) {
      sum += num;
      return sum;
    },
    0
  );
};

console.log(sumArray(1, 2, 3, 4));

const addInArray = (...args) => {
  return _.reduce(
    args,
    function (answer, item) {
      if (typeof item === "object") {
        answer.push(...item);
      } else {
        answer.push(item);
      }
      return answer;
    },
    []
  );
};

console.log(addInArray(1, 2, "3", [2, 3]));

let num = 0;
const increment = () => {
  return ++num;
};
increment();
console.log(increment());

// const desQuery = (url) => {
//   const newUrl = new URL(url);
//   let obj = {};
//   newUrl.searchParams.forEach((value, key) => {
//     obj[key] = value;
//   });
//   return obj;
// };

const desQuery = (url) => {
  let obj = {};
  const newUrl = url.split("?");
  const url1 = newUrl[1].split("&");
  for (let i = 0; i < url1.length; i++) {
    const finalUrl = url1[i].split("=");
    obj[finalUrl[0]] = finalUrl[1];
  }
  return obj;
};

console.log(desQuery("http://xyz.com?a=Hi&b=Bye"));
