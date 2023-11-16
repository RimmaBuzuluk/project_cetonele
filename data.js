//data information
let currentDate = new Date();
// console.log(currentDate)

let day=currentDate.getDate();
let month=currentDate.getMonth()+1;
let year=currentDate.getFullYear();
// console.log(day, month, year)

let formattedDate=day+"."+month+"."+year
// console.log(formattedDate)

//put data in ".date-7"

let dataElement=document.querySelector('.date-7')

dataElement.textContent=formattedDate

//////day ago

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1)

let dayYesterday = yesterday.getDate();
let monthYesterday = yesterday.getMonth() + 1; 
let yearYesterday = yesterday.getFullYear();


let formattedDateYesterday = dayYesterday + '.' + monthYesterday + '.' + yearYesterday;
console.log(formattedDateYesterday)

let dataElementYesterday=document.querySelector('.date-6')
dataElementYesterday.textContent=formattedDateYesterday
