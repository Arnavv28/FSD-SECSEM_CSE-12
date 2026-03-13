let students = [];

function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

let student = {
name:name,
roll:roll,
math:math,
science:science,
english:english
};

students.push(student);

document.getElementById("result").innerHTML = "Student Added Successfully";

}

function displayStudents(){

let output = "All Students:<br>";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total / 3;

output += "Name: " + s.name +
" | Roll: " + s.roll +
" | Total: " + total +
" | Avg: " + avg.toFixed(2) + "<br>";

}

document.getElementById("result").innerHTML = output;

}

function calculateTotal(){

let output = "Total Marks:<br>";

for(let s of students){

let total = s.math + s.science + s.english;

output += s.name + " (Roll: " + s.roll + ") - Total: " + total + "<br>";

}

document.getElementById("result").innerHTML = output;

}

function calculateAverage(){

let output = "Average Marks:<br>";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total / 3;

output += s.name + " (Roll: " + s.roll + ") - Average: " + avg.toFixed(2) + "<br>";

}

document.getElementById("result").innerHTML = output;

}

function showAbove80(){

let output = "Students Above 80 Average:<br>";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total / 3;

if(avg > 80){
output += s.name + " (" + avg.toFixed(2) + ")<br>";
}

}

document.getElementById("result").innerHTML = output;

}

function showFailed(){

let output = "Failed Students:<br>";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total / 3;

if(avg < 40){
output += s.name + " (" + avg.toFixed(2) + ")<br>";
}

}

document.getElementById("result").innerHTML = output;

}

function countStudents(){

document.getElementById("result").innerHTML = "Total Students: " + students.length;

}