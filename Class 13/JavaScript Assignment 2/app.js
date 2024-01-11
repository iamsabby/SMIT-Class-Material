// QUESTION 1 & 2
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = num1 + num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum+"<br>");
// var sub = num1-num2;
// document.write("Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");
// var mult= num1*num2;
// document.write("Multiplication of "+num1+" and "+num2+" is "+mult+"<br>");
// var div = num1/num2;
// document.write("Division of "+num1+" and "+num2+" is "+div+"<br>");
// var mod = num1%num2;
// document.write("Modulus of "+num1+" and "+num2+" is "+mod+"<br>");

// QUESTION 3
// var num;
// document.write("Value after variable declaration is: "+num+"<br>");
// num=5;
// document.write("Initial value: "+num+"<br>");
// num++;
// document.write("Value after increment is: "+num+"<br>");
// num=+7;
// document.write("Value after addition is: "+num+"<br>");
// num--;
// document.write("Value fater decrement is: "+num+"<br>");
// num=num%3;
// document.write("The remainder is: "+num+"<br>");

// QUESTION 4
// var tk = 600, n=5;
// var tCost=tk*n;
// document.write("Total cost to buy 5 tickets to a movie is: "+tCost+" PKR"+"<br>");

// QUESTION 5
// TO BE DONE AFTER COMPLETING LOOPS

// QUESTION 6
// var c = +prompt("Enter temperature in celcius: ");
// var f = +prompt("Enter temperature in farenheit: ");
// cf = (f - 32);
// cf=cf*(5/9);
// ff = (c * 9)/5 + 32;
// document.write(c+"C is "+ff+"F"+"<br>"); 
// document.write(f+"F is "+cf+"C"+"<br>"); 

// QUESTION 7
// var i1= 650, i2 = 250;
// var q1 = +prompt("Enter quantity for item 1: ");
// var q2 = +prompt("Enter quantity for item 2: ");
// var sC = 250;
// var totalBill = (i1*q1)+(i2*q2)+sC;

// document.write("Price of Item 1 is "+i1+"<br>");
// document.write("Quantity of Item 1 is "+q1+"<br>");
// document.write("Price of Item 2 is "+i2+"<br>");
// document.write("Quantity of Item 2 is "+i1+"<br>");
// document.write("<br>Total cost of your order is "+totalBill+"<br>");

// QUESTION 8
// var m = +prompt("Enter your marks: ");
// var tm = +prompt("Enter total marks: ");
// document.write("Total marks: "+tm+"<br>");
// document.write("Marks Obtained: "+m+"<br>");
// var per = (m/tm)*100;
// document.write("Percentage: "+per+"%<br>");

// QUESTION 9
// var d = 306.27;
// var r = 81.66;
// var dn = 10;
// var rn = 25;
// var tCurrency = (d*dn)+(r*rn);
// document.write("<h1>Currency in PKR</h1><br>");
// document.write("Total currency in PKR: "+tCurrency+"<br>");

// QUESTION 10
// var n=5;
// var result=((n+5)*10)/2;
// document.write(result);

// QUESTION 11
// var cYear = 2023;
// var bYear = +prompt("Enter your birth year: ");
// document.write("<h1>Age Calculator</h1><br>");
// document.write("<br>Current Year: "+cYear+"<br>");
// document.write("Birth Year: "+bYear+"<br>");
// age = cYear - bYear;
// document.write("Your age is: "+age+"<br>");

// QUESTION 12
// var r = +prompt("Enter radius of the circle: ");
// var circumference = (2*3.142)*r;
// var area = (3.142*r*r);
// document.write("Radius of a cricle is "+r+"<br>"); 
// document.write("The circumference is "+circumference+"<br>"); 
// document.write("The area is "+area+"<br>"); 

// QUESTION 13
var fSnack = prompt("Enter your favourite snack: ");
var cAge = +prompt("Enter your current age: "); 
var mAge = +prompt("Enter maximum age: "); 
var eAmount = +prompt("Enter estimated amount per day: ");
document.write("Favourite Snack: "+fSnack+"<br>");
document.write("Current age: "+cAge+"<br>");
document.write("Estimated Maximum Age: "+mAge+"<br>");
document.write("Amount of snacks per day: "+eAmount+"<br>");
var calc = (eAmount*365)*(mAge-cAge);
document.write("You will need "+calc+" "+fSnack+" to last until you ripe the old age of "+mAge+"<br>");