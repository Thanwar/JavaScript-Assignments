//-----------------> CHAPTER 1
    // //task1
    //alert("Hello! Welcome to the website");
    
    // //task2
    //alert("Error! Please enter a valid password");
    
    // //task3
    //alert("Welcome to JS Land... \n Happy Coding!");

    // //task4
    // alert("Welcome to JS Land...");
    // alert("Happy Coding!");

    // //task5
    //console.log(alert("Hello... I can run JS through my web browser's console"));


//-----------------> CHAPTER 2
    // //task1
    // var username;
    
    // //task2
    // var myName ="Hasnain Shafeeq";
    
    // //task3
    // var message;
    // message = "Hello World!"
    // alert(message);

    // //task4
    // var studentName = "Hasnain Shafeeq";
    // var studentAge = 23;
    // var studentDegree = "Certified Mobile Application Development";
    // alert(studentName);
    // alert(studentAge + " years old");
    // alert(studentDegree);

    // //task5
    // var item = "PIZZA";
    // alert(item + "\n" + item.slice(0,4) + "\n" + item.slice(0,3) + "\n" + item.slice(0,2) + "\n" + item.slice(0,1));

    // //task6
    // var email = "hasnainshafeeq1997@gmail.com";
    // alert("My email address is " + email);

    // //task7
    // var book = "A smarter way to Learn JavaScript";
    // alert("I am trying to learn from the Book " + book);

    // //task8
    // document.write("Yah! I can write HTML content through JavaScript")

    // //task9
    // var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    // alert(a);


//-----------------> CHAPTER 3
    // //task1
    // var age = 23;
    // alert("I am "+ age +" years old");

    // //task2
    //Skipped by command of Sir Ghous
    
    // //task3
    // var birthYear = 1997;
    // document.write("My birth year is "+ birthYear);
    // document.write("<br>Data type of my declared variable is "+ typeof(birthYear));
    
    // //task4
    // var visitorName = "Hasnain Shafeeq";
    // var productTitle = "T-Shirt";
    // var Quantity = 7;
    // document.write(visitorName + " ordered "+ Quantity + " " + productTitle +"(s) on XYZ Clothing Store");


//-----------------> CHAPTER 4
    // //task1
    //var a, b, c;

    // //task2
    //Legal variables 
    // var abc;
    // var abc123;
    // var abc_xyz;
    // var abcABC;
    // var abc_1AB;

    //Illegal variables 
    // var 000abc;
    // var !abc;
    // var abc_;
    // var abc[];
    // var 00;

    // //task3
    // document.write("<h1>Rules for naming JS variables </h1>");  
    // document.write("Variable names can only contain numbers, $, and _. For example: $my_1stVariable");  
    // document.write("<br>Variables must begin with a letter, $ or _. For example: $name, _name or name");  
    // document.write("<br>Variable names are case sensitive"); 
    // document.write("<br>Variable names should not be JS keywords");


//-----------------> CHAPTER 5
    // //task1    
    // a = +prompt("Enter any number");
    // b = +prompt("Enter another number");
    // c = a + b;
    // document.write("Sum of " + a + " and " + b + " is " + c );

    // //task2
    // a = +prompt("Enter any number");
    // b = +prompt("Enter another number");
    // c = a - b;
    // document.write("<br>Subtraction of " + a + " and " + b + " is " + c );
    // c = a * b;
    // document.write("<br>Multiplication of " + a + " and " + b + " is " + c );
    // c = a / b;
    // document.write("<br>Division of " + a + " and " + b + " is " + c );

    // //task3
    //var a;
    // document.write("Value after variable declaration is " + a);
    // a = 5;
    // document.write("<br>Initial Value: " + a);
    // a++;
    // document.write("<br>Value after increament is: " + a);
    // a += 7;
    // document.write("<br>Value after additio is: " + a);
    // a--;
    // document.write("<br>Value after decreament is: " + a);
    // a %= 3;
    // document.write("<br>The Reminder is: " + a);

    // //task4
    // var ticketPrice = 600;
    // document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice*5 + "PKR");

    // //task5
    // var n = 4;
    // for(i = 1; i <= 10; i++){
    //     document.write(n + " x " + i + " = " + n*i + "<br>");
    // }

    // //task6
    // var CT = 25;
    // var CT_to_FT = (CT * 9/5) + 32;
    // var FT = 70;
    // var FT_to_CT = (FT - 32) * 5/9;
    // document.write(CT + "°C is " + CT_to_FT + "°F<br>");
    // document.write(FT + "°F is " + FT_to_CT + "°C");

    // //task7
    // document.write("<h1>Shopping Cart</h1>");
    // var i1 =  650;
    // var qi1 = 3;
    // var i2 = 100;
    // var qi2 = 7;
    // var sc = 100;
    // var tc = (i1*qi1) + (i2*qi2) + sc;
    // document.write("Price of item 1 is: "+i1+"<br> Quantity of item 1 is: "+qi1+"<br> Price of item 2 is: "+i2+"<br> Quantity of item 2 is: "+qi2+"<br> Shipping Charges"+ sc +"<br><br> Total cost of your order is: "+tc);

    // //task8
    // document.write("<h1>Mark Sheet</h1>");
    // var tm =  980;
    // var om = 804;
    // var per = (om/tm) * 100
    // document.write("Total marks: " + tm);
    // document.write("<br>Marks obtained: " + om);
    // document.write("<br>Percentage: " + per + "%");

    // //task9
    // document.write("<h1>Currency in PKR</h1>");
    // var PKR = (10*104.80) + (25 * 28);
    // document.write("total currency in PKR: "+PKR);

    // //task10
    // a = 10;
    // a = (((a + 5) * 10) / 2);
    // document.write(a);

    // task11
    // var CY = 2020;
    // var BY = 1997;
    // var age = CY-BY;
    // document.write(age);
    
    // task12
    // var radius = 20;
    // var circumference = 2 * 3.142 * radius;
    // var area = 3.142 * radius*radius;
    // document.write("Radius of circle is:" + radius);
    // document.write("<br>The circumference is:" + circumference);
    // document.write("<br>The area is:" + area);

    // //task13
    // var FS = " Kurleez ";
    // var CA = 15;
    // var MA = 65;
    // var PD = 3;
    // var T = ((MA-CA) * (PD*365));
    // document.write("<h1>The Lifetime Supply Calculator</h1>");
    // document.write("Favorite Snack: "+FS);
    // document.write("<br>Current Age: "+CA);
    // document.write("<br>Estimated Max Age: "+MA);
    // document.write("<br>Amount of Snacks Per Day: " + PD);
    // document.write("<br>You will need: "+T + FS + "to last you until the ripe old age of " + (MA-CA));

    
//-----------------> CHAPTER 6-9
    // //task1
    // document.write("<h3>Result</h3>");
    // var a = 10;
    // document.write("The value of a is: "+a+"<br>");
    // document.write("----------------------------------------------------------<br><br>");
    
    // ++a;
    // document.write("The value of ++a is 11 <br>")
    // document.write("Now the value of a is: "+a+"<br><br>")

    // a++;
    // document.write("The value of a++ is 11 <br>")
    // document.write("Now the value of a is: "+a+"<br><br>")
    
    // --a;
    // document.write("The value of --a is 11 <br>")
    // document.write("Now the value of a is: "+a+"<br><br>")
    
    // a--;
    // document.write("The value of a-- is 11 <br>")
    // document.write("Now the value of a is: "+a+"<br><br>")

    // //task2
    // var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;
    // document.write("Inital values are a = 2, b = 1 <br>");
    // document.write("at --a  => A value will decrease by 1 new value is now 1 <br>");
    // document.write("at --b  => B value will decrease by 1 new value is now 0 <br>");
    // document.write("at ++b  => B value will increae by 1 new value is now 1 <br>");
    // document.write("at b--  => B value will decrease by 1 new value remains 1(cz it's a post decreament) <br>");
    // document.write("So the expression will be, 1 - 0 + 1 + 1 <br>");
    // document.write("Value of result is "+ result);
    
    // //task3
    // var a = prompt("Enter your name")
    // alert("Welcome to website dear "+a)
    
    // //task4
    //N/A in PDF
    
    // //task5
    // var  a = prompt("Enter any number: ");
    // if(a > 0) {
    //     for(i=1; i <= 10; i++){
    //         document.write(a+"*"+i+"="+a*i+ "<br>");
    //     }
    // }
    // else {
    //     for(i=1; i <= 10; i++){
    //         document.write(5+"*"+i+"="+5*i+ "<br>");
    //     }
    // }

    // //task6
    // var s1 = prompt("Enter Subject 1 Name");
    // var s2 = prompt("Enter Subject 2 Name");
    // var s3 = prompt("Enter Subject 3 Name");
    // var tm = 100;
    // var oms1 = +prompt("Enter "+ s1 +"'s Obtained Marks");
    // var oms2 = +prompt("Enter "+ s2 +"'s Obtained Marks");
    // var oms3 = +prompt("Enter "+ s3 +"'s Obtained Marks");
    // var tom = oms1+oms2+oms3;
    // var per = (tom/300) * 100;

    // document.write("<table>");
    // document.write("<tr>");
    // document.write("<th>Subject</th>");
    // document.write("<th>Total Marks</th>");
    // document.write("<th>Obtained Marks</th>");
    // document.write("<th>Percentage</th>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td>"+s1+"</td>");
    // document.write("<td>"+tm+"</td>");
    // document.write("<td>"+oms1+"</td>");
    // document.write("<td>"+((oms1/tm)*100)+"%</td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td>"+s2+"</td>");
    // document.write("<td>"+tm+"</td>");
    // document.write("<td>"+oms2+"</td>");
    // document.write("<td>"+((oms2/tm)*100)+"%</td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td>"+s3+"</td>");
    // document.write("<td>"+tm+"</td>");
    // document.write("<td>"+oms3+"</td>");
    // document.write("<td>"+((oms3/tm)*100)+"%</td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td></td>");
    // document.write("<td>"+tm*3+"</td>");
    // document.write("<td>"+tom+"</td>");
    // document.write("<td>"+per+"%</td>");
    // document.write("</tr>");


//-----------------> CHAPTER 9-11
    // //task1
    //  var city = prompt("Enter Your city name");
    //  if(city == "karachi" || city == "Karachi" || city == "KARACHI"){
    //      document.write("Welcome to the city of lights!")
    //  }

    // //task2
    // var gender = prompt("Enter your gender: ");
    // if(gender =="male" || gender =="Male" || gender =="MALE") {
    //     document.write("Good Morning Sir");
    // }
    // else if(gender =="female" || gender =="Female" || gender =="FEMALE") {
    //     document.write("Good Morning Ma'am.");
    // }
    // else { 
    //     document.write("You haven't entered the correct gender");    
    // }

    // //task3
    // var color = prompt("Enter a Traffic Signal Color: ");
    // if(color == "red" || color == "Red" || color == "RED") {
    //     document.write("Must Stop")        
    // }
    // else if(color == "yellow" || color == "Yellow" || color == "YELLOW") {
    //     document.write("Ready to move")
    // }
    // else if(color== "green" || color== "Green" || color== "GREEN") {
    //     document.write("Move now")
    // }
    // else { 
    //     document.write("You haven't entered the correct color");    
    // }

    // //task4
    // var fuel = +prompt("Enter Remaining fuel in your Vechicle like 0.25")
    // if(fuel < 0.25){
    //     document.write("Please refill the fuel in your car")
    // }

    // //task5
    // //A
    // var a = 4;
    // if (++a === 5){
    //     alert("given condition for variable a is true");
    // }
    // //B
    // var b = 82;
    // if (b++ === 83){
    //     alert("given condition for variable b is true");
    // }
    // //C
    // var c = 12;
    // if (c++ === 13){
    //     alert("condition 1 is true");
    // }
    // if (c === 13){
    //     alert("condition 2 is true");
    // }
    // if (++c < 14){
    //     alert("condition 3 is true");
    // }
    // if(c === 14){
    //     alert("condition 4 is true");
    // }
    // //D
    // var materialCost = 20000;
    // var laborCost = 2000;
    // var totalCost = materialCost + laborCost;
    // if (totalCost === laborCost + materialCost){
    //     alert("The cost equals");
    // }
    // //E
    // if (true){
    //     alert("True");
    // }
    // if (false){
    //     alert("False");
    // }
    // //F
    // if("car" < "cat"){
    //     alert("car is smaller than cat");
    // }

    // //task6
    // document.write("<h2>Marksheet</h2>");
    // var s1 = +prompt("enter marks of first subject");
    // var s2 = +prompt("enter marks of second subject");
    // var s3 = +prompt("enter marks of third subject");
    // var tom = s1+s2+s3;
    // document.write("Total marks: 300 <br>");
    // document.write("Marks Obtained: "+tom+"<br>");
    // percentage = (tom/300)*100;
    // document.write("Percentage: "+percentage+"% <br>")
    // if(percentage >= 80){
    //     document.write("Grade: A-one <br>")
    //     document.write("Remarks: Excellent")
    // }
    // else if(percentage >= 70){
    //     document.write("Grade: A <br>")
    //     document.write("Remarks: Good ")
    // }
    // else if(percentage >= 60){
    //     document.write("Grade: B <br>")
    //     document.write("Remarks: You need to improve")
    // }
    // else if(percentage <= 59){
    //     document.write("Grade: Fail <br>")
    //     document.write("Remarks: Sorry")
    // }

    // //task7
    // document.write("<h2>Guess Game</h2>");
    // var a = 8
    // var b= +prompt("Please Guess a secret number 1 to 10")
    // if(b == a){
    //     document.write("Bingo! correct answer")
    // }
    // else if(b+1 == a){
    //     document.write("close enough to the correct answer")
    // }

    // //task8
    // var a = +prompt("Enter a number");
    // if(a % 3 == 0) {
    //     document.write("Number is divisile by 3");
    // }
    // else {
    //     document.write("Number is not divisiable by 3");
    // }

    // //task9
    // var a = +prompt("Enter a number");
    // if(a % 2 == 0){
    //     document.write("Number is Even");
    // }
    // else{
    //     document.write("Number is Odd");
    // }

    // //task10
    // var a = +prompt("enter a temprature");
    // if(a > 40){
    //     document.write("it is too hot outside");
    // }
    // else if(a > 30){
    //     document.write("The Weather today is normal");
    // }
    // else if(a > 20){
    //     document.write("Today's weather is cool");
    // }
    // else if(a > 10){
    //     document.write("OMG! today's weather is so cool");
    // }

    // //task11
    // var num1 = +prompt("Enter first number: ")
    // var num2 = +prompt("Enter second number: ")
    // var operator = prompt("enter any operator from:  + - * / & %  ")
    // var result;
    // if(operator === "+"){
    //     result = num1+num2;
    //     document.write(result);
    // }
    // else if(operator === "-"){
    //     result = num1-num2;
    //     document.write(result);
    // }
    // else if(operator === "*"){
    //     result = num1*num2;
    //     document.write(result);
    // }
    // else if(operator === "/"){
    //     result = num1/num2;
    //     document.write(result);
    // }
    // else if(operator === "%"){
    //     result = num1%num2;
    //     document.write(result);
    // }
    // else{
    //     document.write("You haven't enter the correct operator");
    // }


//-----------------> CHAPTER 12-13
    // //task1
    // var char = +prompt("Enter any character");
    // var result = "";
    // if (char>=48 && char<=57){
    //     result = "Character is a number";
    // }
    // else if(char >= 65 && char <= 90){
    //     result = "Character is a uppercase letter";
    // }
    // else if (char>=97 && char<=122){
    //     result = "Character is a lowercase letter";
    // }
    // else {
    //     result = "Input again please";
    // }
    // alert(result);

    // //task2
    // var a = +prompt("enter a number");
    // var b = +prompt("enter second number");
    // if(a > b){
    //     document.write("first is greater than second number");
    // }
    // else if (a < b){
    //     document.write("second number is greater than first number");
    // }
    // else if (a === b){
    //     document.write("both are equal");
    // }

    // //task3
    // var i = +prompt("Enter a number")
    // if (i < 0) {
    //     document.write("Number is negative");
    // }
    // else if (i > 0) {
    //     document.write("Number is positive");
    // }
    // else if(i ===0 ) {
    //     document.write("Number is 0");
    // }

    // //task4
    // var uerInput = prompt("Enter a string of length 1");
    // if (uerInput==="a" || uerInput === "e" || uerInput=== "i" ||uerInput=== "o" ||uerInput=== "u"){
    //     document.write("true");
    // }
    // else{
    //     document.write("false");
    // }

    // //task5
    // var pwd = prompt("Please enter your password");
    // var pwd2 = "admin";
    // if (pwd == ""){
    //     document.write("Please enter your password");
    // }
    // else if (pwd == pwd2){
    //     document.write("Correct! The password you entered matches the original password");
    // }
    // else{
    //     document.write("Incorrect Password");
    // }

    // //task6
    // var greeting;
    // var hour = 13;
    // if (hour < 18) {
    //     greeting = "Good day";
    // }
    // else {
    //     greeting = "Good evening";
    // }
    // alert(greeting);
    
    // //task7
    // var time = +prompt("enter a time in 0000 format");
    // if(time >= 0000 && time < 1200){
    //     document.write("Good Morning");
    // }
    // else if(time >= 1200 && time < 1700){
    //     document.write("Good afternoon");
    // }
    // else if(time >= 1700 && time < 2100){
    //     document.write("Good Evening");
    // }
    // else if(time >= 2100 && time <= 2359){
    //     document.write("Good Night");
    // }


//-----------------> CHAPTER 14-16
    // //task1
    // var studentNames = [];

    // //task2
    // var studentNames = {};

    // //task3
    // var studentNames = ["Hasnain", "Shahbaz", "Sabbar"];

    // //task4
    // var studentNames = [7,6,5];

    // //task5
    // var studentNames = [true,false,true,true];

    // //task6
    // var studentNames = [7,"String",true,9];

    // //task7
    // document.write("<h3>Qualifications</h3>");
    // var degrees = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
    // for (var i = 0; i <= degrees.length-1; i++) {
    //     document.write(i+1+") "+degrees[i]+"<br>");
    // }

    // //task8
    // var studentNames = ["Hasnain", "Shahbaz", "Sabbar"];
    // var studentNumber = [320, 230, 480];
    // var percentage = [];
    // for (var i = 0; i <= 2; i++) {
    //     percentage.push((studentNumber[i]/500) * 100);
    //     document.write("Score of "+studentNames[i]+" is "+studentNumber[i]+" Percentage "+percentage[i]+"% <br>");
    // }

    // //task9
    // var colors= ["black", "white", "green"];
    // document.write("Original Values of Array Are: "+colors+"<br>-----------<br>");
    //A
    // var userchoice = prompt("Please enter a color name to add in the beginning of the array");
    // colors.unshift(userchoice);
    // document.write(colors);
    //B
    // var userchoice = prompt("Please enter a color name to add in the end of the array");
    // colors.push(userchoice);
    // document.write(colors);
    // //C
    // colors.unshift("cyan, magenta");
    // document.write(colors);
    // //D
    // colors.shift(0);
    // document.write(colors);
    // //E
    // colors.pop();
    // document.write(colors);
    // //F
    // var index = +prompt("enter a index number where you want to add");
    // var userchoice = prompt("Please enter a color name to add at the desired index");
    // colors.splice(index,0,userchoice)
    // document.write(colors);
    // //G
    // var index = +prompt("enter a index number to delete");
    // var count = prompt("how many items you want to delete");
    // colors.splice(index, count,);
    // document.write(colors);

    // //task10
    // var std_score =[320,230,480,120];
    // document.write("Scores of students: "+std_score+"<br>");
    // std_score.sort();
    // document.write("Ordered scores of students: "+std_score);

    // //task11
    // var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
    // document.write("Cities list: "+cities+"<br>");
    // var citiesSliced = cities.slice(0,3);
    // document.write("Selected cities list: "+citiesSliced);

    // //task12
    // var arr = ["This", "is", "my", "cat"];
    // arr2=arr.join(" ");
    // document.write("Array: <br>"+arr+"<br>");
    // document.write("String: <br>"+arr2);

    // //task13
    // var arr =[];
    // arr.push("Keyboard");
    // arr.push("Mouse");
    // arr.push("Printer");
    // arr.push("Monitor");    
    // document.write("Devices<br>"+arr);
    // document.write("<br><br>");
    // for (var i = 0; i <= 3; i++) {
    //     document.write("Out<br>"+arr[0]);
    //     arr.shift();
    //     document.write("<br>");
    // }

    // //task14
    // var arr =[];
    // arr.push("Keyboard");
    // arr.push("Mouse");
    // arr.push("Printer");
    // arr.push("Monitor");    
    // document.write("Devices<br>"+arr);
    // document.write("<br><br>");
    // for (var i = 0; i <= 3; i++) {
    //     document.write("Out<br>"+arr[arr.length-1]);
    //     arr.pop();
    //     document.write("<br>");
    // }
    
    //task15
    // var phoneManufac = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
    // document.write("<select>");
    // for (var i = 0; i <= phoneManufac.length-1; i++) {
    //     document.write("<option>"+phoneManufac[i]+"</option>");
    // }
    // document.write("</select>");


//-----------------> CHAPTER 17-20
    // //task1
    // var emptyArray = [
    //     [],
    //     [],
    //     [],
    // ];

    // //task2
    // var matrix = [
    //     [0, 1, 2, 3],
    //     [1, 0, 1, 2],
    //     [2, 1, 0, 2],
    // ];
    // var m;
    // for (m of matrix) {
    //     document.write(m + "<br >");
    // }

    // //task3
    // for (var i = 1; i <= 10; i++) {
    //     document.write(i + "<br>");
    // }

    // //task4
    // var tableOf = +prompt("Enter a number to show it's multiplication table");
    // var tableLength = +prompt("Enter length multiplication table ");
    // for (var i = 1; i <= tableLength; i++) {
    //     document.write(tableOf + "x" + i + "=" + tableOf*i + "<br>");
    // }
    
    // //task5
    // var fruits = ["apple","banana","mango","orange","strawberry"];
    // for (var i = 0; i <= fruits.length-1; i++) {
    //     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    // }

    // //task6
    // document.write("<h3>Counting:</h3>");
    // for (var i = 1; i <= 15; i++) {
    //     document.write(i + ", ");
    // }

    // document.write("<h3>Reverse Counting:</h3>");
    // for (var i = 10; i >= 1; i--) {
    //     document.write(i + ", ");
    // }

    // document.write("<h3>Even:</h3>");
    // for (var i = 0; i <= 20; i = i + 2) {
    //     document.write(i + ", ");
    // }

    // document.write("<h3>Odd:</h3>");
    // for (var i = 1; i <= 20; i = i + 2) {
    //     document.write(i + ", ");
    // }
    
    // document.write("<h3>Series:</h3>");
    // for (var i = 2; i <= 20; i = i + 2) {
    //     document.write(i + "k, ");
    // }

    // //task7
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
    // if(A.indexOf(userInput) !== -1) {
    //     document.write(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
    // }
    // else {
    //     document.write("We are sorry. "+ userInput + " is not available in our bakery");    
    // }

    // //task8
    // var A = [24, 53, 78, 91, 12];
    // var largest = A[0];
    // for(var i = 0; i <= A.length; i++){
    //     if(largest < A[i])
    //     {
    //         largest = A[i];
    //     }
    // }
    // document.write("Array items: " + A + "<br>");
    // document.write("The largest number is " + largest);

    // //task9
    // var A = [24, 53, 78, 91, 12];
    // var smallest = A[0];
    // for(var i = 0; i <= A.length; i++){
    //     if(smallest > A[i])
    //     {
    //         smallest = A[i];
    //     }
    // }
    // document.write("Array items: " + A + "<br>");
    // document.write("The smallest number is " + smallest);

    // //task10
    //method1
    // for(var i = 5; i <= 100; i = i + 5) {
    //     document.write(i + ", ");
    // }

    //method2
    // for(var i = 1; i <= 20; i++) {
    //     document.write(i*5 + ", ");
    // }




