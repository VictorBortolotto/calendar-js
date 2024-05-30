var month = 0
var year = 0

const nextButtonClick = () => {
  month += 1
  if(month > 11) {
    year += 1
    month = 0
  }

  getAllDaysMonth(month, year)
}

const previousButtonClick = () => {
  month -= 1
  if(month < 0) {
    year -= 1
    month = 11
  }

  getAllDaysMonth(month, year)
}

const getAllDaysMonth = (month, year) => {
  let date = new Date(year, month, 1);
  let day = {
    name: "",
    number: 0,
    nameLowerCase: ""
  }

  const daysWeek = []
  while(date.getMonth() === month){
    for(let i = 0; i < days().length; i++){
      if(date.toUTCString().indexOf(days()[i].dayUpperCase) === 0){
        day.name = days()[i].dayUpperCase
        day.number = date.getDate()
        day.nameLowerCase = days()[i].dayLowerCase
        daysWeek.push(day)
      }
    }
    day = {}
    date.setDate(date.getDate() + 1)
  }

  let countDays = 0
  let allDayId = []
  for (let k = 0; k < 42; k++){
    if(countDays < 7){
      day.name = days()[countDays].dayUpperCase
      day.number = 0
      day.nameLowerCase = days()[countDays].dayLowerCase
      allDayId.push(day)
    }else{
      countDays = 0
      day.name = days()[countDays].dayUpperCase
      day.number = 0
      day.nameLowerCase = days()[countDays].dayLowerCase
      allDayId.push(day)
    }
    day = {}
    countDays += 1
  }

  let calendarIndex = 0
  for (let daysInCalendar = 0; daysInCalendar < allDayId.length; daysInCalendar++){
    if (allDayId[daysInCalendar].nameLowerCase === daysWeek[0].nameLowerCase && daysInCalendar <= calendarIndex) {
      for(let daysInWeek = 0; daysInWeek < daysWeek.length; daysInWeek++){
        if(calendarIndex < allDayId.length){
          allDayId[calendarIndex].name = daysWeek[daysInWeek].name
          allDayId[calendarIndex].nameLowerCase = daysWeek[daysInWeek].nameLowerCase + calendarIndex
          allDayId[calendarIndex].number = daysWeek[daysInWeek].number
        }
        calendarIndex += 1
      }
      daysInCalendar = calendarIndex 
      allDayId[daysInCalendar].nameLowerCase = allDayId[daysInCalendar].nameLowerCase + daysInCalendar
    }else{
      calendarIndex += 1
      allDayId[daysInCalendar].nameLowerCase = allDayId[daysInCalendar].nameLowerCase + daysInCalendar
    }
  }

  for(let day = 0; day < allDayId.length; day++){
    let daysInCalendar = document.getElementById("day-button-" + day)

    if(allDayId[day].number > 0) {
      daysInCalendar.innerHTML = allDayId[day].number
    }else {
      daysInCalendar.innerHTML = ''
    }
  }

  getMonthName(month, year)
  this.month = month
  this.year = year
}

const days = () => {
  let days = [
    {dayLowerCase: "sun-", dayUpperCase: "Sun"},
    {dayLowerCase: "mon-", dayUpperCase: "Mon"},
    {dayLowerCase: "tue-", dayUpperCase: "Tue"},
    {dayLowerCase: "wed-", dayUpperCase: "Wed"},
    {dayLowerCase: "thu-", dayUpperCase: "Thu"},
    {dayLowerCase: "fri-", dayUpperCase: "Fri"},
    {dayLowerCase: "sat-", dayUpperCase: "Sat"}
  ]

  return days
}

const getMonthName = (month, year) => {

  let actualMonth = document.getElementById('actual-month')

  const monthNameList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]


  actualMonth.innerHTML = monthNameList[month] + ", " + year

}