// 1. Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const textBtn = document.querySelector('.jsButton')
const textField = document.querySelector('.jsText')
textBtn.textContent = textField.textContent

// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const changeImage = document.querySelector('.jsImage');

changeImage.src =
  'https://static-cse.canva.com/blob/786623/alexandershatovniUkImZcSP8unsplash.jpg';

// 3. Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const changeLink = document.querySelector(".jsLink");
changeLink.href = 'https://www.youtube.com';

const changeImageAlt = document.querySelector(".secondImageJs");
changeImageAlt.alt = "hello";



// 4. Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const fruitsList = document.querySelector(".list");
const firstElList = fruitsList.firstElementChild
firstElList.textContent = "blueberry"