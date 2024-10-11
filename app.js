// Question # 01
var currentDate = new Date();
document.write(currentDate +"<br>");

// Question # 02
var MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var currentMonth = currentDate.getMonth();
document.write("The current month is: " + MonthNames[currentMonth] + "<br>");

// Question # 03
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = currentDate.getDay();
document.write("Today is: " + dayNames[currentDay] + "<br>");

// Question # 04
// Get the current date
var currentDay = currentDate.getDay();
if (currentDay === 0 || currentDay === 6) {
  document.write("It's Fun day"+ "<br>");
} else {
  document.write("It's not Fun day"+ "<br>");
}

// Question # 05
var currentDay = currentDate.getDate();

if (currentDay < 16) {
  document.write("First fifteen days of the month"+ "<br>");
} else {
  document.write("Last days of the month"+ "<br>");
}

// Question # 06
var now = new Date();
var millisecondsSince1970 = now.getTime();
var minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970 + "<br>");

// Question # 07
var currentHour = now.getHours();
if (currentHour < 12) {
  document.write("It's AM" + "<br>");
} else {
  document.write("It's PM"+ "<br>");
}

// Question # 08
var laterDate = new Date(2020, 11, 31);
document.write("The later date is: " + laterDate.toDateString() +"<br>" );

// Question # 09
var ramadanStart = new Date(2015, 5, 18); 
var currentDate = new Date();
var timeDifference = currentDate - ramadanStart;
var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write("Days past since 1st Ramadan: " + daysPast +"<br>");

// Question # 10
var referenceDate = new Date();
var startOf2015 = new Date(2015, 0, 1);
var timeDifference = referenceDate - startOf2015;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed +"<br>");

// Question # 11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("New date and time (one hour ahead): " + currentDate +"<br>");

// Question # 12
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write("The date 100 years ago was: " + currentDate +"<br>");

// Question # 13
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

// Question # 14
var customerName = "Muhammad Ziauddin Brohi";
var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var numberOfUnits = 350.789;
var chargesPerUnit = 13.567;
var latePaymentSurcharge = 150.895;
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
document.write("<h2>K-Electric Bill</h2>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p>Charges per Unit: $" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>");
document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>");




