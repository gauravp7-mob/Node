import fs from "node:fs";
import _ from "lodash";

fs.readFile("sample.json", function (err, fileData) {
  const data = JSON.parse(fileData);

  //console.log(data
  //    let countMale=0;
  //    let countFemale = 0;
  //    _.find(data,function(item){
  //    if(item.gender === 'male'){
  //     countMale+=1
  //    }
  //    else{
  //     countFemale+=1
  //    }
  // })
  const countMale = _.countBy(data, (item) => {
    return item.gender === "male";
  });
  console.log("Number of male :" + countMale.true);
  console.log("Number of female :" + countMale.false);

  const record = _.find(data, (item) => {
    if (item.name.firstName === "Vinay" && item.name.lastName === "Gajjar") {
      return item;
    }
  });
  console.log("Record of Vinay : ");
  console.log(record);

  const maleID = [];
  const maleName = [];
  let countMaleWithCInterest = 0;
  const femaleID = [];
  const femaleName = [];
  let countFemaleWithCInterest = 0;
  _.find(data, (item) => {
    if (item.gender === "male") {
      maleID.push(item.id);
      maleName.push(item.name.firstName + " " + item.name.lastName);
      _.find(item.interests, (interest) => {
        if (interest === "c") {
          countMaleWithCInterest += 1;
        }
      });
    } else {
      femaleID.push(item.id);
      femaleName.push(item.name.firstName + " " + item.name.lastName);
      _.find(item.interests, (interest) => {
        if (interest === "c") {
          countFemaleWithCInterest += 1;
        }
      });
    }
  });
  console.log("Male : ");
  console.log(maleID);
  console.log(maleName);
  console.log("Male with interest in C: " + countMaleWithCInterest);
  console.log("Female : ");
  console.log(femaleID);
  console.log(femaleName);
  console.log("Female with interest in C: " + countFemaleWithCInterest);

  // const nameOfSameInterest= []
  // _.find(data,(item)=>{
  //  const sameInterest =  _.filter(data2,(item2)=>{return (item2.id!==item.id&& _.isEqual(item2.interests,item.interests))})
  //  nameOfSameInterest.push(sameInterest.map((item)=>item.name.firstName))
  // })

  // const sameInterest= _.groupBy(data,"interests")
  // const filteredSameInterest = _.filter(sameInterest,(item)=>{return item.length>1})
  // console.log(filteredSameInterest)

  const descSortById = _.orderBy(data, ["id"], ["desc"]);
  console.log("Descending Order Sorting By ID :");
  console.log(descSortById);
  const sortByFirstName = _.orderBy(data, ["name.firstName"]);
  console.log("Sorting By First Name :");
  console.log(sortByFirstName);
});
