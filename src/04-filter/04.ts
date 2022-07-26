const ages = [18, 20, 22, 1, 100, 90, 14];

const oldAges = ages.filter(age => age > 90);

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
];

const cheapCourses = courses.filter(c => c.price < 160);
