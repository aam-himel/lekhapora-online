const coursesData = [
    {
        id: 1,
        title: "React - The Complete Guide (incl Hooks, React Router, Redux",
        author: "Academind by Maximilian Schwarzmüller",
        price: 9.99,
        rating: 4.6,
        originalPrice: 20.99
    },
    {
        id: 2,
        title: "Modern React with Redux [2020 Update]",
        author: "Stephen Grider",
        price: 23.99,
        rating: 4.6,
        originalPrice: 34.99
    },
    {
        id: 3,
        title: "The Complete React Developer Course (w/ Hooks and Redux)",
        author: "Andrew Mead",
        price: 32.99,
        rating: 4.7,
        originalPrice: 47.99
    },
    {
        id: 4,
        title: "The Complete JavaScript Course 2020: Build Real Projects!",
        author: "Jonas Schmedtmann",
        price: 49.99,
        rating: 4.1,
        originalPrice: 88.99
    },
    {
        id: 5,
        title: "UX & Web Design Master Course: Strategy, Design, Development",
        author: "Joe Natoli",
        price: 60.99,
        rating: 3.9,
        originalPrice: 67.99
    },
    {
        id: 6,
        title: "React - The Complete Guide (incl Hooks, React Router, Redux",
        author: "Academind by Maximilian Schwarzmüller",
        price: 29.99,
        rating: 4.1,
        originalPrice: 35.99
    },
    {
        id: 7,
        title: "The Ultimate Digital Painting Course - Beginner to Advanced",
        author: "Jaysen Batchelor, Austin Batchelor",
        price: 39.99,
        rating: 4.2,
        originalPrice: 45.99
    },
    {
        id: 8,
        title: "Graphic Design Bootcamp: Photoshop, Illustrator, InDesign",
        author: "Derrick Mitchell",
        price: 199.99,
        rating: 4.9,
        originalPrice: 499.99
    },
    {
        id: 9,
        title: "Ultimate Photoshop Training: From Beginner to Pro",
        author: "Adobe",
        price: 5.99,
        rating: 4.6,
        originalPrice: 9.99
    },
    {
        id: 10,
        title: "Illustrator CC 2020 MasterClass",
        author: "Mamun",
        price: 43.99,
        rating: 4.9,
        originalPrice: 47.99
    },
    {
        id: 11,
        title: "The Ultimate Drawing Course - Beginner to Advanced",
        author: "Jaysen Batchelor, Quinton Batchelor",
        price: 20.99,
        rating: 4.5,
        originalPrice: 43.99
    },{
        id: 12,
        title: "Gamification & Behavioral Design: The Octalysis Framework",
        author: "Yu-kai Chou",
        price: 9.99,
        rating: 4.4,
        originalPrice: 22.99
    },
    {
        id: 13,
        title: "The Complete App Design Course - UX, UI and Design Thinking",
        author: "App Brewery Co.",
        price: 5.99,
        rating: 4.4,
        originalPrice: 7.99
    },
    {
        id: 14,
        title: "Design Thinking in 3 Steps",
        author: "Designit Strategic Design, Alan Cooper",
        price: 194.99,
        rating: 4.4,
        originalPrice: 447.99
    }
]

// shiffling courses data
const shuffle = (courses) => {
    for(let i= courses.length; i ; i--){
        let temp = Math.floor(Math.random() * i);
        [courses[i-1], courses[temp]] = [courses[temp],courses[i-1]];
    }
}

shuffle(coursesData);
export default coursesData;