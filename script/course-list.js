let date = new Date();
let content = document.querySelector("#date_time");
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getSeconds();
content.innerHTML = `${day}/${month}/${year} ${hour}:${minutes}`


let toggle = document.getElementById("toggle");
let nav = document.querySelector(".navigation");
toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
})


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const credit = document.querySelector(".credit")
let totalCredits = 10;

const all = document.querySelector(".all");
const cse = document.querySelector(".cse");
const wdd = document.querySelector(".wdd");

function displayCourses(data) {
    var body = document.querySelector(".classes");
    data.forEach(course => {
        let title = document.createElement("h4");
        title.innerHTML = `${course.subject} ${course.number}`;
        if (course.completed) {
            title.classList.add("completed");
        }



        body.appendChild(title);
    });
}

displayCourses(courses);

all.addEventListener("click", () => {
    let body = document.querySelector(".classes");
    body.innerHTML = "";
    displayCourses(courses);

    const completed = courses.filter(course => course.completed);
    totalCredits = completed.reduce((total, course) => total + course.credits, 0);
    credit.innerHTML = `<p> ${totalCredits}<\p>`
})

cse.addEventListener("click", () => {
    let body = document.querySelector(".classes");
    body.innerHTML = "";
    displayCourses(courses.filter(course => course.subject == "CSE"));

    const cse_credit = courses.filter(course => course.subject == "CSE");
    const completed = cse_credit.filter(course => course.completed);
    totalCredits = completed.reduce((total, course) => total + course.credits, 0);
    credit.innerHTML = `<p> ${totalCredits}<\p>`
})

wdd.addEventListener("click", () => {
    let body = document.querySelector(".classes");
    body.innerHTML = "";
    displayCourses(courses.filter(course => course.subject == "WDD"))

    const wdd_credit = courses.filter(course => course.subject == "WDD");
    const completed = wdd_credit.filter(course => course.completed);
    totalCredits = completed.reduce((total, course) => total + course.credits, 0);
    credit.innerHTML = `<p> ${totalCredits}<\p>`
});