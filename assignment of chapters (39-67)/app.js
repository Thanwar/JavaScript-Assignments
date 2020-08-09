//-----------------> CHAPTER 38-42
    // //task1
    // function customPower(a,b){
    //     result = 1;
    //     for(var i = 0; i < b; i++){   
    //         result = result * a;
    //     }
    //     document.write("Number: " + a + "<br>" + "Power: " + b + "<br>" + "Result: " + result);
    // }
    // customPower(4,3);


    // //task2
    // function checkLeapYear(year){
    //     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    //         document.write("It's a leap year");
    //     }
    //     else {
    //         document.write("It's not a leap year");
    //     }
    // }
    // checkLeapYear(prompt("Enter any year like '2012'"));


    // //task3
    // function calcArea(a,b,c){
    //     var S = 0;
    //     var area = 0;
    //     function calcS(a,b,c){
    //         S =  ( a + b + c ) / 2;
    //         return S;
    //     }
    //     S = calcS(a,b,c);
    //     area = S*(S - a)*(S - b)*(S -> C);
    //     document.write("Area of triangle without Square Root is "+area+"<br>");
    //     area = Math.sqrt(area).toFixed(2);  
    //     document.write("Area of triangle with Square Root is "+area);
    // }
    // calcArea(5,5,5);


    // //task4
    // var s1 = +prompt("Enter marks of subject1 e.g. 72");
    // var s2 = +prompt("Enter marks of subject1 e.g. 72");
    // var s3 = +prompt("Enter marks of subject1 e.g. 72");
    // function calcAverage(s1,s2,s3){
    //     var obtainMarks = s1 + s2 + s3;
    //     var average = obtainMarks/3;
    //     return average;
    // }
    // function calcPercentage(s1,s2,s3){
    //     var obtainMarks = s1 + s2 + s3;
    //     var percentage = (obtainMarks/300)*100;
    //     return percentage;
    // }
    // function mainFunction(s1,s2,s3){
    //     var resultAverage = calcAverage(s1,s2,s3);
    //     var resultPercentage = calcPercentage(s1,s2,s3).toFixed(2);
    //     document.write("Average is "+resultAverage+"<br>"+"Percentage is "+resultPercentage+"%");
    // }
    // mainFunction(s1,s2,s3);


    // //task5
    // var str = "Hello world";
    // function customIndexOf(x){
    //     for(var i = 0; i < str.length; i++){
    //         if(str[i] != x){
    //             continue;
    //         }
    //         else {    	
    //             document.write(i);
    //             break;
    //         }
    //     }
    // }
    // customIndexOf("w");


    // //task6
    // var sentence = "Delete all vowels of this";
    // var sentence = sentence.toLowerCase();
    // var sentenceWithoutVowels = "";
    // function deleteAllVowels(s){
    //     for(var i =0; i < sentence.length; i++){
    //         if(sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u"){
    //             continue;
    //         }
    //         else{
    //             sentenceWithoutVowels += sentence[i];
    //         }
    //     }
    //     document.write("<strong>With Vowels: </strong>"+sentence+"<br>");
    //     document.write("<strong>Without Vowels: </strong>"+sentenceWithoutVowels);
    // }
    // deleteAllVowels(sentence);


    // //task7
    // function findOccurrences() {
    //     var str = "Pleases read this application and give me gratuity";
    //     str = str.toLocaleLowerCase();
    //     document.write("Sentence is: " + str + "<br>")
    //     var count = 0;
    //     let haveSeenVowel = false;
    //     for (const letter of str) {
    //         switch (letter) {
    //             case 'a':
    //             case 'e':
    //             case 'u':
    //             case 'i':
    //             case 'o':
    //                 {
    //                     if (haveSeenVowel) {
    //                         count++;
    //                         haveSeenVowel = false;
    //                     } else {
    //                         haveSeenVowel = true;
    //                     }
    //                     break;
    //                 }
    //             default:
    //                 haveSeenVowel = false
    //         }
    //     }
    //     return document.write("The number of occurrences are: " + count);
    // }
    // findOccurrences();


    // //task8
    // var disKM = +prompt("Enter Distance in KM");
    // function KmtoMeter(x){
    //     var meter = x*1000;
    //     return meter;
    // }
    // function Kmtofeet(x){
    //     var feet = x*3281;
    //     return feet;
    // }
    // function KmtoInches(x){
    //     var inches = x*39370;
    //     return inches;
    // }
    // function KmtoCentimeter(x){
    //     var centimeter = x*100000;
    //     return centimeter;
    // }
    // document.write("Distance in Kilometers: "+disKM+"<br>");
    // document.write("Distance in Meters: "+KmtoMeter(disKM)+"<br>");
    // document.write("Distance in Feets: "+Kmtofeet(disKM)+"<br>");
    // document.write("Distance in Inches: "+KmtoInches(disKM)+"<br>");
    // document.write("Distance in Centimeter: "+KmtoCentimeter(disKM)+"<br>");


    // //task9
    // function calcOverTimePay(){
    //     var hours = +prompt("Enter working hours e.g. 40");
    //     var perHourRate = 12;
    //     var overtimePay;
    //     if(hours > 40){
    //         hours -= 40;
    //         overtimePay = hours * perHourRate;
    //         document.write("Employee overtime pay is "+overtimePay)
    //     }
    //     else{
    //         alert("Working hours must be above 40");
    //     }
    // }
    // calcOverTimePay();


    // //task10
    // function calcDenomination(){
    //     var withdrawlAmount = +prompt("Enter amount to withdrawl!");
    //     var lengthOfAmount = withdrawlAmount.toString().length;
    //     withdrawlAmount = withdrawlAmount.toString().split('');
    //     if(lengthOfAmount == 3){
    //         if(withdrawlAmount[1] > 5){
    //             withdrawlAmount[2] = withdrawlAmount[1] - 5;
    //             withdrawlAmount[1] = 5;
    //         }
    //         else if(withdrawlAmount[1] == 5){
    //             withdrawlAmount[1] = 1;
    //             withdrawlAmount[2] = 0;
    //         }
    //         else {
    //             var swapIt = withdrawlAmount[1];
    //             withdrawlAmount[1] = withdrawlAmount[2];
    //             withdrawlAmount[2] = swapIt;
    //         }
    //         document.write(
    //             "you will have "+
    //             withdrawlAmount[0]+" hundred notes "+
    //             withdrawlAmount[1]+" fifty notes "+
    //             withdrawlAmount[2]+" ten notes."
    //         );
    //     }
    //     else if(lengthOfAmount == 2){
    //         if(withdrawlAmount[0] == 5){
    //             document.write("you will have "+0+" hundred notes "+1+" fifty notes "+0+" ten notes.");
    //         }
    //         else if(withdrawlAmount[0] > 5){
    //             withdrawlAmount[0] -= 5;
    //             document.write("you will have "+0+" hundred notes "+1+" fifty notes "+withdrawlAmount[0]+" ten notes.");                
    //         }
    //         else {
    //             document.write("you will have "+0+" hundred notes "+0+" fifty notes "+withdrawlAmount[0]+" ten notes.");                
    //         }
    //     }
    //     else {
    //         document.write("Please enter amount below 1000");
    //     }
    // }
    // calcDenomination();



// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//-----------------> CHAPTER 43-48
    // //task1 (Please Look Into HTML or copy paste the below code in HTML.)
    //<a href="javascript:void(0)" onclick="alert('I am an alert box')">Click Me</a>


    // //task2 (Please Find & Uncomment The HTML Code First)
    // function checkMobile(brand) {
    //     alert("Thanks For Purchasing "+brand+ " From Us.")
    // }


    // //task3
    // var stdNames = ["Jhone","Doe","Mark","James"];
    // var stdClass = [10,9,10,8]
    // document.write("<table id='tableData' border='1' cellspacing='0'>");
    // for(var i = 0; i < 4; i++){
    //     document.write("<tr>");
    //         document.write("<td>"+i+"</td>");
    //         document.write("<td>"+stdNames[i]+"</td>");
    //         document.write("<td>"+stdClass[i]+"</td>");
    //         document.write("<td><button onclick=deleteRow(this)>Delete</button></td>");
    //     document.write("</tr>");
    // }
    // document.write("</table>");
    // function deleteRow(rowToBeDeleted) {
    //     var index = rowToBeDeleted.parentNode.parentNode.rowIndex;
    //     document.getElementById("tableData").deleteRow(index);
    // }


    // //task4 (Please Find & Uncomment The HTML Code First)
    // function changeImage(i){
    //     var img = document.getElementById("dbz");
    //     img.src = "images/dbz"+i+".jpg";
    // }


    // //task5
    // function updateCounter(x){
    //     var counter = document.getElementById("count");
    //     var convInt = parseInt(counter.innerHTML);
    //     if(x == 'inc'){
    //         convInt += 1;
    //     }
    //     else {
    //         convInt -= 1;
    //     }
    //     counter.innerHTML = convInt;
    // }



// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//-----------------> CHAPTER 49-52
    // //task1 (Please Find & Uncomment The HTML Code First)
    // function showFormData(){
    //     var labels = ["First Name","Last Name","Email","Password","Age"];
    //     var fname = document.getElementById("fname");
    //     var lname = document.getElementById("lname");
    //     var email = document.getElementById("email");
    //     var password = document.getElementById("pass");
    //     var age = document.getElementById("age");
    //     var allItems = [fname,lname,email,password,age]
    //     for(var i = 0; i < allItems.length; i++){
    //         document.write(labels[i] + ": " +allItems[i].value+"<br>");
    //     }
    // }


    // //task2 (Please Find & Uncomment The HTML Code First)
    // function readMore() {
    //     var dots = document.getElementById("dots");
    //     var moreText = document.getElementById("more");
    //     var btnText = document.getElementById("btn");  
    //     if (dots.style.display === "none") {
    //       dots.style.display = "inline";
    //       btnText.innerHTML = "Read more"; 
    //       moreText.style.display = "none";
    //     } else {
    //       dots.style.display = "none";
    //       btnText.innerHTML = "Read less"; 
    //       moreText.style.display = "inline";
    //     }
    // }


    // //task3
    // var stdNames = ["Jhone","Doe","Mark","James"];
    // var stdClass = [10,9,10,8]
    // document.write("<table id='tableData' border='1' cellspacing='0'>");
    // document.write("<tr><th>S.No</th><th>Names</th><th>Marks</th><th colspan='2'>Action</th></tr>");    
    // for(var i = 0; i < 4; i++){
    //     document.write("<tr>");
    //         document.write("<td>"+i+"</td>");
    //         document.write("<td><input type='text' value="+stdNames[i]+" disabled></td>");
    //         document.write("<td><input type='number' value="+stdClass[i]+" id='stdMarks' disabled></td>");
    //         document.write("<td><button onclick=deleteRow(this)>Delete</button></td>");
    //         document.write("<td><button onclick=editRow(this)>Edit</button></td>");
    //     document.write("</tr>");
    // }
    // document.write("</table>");
    // function deleteRow(rowToBeDeleted) {
    //     var index = rowToBeDeleted.parentNode.parentNode.rowIndex;
    //     document.getElementById("tableData").deleteRow(index);
    // }
    // function editRow(rowToBeEdit) {
    //     var name = rowToBeEdit.parentNode.parentNode.childNodes[1].firstChild;
    //     var marks = rowToBeEdit.parentNode.parentNode.childNodes[2].firstChild;
    //     var btn = rowToBeEdit.parentNode.parentNode.lastChild.lastChild;    
    //     if(btn.innerHTML == "Update"){
    //         name.disabled = true;
    //         marks.disabled = true;
    //         btn.innerHTML = "Edit";
    //         name.value = name.value;
    //     }
    //     else {
    //         name.disabled = false;
    //         marks.disabled = false;
    //         btn.innerHTML = "Update";
    //     }
    // }



// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
//-----------------> CHAPTER 58-67 
    // //task 1(i) (Please Find & Uncomment The HTML Code First)
    // var mainContent = document.getElementById("main-content");
    
    
    // //task 1(ii) (Please Find & Uncomment The HTML Code First)
    // var mainContent = document.getElementById("main-content");
    // var childElements = mainContent.childNodes;
    // for(var i = 0; i < childElements.length; i++){
    //     document.write(childElements[i].innerHTML+"<br>");
    // }

    
    // //task 1(iii) (Please Find & Uncomment The HTML Code First)
    // document.write("<h2>All elements of render class:</h2>");
    // var allRenderElements = document.getElementsByClassName("render");
    // for(var i = 0; i < allRenderElements.length; i++){
    //     document.write(allRenderElements[i].innerHTML + "<br>");
    // }

    
    // //task 1(iv) (Please Find & Uncomment The HTML Code First)
    // var firstName = document.getElementById("first-name");
    // firstName.value = "Hasnain";

    
    // //task 1(v) (Please Find & Uncomment The HTML Code First)
    // var lastName = document.getElementById("last-name");
    // var email = document.getElementById("email");
    // lastName.value = "Shafeeq";
    // email.value = "hasnainshafeeq1997@gmail.com";

    
    
    // //task 2(i) (Please Find & Uncomment The HTML Code First)
    // var formContent = document.getElementById("form-content");
    // var nType = formContent.nodeType;
    // if(nType == 1){
    //     document.write("Node Type is 1, It's an element");
    // }
    // else {
    //     document.write("Node Type is 3, It's a junk artifacts");
    // }

    
    // //task 2(ii) (Please Find & Uncomment The HTML Code First)
    // var lastName = document.getElementById("lastName");
    // var nType = lastName.nodeType;
    // var childnType = lastName.childNodes.nodeType;
    // if(nType == 1){
    //     document.write("Node Type of <b>lastName</b> is 1, It's an element<br>");
    // }
    // else {
    //     document.write("Node Type is 3, It's a junk artifact<br>");
    // }
    // if(childnType == 1){
    //     document.write("Node Type of <b>child of lastName</b> is 1, It's an element");
    // }
    // else {
    //     document.write("Node Type of <b>child of lastName</b> is 3, It's ajunk artifact");
    // }

    
    // //task 2(iii) (Please Find & Uncomment The HTML Code First)
    // var lastName = document.getElementById("lastName");
    // var childLastName = lastName.childNodes;
    // childLastName = "<span>working on something that i'm proud of......</span>";
    // document.write(childLastName);

    
    // //task 2(iv) (Please Find & Uncomment The HTML Code First)
    // var mainContent = document.getElementById("main-content");
    // console.log(mainContent.firstChild);
    // console.log(mainContent.lastChild);

    
    // //task 2(v) (Please Find & Uncomment The HTML Code First)
    // var lastName = document.getElementById("lastName");
    // console.log(lastName.nextSibling);
    // console.log(lastName.previousSibling);

    
    // //task 2(vi) (Please Find & Uncomment The HTML Code First)
    // var email = document.getElementById("email");
    // var nType = email.parentNode.nodeType;
    // console.log(email.parentNode);
    // console.log("Node type is "+nType);