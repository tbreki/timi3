const user1 = {
    name: 'Paul',
    age: 20,
    salary: 600000,
    job: 'software developer',
  }
  const user2 = {
    name: 'Lisa',
    age: 30,
    salary: 900000,
    job: 'senior software developer',
  }
  // Write an arrow function that takes in the two users and returns the value
    //  {        avgAge: 25,        avgSalary: 750000,    }

const calculate = (userOne, userTwo) =>{
    const {age: ageOne, salary: salaryOne} = userOne
    const {age: ageTwo, salary: salaryTwo} = userTwo
return{
    avrAge: (ageOne + ageTwo) / 2,
    avrSalary: (salaryOne + salaryTwo) / 2,
}
}

console.log(calculate(user1,user2))
