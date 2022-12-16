// const susan=
// {
//     firstname:"susan",
//     lastname:"steward",
//     age:14,
//     hobbies:
//     {
//         hobby1:"singing",
//         hobby2:"dancing"
//     }
// };
// const {age ,...rest}=susan;
// console.log(age,rest)
// let animals = [
//     {
//       name:'Lion',
//       category: 'carnivore'
//     },
//     {
//       name:'dog',
//       category:'pet'
//     },
//     {
//       name:'cat',
//       category:'pet'
//     },
//     {
//       name:'wolf',
//       category:'carnivore'
//     }
//   ]
  //map
//   let category=animals.map((animal)=>animal.category);
//   console.log( category)
//new set
// let category=[...new Set (animals.map((animal)=>animal.category))]
// console.log(category)
// let category=[...new Set (animals.map((animal)=>animal.name))]
// console.log(category)

//settimeout
// setTimeout(()=>{
//   console.log("Sahar basaracak")
// },3000)

//map elementlerin yerini deyiserek capa vermek
// let singleUser=users.map((e)=>{
//   let fullname=e.firstname+''+user.lastname
// })


//filter
// let users = [
//   { firstName: "Susan", age: 14 },
//   { firstName: "Daniel", age: 16 },
//   { firstName: "Bruno", age: 56 },
//   { firstName: "Jacob", age: 15 },
//   { firstName: "Sam", age: 64 },
//   { firstName: "Dave", age: 56 },
//   { firstName: "Neils", age: 65 }
// ]

// const youngpeople=users.filter((e)=>{
// return e.age<=15
// })
// const seniorpeople=users.filter((b)=>{
//   return b.age>=50
// })
// console.log(seniorpeople)
// console.log(youngpeople)

//find
// const tap=users.find((p)=> p.age===65)
// console.log(tap)

//rest && spread operators
//rest
// const Susan = {
//   firstName: "Susan",
//   lastName: "Steward",
//   age: 14,
//   hobbies: {
//     hobby1: "singing",
//     hobby2: "dancing"
//   }
// };
// const {age,...rest}=Susan
// console.log(age,rest)
// //spread
// let pets=["cat","dog","tigger","wolf","rabbits"]
// let carni=["lion","leopard"]
// let sumsp=[...pets,...carni]
// console.log(sumsp)

//basqa misal
// let name={
//   firstname:"shr",
//   lastname:"alyrva"
// }
// let hobbies={
//   hobbies1:"to do sport",
//   hobbies2:" play the piano",
//   hobbies3:"to write"
// }
// let smsp={...name,...hobbies}

// console.log(smsp)

//filter && reduce
//reduce numune misal
let staffs = [
    { name: "Susan", age: 14, salary: 100 },
    { name: "Daniel", age: 16, salary: 120 },
    { name: "Bruno", age: 56, salary: 400 },
    { name: "Jacob", age: 15, salary: 110 },
    { name: "Sam", age: 64, salary: 500 },
    { name: "Dave", age: 56, salary: 380 },
    { name: "Neils", age: 65, salary: 540 }
  ];
  // umumi maasi hesablamaq:
  // const totalsum=staffs.reduce((total,staff)=>{
  //   total+=staff.salary;
  //   return total;
  // },0)
  // console.log(totalsum)
  
  staffs.forEach((a)=>{
    console.log(a?.name)
  })