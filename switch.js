//표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case문
//case문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다.
//switch문과 일치하는 case문이 없다면 실행 순서는 default문으로 이동한다. default문은 선택사항

// 월을 영어로 변환한다. (11 → 'November')
// var month = 11;
// var monthName;

// switch (month) {
//   case 1: monthName = 'January';
//   case 2: monthName = 'February';
//   case 3: monthName = 'March';
//   case 4: monthName = 'April';
//   case 5: monthName = 'May';
//   case 6: monthName = 'June';
//   case 7: monthName = 'July';
//   case 8: monthName = 'August';
//   case 9: monthName = 'September';
//   case 10: monthName = 'October';
//   case 11: monthName = 'November';
//   case 12: monthName = 'December';
//   default: monthName = 'Invalid month';
// }

// console.log(monthName); // Invalid month
//Invalid 뜨는 이유 : switch문의 표현식의 평가결과와 일치하는 case문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만 switch문을 탈출하지 않고 끝날때 까지 모든 문 실행함 ==> 폴스루(fall through)

// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November

//폴스루가 유용한 경우도 있다.
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    //윤년 계산 알고리즘
    //1. 연도가 4로 나누어 떨어지는 해(2000,2004,2008...)
    //2. 연도가 4로 나누어 떨어지더라도 연도가 100으로 나누어 떨어지는 해(2000, 2100, 2200 ...)는 평년이다
    //3. 연도가 400으로 나누어 떨어지는 해(2000,2400,2800...)

    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}
console.log(days); // 29

//조건이 너무 많아서 switch문을 썼을 때 가독성이 좋다면 switch문 사용하기
