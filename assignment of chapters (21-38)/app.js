//-----------------> CHAPTER 21-25
    // //task1
    // var fName = prompt("Enter Your First Name");
    // var lName = prompt("Enter Your Last Name");
    // var fullName = fName + " " + lName;
    // alert("Welcome! Dear " + fullName);

    // //task2
    // var favPhone = prompt("Name the phone you like the most");
    // document.write("My favorite phone is: " + favPhone + "<br>");
    // document.write("Length of string: " + favPhone.length);
    
    // //task3
    // var str = "Pakistani";
    // document.write("String: " + str + "<br>");
    // document.write("Index of 'n': " + str.indexOf("n"));

    // //task4
    // var str = "Hello World";
    // document.write("String: " + str + "<br>");
    // document.write("Last index of 'l': " + str.lastIndexOf("l"));

    // //task5
    // var str = "Pakistani";
    // document.write("String: " + str + "<br>");
    // document.write("Character at index 3: " + str.charAt(3));

    // //task6
    // var fName = prompt("Enter Your First Name");
    // var lName = prompt("Enter Your Last Name");
    // var space = " ";
    // var fullName = fName.concat(space+lName);
    // alert("Welcome! Dear " + fullName);

    // //task7
    // var city = "Hyderabad";
    // document.write("City: " + city + "<br>");
    // document.write("After replacement: " + city.replace("Hyder","Islam"));

    // //task8
    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // document.write("Bofore: " + message + "<br>");
    // document.write("After: " + message.replace(/and/g, "&"));

    // //task9
    // var str = "472";
    // var converted = parseInt(str);
    // document.write("Value: " + str + "<br>");
    // document.write("Type: " + typeof(str) + "<br>");
    // document.write("Value: " + converted + "<br>");
    // document.write("Type: " + typeof(converted));
    
    // //task10
    // var userInput = prompt("Enter any word here");
    // document.write("User input: " + userInput + "<br>");
    // document.write("Uppercase: " + userInput.toUpperCase());

    // //task11
    // var userInput = prompt("Enter any word here","This is a sample text").toLowerCase();
    // var splitted = userInput.split(" ");
    // for (var i = 0; i < splitted.length; i++) {
    //     document.write(splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1,)+" ");
    // }

    // //task12
    // var num = 35.36;
    // var Newnum = num.toString().split('.').join("");
    // document.write("Number: " + num + "<br>");
    // document.write("Result: "+Newnum);
    
    // //task13
    // var userInput = prompt("Enter Username");
    // var splitted = userInput.split("");
    // var condtion = true;
    // for (var i = 0; i <= splitted.length - 1; i++) {
    //     var index = splitted[i].charCodeAt();
    //     if (index == 33 || index == 44 || index == 46 || index == 64) {
    //         condtion = false;
    //     } 
    //     else {            
    //         continue;
    //     }
    // }
    // if (condtion == true) {
    //     alert(userInput + " is a correct username.");
    // }
    // else {
    //     alert("Please enter a valid username");
    // }

    // //task14
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
    // if (A.indexOf(userInput) == -1) {
    //     document.write("We are sorry. " + userInput + " is not available in our bakery");
    // }
    // else {
    //     document.write(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
    // }

    // //task15
    // var password, message;
    // var whileCounter = 0;
    // var CFAL = false;
    // while (whileCounter != 1) {
    //     password = prompt("Enter Password");
    //     if (password.length <= 5) {
    //         alert("Must be 6 or more characters long");
    //     }
    //     else {
    //         if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    //             alert("Password cannot begin with a number\nPlease enter a valid password");
    //         }
    //         else {
    //             for (var i = 0; i <= password.length-1; i++) {
    //                 if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
    //                     CFAL = true;
    //                     whileCounter = 1;
    //                     break;
    //                 }
    //                 else {
    //                     continue;
    //                 }
    //             }
    //             if (CFAL == true) {
    //                 whileCounter = 1;
    //                 message = "Password is OK.";
    //             }
    //             else {
    //                 whileCounter = 0;
    //                 message = "Invalid Password!\nYou must enter both lettes and numbers in your password.";
    //             }
    //             alert(message);
    //         }
    //     }
    // }

    // //task16
    // var university = "University of Karachi";
    // var splitted = university.split("");
    // for (i = 0; i < splitted.length; i++) {
    //     document.write(splitted[i] + "<br>");
    // }

    // //task17
    // var userInput = prompt("Enter any text here","Sample text");
    // document.write("User input: " + userInput + "<br>");
    // document.write("Last character of input: " + userInput.charAt(userInput.length-1));
    

    // //task18
    // var str = "The quick brown fox jumps over lazy the dog";
    // var spilitted = str.toLowerCase().split(" ");
    // var wordToFind = "the";
    // var occurances = 0;
    // for (var i = 0; i < spilitted.length; i++) {
    //     if(spilitted[i] == wordToFind) {
    //         occurances++;
    //     }
    // }
    // document.write("Text: " + str + "<br>");
    // document.write("There are '" + occurances + "' occurance(s) of word '" + wordToFind + "'");


//-----------------> CHAPTER 26-30
    // //task1
    // var userInput = +prompt("Enter a positive integer");
    // document.write("Number: " + userInput + "<br>");
    // document.write("Round of value: " + Math.round(userInput) + "<br>");
    // document.write("Floor value: " + Math.floor(userInput) + "<br>");
    // document.write("Ceil value: " + Math.ceil(userInput));

    // //task2
    // var userInput = +prompt("Enter a negative integer");
    // document.write("Number: " + userInput + "<br>");
    // document.write("Round of value: " + Math.round(userInput) + "<br>");
    // document.write("Floor value: " + Math.floor(userInput) + "<br>");
    // document.write("Ceil value: " + Math.ceil(userInput));
    
    // //task3
    // var userInput = +prompt("Enter any number to see it's absolute value");
    // document.write("The absolute value of " + userInput + " is " + Math.abs(userInput));

    // //task4
    // var dice = Math.floor(Math.random() * 6) + 1;
    // document.write("Random dice value: " + dice + "<br>");

    // //task5
    // var coin = Math.floor(Math.random() * 2) + 1;
    // if (coin == 2) {    
    //     document.write(coin + "<br>");
    //     document.write("Random coin value: Heads");
    // }
    // else {
    //     document.write(coin + "<br>");
    //     document.write("Random coin value: Tails");    
    // }

    // //task6
    // var rand = Math.floor(Math.random() * 100) + 1;
    // document.write("Random number between 1 and 100: " + rand);

    // //task7
    // var userInput = prompt("Enter your weight in kilograms");
    // var possibleInputs = ["kgs","kilogram","kg","kilograms"];
    // var finalWeight;
    // for (var i = 0; i < possibleInputs.length; i++) {
    //     if (userInput.includes(possibleInputs[i])) {
    //         finalWeight = userInput.replace(possibleInputs[i]," kilograms");
    //         break;
    //     }
    //     else {
    //         finalWeight = userInput + " kilograms";
    //         continue;
    //     }
    // }
    // document.write("The weight of user is " + finalWeight);

    // //task8
    // var randSecret = Math.floor(Math.random() * 10) + 1;
    // // alert(randSecret); uncomment this line to see hidden number
    // var userInput = +prompt("Guess the right number between 1 to 10");
    // if (userInput == randSecret) {
    //     alert("Congratulations, You Won");
    // }
    // else {
    //     alert("Alas! You Lose\nPlease Try Again");
    // }


//-----------------> CHAPTER 31-34
    // //task1
    // var currentDate = new Date();
    // document.write(currentDate);

    // //task2
    // var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var currentDate = new Date();
    // var currentMonth = currentDate.getMonth();
    // document.write("Current month: " + allMonths[currentMonth]);

    // //task3
    // var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    // var currentDate = new Date();
    // var currentDay = currentDate.getDay();
    // alert("Today is " + allDays[currentDay].slice(0,3));

    // //task4
    // var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    // var currentDate = new Date();
    // var currentDay = allDays[currentDate.getDay()];
    // if (currentDay == "Sunday" || currentDay == "Saturday") {
    //     document.write("It’s Fun day");
    // }

    // //task5
    // var currentDate = new Date();
    // currentDate = currentDate.getDate();
    // if (currentDate < 16) {
    //     document.write("First fifteen days of the month");
    // } else {
    //     document.write("Last days of the month");
    // }

    // //task6
    // var currentDate = new Date();
    // var currentDateMilli = currentDate.getTime();
    // var dateBefore = new Date("Jan 01, 1970");
    // var dateBeforeMilli = dateBefore.getTime();
    // var diff = currentDateMilli - dateBeforeMilli;
    // var diffInMin = diff / (1000 * 60 * 60);
    // document.write("Current Date: " + currentDate + "<br>");
    // document.write("Elapsed milliseconds since January 1, 1970:  " + diff + "<br>");
    // document.write("Elapsed minutes since January 1, 1970:  " + diffInMin + "<br>");

    // //task7
    // var currentDate = new Date();
    // var currentHour = currentDate.getHours();
    // if (currentHour <= 12) {
    //     alert("It's AM");
    // } else {
    //     alert("It's PM");
    // }

    // //task8
    // var laterDate = new Date("Dec 31, 2020");
    // document.write("Later date: " + laterDate);

    // //task9
    // var ramadanStartDate = new Date("Apr 24, 2020");
    // var currentDate = new Date();
    // var diffTime = currentDate - ramadanStartDate;
    // var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    // document.write(diffDays + " days have passed since 1st Ramadan, 2020");
    
    // //task10
    // var yearBegDate = new Date("Jan 01, 2020");
    // var currentDate = new Date(prompt("Enter any date to calculate seconds from year start e.g.","Jun 21, 2020"));
    // var yearBegDateMilli = yearBegDate.getTime();
    // var currentDateMilli = currentDate.getTime();
    // var diff = yearBegDateMilli -> CurrentDateMilli;
    // var diffInSeconds = Math.abs(diff / 1000);
    // document.write(diffInSeconds + " seconds had past since begining of 2020");

    // //task11
    // var currentDate = new Date();
    // document.write("Current date: " + currentDate + "<br>");    
    // var setHours = currentDate.setHours(15);
    // document.write("1 hour ago, it was: " + currentDate);

    // //task12
    // var currentDate = new Date();
    // var getCurrentYear = currentDate.getFullYear();
    // document.write("Current date: " + currentDate + "<br>");    
    // var setHours = currentDate.setFullYear(getCurrentYear-100);
    // document.write("100 years back, it was: " + currentDate);

    // //task13
    // var userAge = +prompt("Enter your age");
    // var currentDate = new Date();
    // var getCurrentYear = currentDate.getFullYear();
    // var birthYear = getCurrentYear - userAge;
    // document.write("Your age is " + userAge + "<br>");
    // document.write("Your birth year is " + birthYear + "<br>");

    // //task14
    // var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var customerName = "Hasnain Shafeeq";
    // var currentMonnth = new Date().getMonth();
    // currentMonnth = allMonths[currentMonnth];
    // var noOfUnits = 410;
    // var chargesPerUnit = 16;
    // var lateAmount = 350;

    // document.write("<h2>K-Eletric Bill</h2>" + "<br>");
    // document.write("Customer Name: " + customerName + "<br>");
    // document.write("Month: " + currentMonnth + "<br>");
    // document.write("Number of Units: " + noOfUnits + "<br>");
    // document.write("Charges Per Unit: " + chargesPerUnit + "<br>");
    // document.write("<br>");
    // document.write("Net Amout Payable (within Due Date): " + noOfUnits*chargesPerUnit + "<br>");
    // document.write("Late Payment Surcharge: " + lateAmount + "<br>");
    // document.write("Gross Amout Payable (after Due Date): " + ((noOfUnits*chargesPerUnit)+lateAmount) + "<br>");
        

//-----------------> CHAPTER 35-38
    // //task1
    // function showDateTime() {
    //     var currentDate = new Date();
    //     document.write(currentDate);
    // }
    // showDateTime();

    // //task2
    // function greetUser(fname,lname) {
    //     var fullName = fname + " " + lname;
    //     alert("Welcome! Dear " + fullName);
    // }
    // var askFirstName = prompt("Enter Your First Name");
    // var askLastName = prompt("Enter Your Last Name");
    // greetUser(askFirstName,askLastName);

    // //task3
    // function sumOfTwo(x,y) {
    //     return sum = x + y;
    // }
    // var askFirstNum = +prompt("Enter First Number");
    // var askSecondNum = +prompt("Enter Second Number");
    // document.write(sumOfTwo(askFirstNum,askSecondNum));

    // //task4
    // function calc(num1,num2,opr) {
    //     if (opr === "+") {
    //         return num1 + num2; 
    //     } 
    //     else if(opr === "-") {
    //         return num1 - num2;
    //     }
    //     else if(opr === "/") {
    //         return num1 / num2;
    //     }
    //     else if(opr === "*") {
    //         return num1 * num2;
    //     }
    //     else if(opr === "%") {
    //         return num1 % num2;
    //     }
    //     else {
    //         return "Wrong Command";
    //     }
    // }
    // var num1 = +prompt("Enter First Number");
    // var num2 = +prompt("Enter Second Number");
    // var opr = prompt("Enter Operator");
    // alert("Equation is " + num1 + opr + num2 + "\nOutput is " + calc(num1,num2,opr));
 
    // //task5
    // function squareMe(x) {
    //     alert("Input is "+x + "\nSquare is " + x*x);
    // }
    // squareMe(+prompt("Enter any number"));
    
    // //task6
    // function numFactorial(x) {
    //     var initial = x;
    //     for (var i = x-1; i > 0; i--) {
    //         x *= i;
    //     }
    //     alert("Input is "+initial + "\nFactorial is " + x);
    // }
    // numFactorial(+prompt("Enter any number"));
    
    // //task7
    // function displayCounting(x,y) {
    //     for (var i = x; i <= y; i++) {
    //         document.write(i + "<br>");
    //     }
    // }
    // displayCounting(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));

    // //task8
    // function calculateHypotenuse(base,perpendicular) {
    //     var finalHypotenuse;
    //     var hypSquare = Math.pow(base,2) + Math.pow(perpendicular,2);
    //     function calculateSquare(hyp) {
    //         finalHypotenuse = Math.sqrt(hyp).toFixed(2);
    //         return finalHypotenuse;
    //     }
    //     calculateSquare(hypSquare);
    //     return finalHypotenuse;
    // }
    // document.write(calculateHypotenuse(10,10));

    // //task9
    // function calcArea(w,h) {
    //     var A = w * h;
    //     return A;
    // }
    // //Arguments As Values
    // alert("Area of Rectengle: " + calcArea(20,10));
    // //Arguments As Variables
    // var width = 20;
    // var height = 10;
    // alert("Area of Rectengle: " + calcArea(width,height));

    // //task10
    // function checkPalindrome(str) {
    //     var reversed = "";
    //     for (var i = str.length-1; i >= 0; i--) {
    //         reversed += str[i];
    //     }
    //     if (str === reversed) {
    //         alert("It's a Palindrome");
    //     } else {
    //         alert("It's not a Palindrome");
    //     }
    // }
    // checkPalindrome(prompt("Enter a string to check it's Palindrome or not"));

    // //task11
    // function titleCase(str) {
    //     var splitted = str.split(" ");
    //     for (var i = 0; i < splitted.length; i++) {
    //         document.write(splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1,)+" ");
    //     }
    // }
    // titleCase(prompt("Enter any word here","This is a sample text").toLowerCase());
    
    // //task12
    // function findLongest(str) {
    //     var strToArr = str.split(" ")
    //     var longest = strToArr[0];
    //     for (var i = 1; i < strToArr.length; i++) {
    //         if (strToArr[i].length > longest.length ) {
    //           longest = strToArr[i];
    //         }
    //     }
    //     document.write("String: " + str + "<br>Longest Word: " + longest);
    // }
    // findLongest("This is javascript second assignment.");
    
    // //task13
    // function findOcc(str,ltr) {
    //     var spilitted = str.toLowerCase().split("");
    //     var occurances = 0;
    //     for (var i = 0; i < spilitted.length; i++) {
    //         if(spilitted[i] == ltr) {
    //             occurances++;
    //         }
    //     }
    //     document.write("Text: " + str + "<br>");
    //     document.write("There are '" + occurances + "' occurance(s) of letter '" + ltr + "'");
    // }
    // var str = "The quick brown fox jumps over lazy the dog";
    // var ltr = "o";
    // findOcc(str,ltr);
    
    // //task14
    // function calcCircumference(r = 10) {
    //     var circumference = (2 * 3.142 * r).toFixed(2);
    //     alert("The circumference is " + circumference);
    // }
    // function calcArea(r = 10) {
    //     var area = (3.142 * (r*r)).toFixed(2);
    //     alert("The area is " + area);
    // }
    // calcCircumference();
    // calcArea();