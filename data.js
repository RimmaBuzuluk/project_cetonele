//data information
let currentDate = new Date();
console.log(currentDate)

let day=currentDate.getDate();
let month=currentDate.getMonth()+1;
let year=currentDate.getFullYear();
console.log(day, month, year)

let formattedDate=day+"."+month+"."+year
console.log(formattedDate)

//put data in ".date-7"

let dataElement=document.querySelector('.date-7')

dataElement.textContent=formattedDate

