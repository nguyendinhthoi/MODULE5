const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
}
console.log(Object.keys(person).find(ele => ele === 'firstName'))


const obj = {languages: person.languages.find(element => element === "English")};
obj[Object.keys(person).find(ele => ele === 'firstName')] = person.firstName;
obj[Object.keys(person).find(ele => ele === 'gender')] = person.gender;
let obj1 = {degree: person.education.degree};
const student = {...obj,...obj1};
console.log(student);
