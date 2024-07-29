// Question 1

var studentNames = [];

// Question 2

var studentNames = new Array();

// Question 3

var cars = ['toyota' , 'hyundai' , 'ferrari' , 'lamborghini' , 'audi'];
console.log(cars);

// Question 4

var num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log(num);

// Question 5

var bool = [true , false];
console.log(bool);

// Question 6

var mixedArray = ['jawad' , 23 , true];
console.log(mixedArray);

// Question 7

var mobileNetworks = ['Jazz' , 'Ufone' , 'Zong' , 'Telenor'];
console.log(mobileNetworks);

// Question 8

var qualifications = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'ADC' , 'MS' , 'M. Phil.' , 'PhD']
console.log('Qualifications: ');
console.log('1) ' + qualifications[0]);
console.log('2) ' + qualifications[1]);
console.log('3) ' + qualifications[2]);
console.log('4) ' + qualifications[3]);
console.log('5) ' + qualifications[4]);
console.log('6) ' + qualifications[5]);
console.log('7) ' + qualifications[6]);
console.log('8) ' + qualifications[7]);

// Question 9

var topMovies2015 = ['Avengers: Age of Ultron' , 'Spectre' , 'Jurassic World' , 'Inside Out'];
console.log('Top Movies of 2015');
console.log('1) ' + topMovies2015[0]);
console.log('2) ' + topMovies2015[1]);
console.log('3) ' + topMovies2015[2]);
console.log('4) ' + topMovies2015[3]);
console.log('Length of the array: ' + topMovies2015.length);

// Question 10

var favoriteCars = ['Audi' , 'Volvo' , 'Ford' , 'Lamborghini'];
console.log('Favorite Cars');
console.log(favoriteCars);
console.log('First index of the array: ' + favoriteCars.indexOf('Audi'));
console.log('Car at first index of the array: ' + favoriteCars[0]);
console.log('Last index of the array: ' + favoriteCars.indexOf('Lamborghini'));
console.log('Car at last index of the array: ' + favoriteCars[3]);

// Question 11

var studentsNames = ['Michael' , 'John' , 'Tony'];
var studentsMarks = [320 , 230 , 480];
console.log('Score of ' + studentsNames[0] + ' is ' + studentsMarks[0] + '. Percentage: ' + (studentsMarks[0]/500*100) + '%');
console.log('Score of ' + studentsNames[1] + ' is ' + studentsMarks[1] + '. Percentage: ' + (studentsMarks[1]/500*100) + '%');
console.log('Score of ' + studentsNames[2] + ' is ' + studentsMarks[2] + '. Percentage: ' + (studentsMarks[2]/500*100) + '%');

// Question 12

var colors = ['orange' , 'blue' , 'green'];
console.log(colors);
// var beginningColor = prompt('What color do you want to add in the beginning of the array?');
// colors.unshift(beginningColor);
// console.log(colors);
// var endingColor = prompt('What color do you want to add in the ending of the array?')
// colors.push(endingColor);
// console.log(colors);
colors.unshift('yellow' , 'black');
console.log(colors);
colors.shift();
console.log(colors);
colors.pop();
console.log(colors);
colors.splice(1 , 0 , 'pink');
console.log(colors);
colors.splice(1 , 2);
console.log(colors);

// Question 13

var studentScores = [320 , 230 , 480 , 120];
console.log('Scores of students: ' + studentScores);
var sortedStudentScores = studentScores.sort();
console.log('Sorted scores of students: ' + sortedStudentScores);

// Question 14

var fruits = ['strawberry' , 'apple' , 'orange' , 'banana'];
console.log('Fruits list:');
console.log(fruits);
var sortedFruits = fruits.sort();
console.log('Sorted fruits list:');
console.log(sortedFruits);