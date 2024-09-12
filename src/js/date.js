// Отримуємо поточну дату
const today = new Date();

// Отримуємо день, місяць та рік
const day = today.getDate();
const month = today.getMonth() + 1; // Місяці йдуть від 0 до 11, тому додаємо 1
const year = today.getFullYear();

// Форматуємо день та місяць, щоб вони були двозначними
const formattedDay = day < 10 ? '0' + day : day;
const formattedMonth = month < 10 ? '0' + month : month;

// Формуємо дату у форматі dd.mm.yyyy
const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

// Виводимо дату на сторінку
document.getElementById('currentDate').textContent = formattedDate;