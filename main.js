const juan  = {
    name: "juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    } 
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));



// Object.defineProperty(juan, "navigator", {
//     value: "Chrome",
//     writable: false,
//     enumerable: true,
//     configurable: true,

// });

// Object.defineProperty(juan, "editor", {
//     value: "VS Code",
//     writable: true,
//     enumerable: false,
//     configurable: true,

// });

// Object.defineProperty(juan, "pruebaNasa", {
//     value: "extraterrestres",
//     writable: false,
//     enumerable: false,
//     configurable: false,

// });

// Object.defineProperty(juan, "terminal", {
//     value: "WSL",
//     writable: true,
//     enumerable: true,
//     configurable: false,

// });

// Object.defineProperty(juan, "", {
//     value: "",
//     writable: true,
//     enumerable: true,
//     configurable: true,

// });


console.log(Object.getOwnPropertyDescriptors(juan));