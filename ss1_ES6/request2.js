let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4
    }
]
let result = courses.filter(course => course.rating < 4);
let result2 = result.map(course => `${course.id} - ${course.title} - ${course.rating}`)
console.log(result2)