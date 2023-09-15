const getInfo = (obj) => {
    let obj1 = {
        firstName: "Quan",
        degree: "NA"
    }
    let obj2 = {...obj1,...obj}
    console.log(`firstName :${obj2.firstName}, degree :${obj2.degree}`)
}
let obj = {
    firstName: "John",
    gender: "male",
    degree: "Bachelor",
    language: "English"
}
getInfo(obj)