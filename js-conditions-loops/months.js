/**
 * 2.Використовуючи конструкцію switch-case виведіть 12 місяців.
 *  Для кожного місяця ви повинні мати відповідний case в switch і
 *  виведіть назву місяця, коли цей case виконується. Тобто в консолі
 *  має бути виведено місяць який ви вказуєте для виконання case.
 *  наприклад “January”.
 */
//January, February, March, April, May, June, July,
// and August. September, October, November, and December
let numberOfMonths = "April";
let msg;
switch (numberOfMonths) {
    case 'January':
        msg = "January";
        break;
    case 'February':
        msg = "February";
        break;
    case 'March':
        msg = "March";
        break;
    case 'April':
        msg = "April";
        break;
    case 'May':
        msg = "May";
        break;
    case 'June':
        msg = "June";
        break;
    case 'July':
        msg = "July";
        break;
    case 'August':
        msg = "August";
        break;
    case 'September':
        msg = "September";
        break;
    case 'October':
        msg = "October";
        break;
    case 'November':
        msg = "November";
        break;
    case 'December':
        msg = "December";
        break;
    default:
        msg = "No one";
}
console.log("Selected month: " + msg);