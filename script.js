// 1. Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Попробовать попользоваться такой функцией в коде программы (не отправлять созданную разметку на страницу)


function createElement(tagName, tagStyle, tagContent) {
    const newElement = document.createElement(tagName)
    newElement.style.color = tagStyle
    newElement.textContent = tagContent
    return newElement
}
let res = createElement('span', 'red', 'lorem')
console.log(res)

// 2. Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const newParElement = document.createElement('p')
newParElement.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur beatae, odit nostrum obcaecati eius alias et, consequatur incidunt necessitatibus ipsam a laboriosam sunt fuga sapiente numquam hic perferendis quas iure.'
newParElement.style.fontSize = '36px'
newParElement.style.fontWeight = 'bold'
const bodyElement = document.querySelector('body')
bodyElement.append(newParElement)

// 3. Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

const newSelectElement = document.createElement('select')
const bodyElement3 = document.querySelector('body')
bodyElement3.append(newSelectElement)

for (let i = 1960; i <= 2020; i++) {
    const newOptionElement = document.createElement('option')
    newSelectElement.append(newOptionElement)
    newOptionElement.textContent = i;
}


// Вставить в страницу (в html документ) ul.

// Предусмотреть в коде следующий массив

// [{

//     name: "Женя",

//     order: true

// },

// {

//     name: "Кристина",

//     order: true

// },

// {

//     name: "Павел",

//     order: false

// },

// {

//     name: "Виолетта",

//     order: false

// },

// {

//     name: "Костя",

//     order: true

// }];



// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:

// - Клиент Женя оплатил заказ

// - Клиент Павел отменил заказ

// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект тут это итая ячейка массива), статус зависит от от свойства order, если true, то оплатил, если false, то отменил

const newUlElement = document.createElement('ul')
const bodyElement2 = document.querySelector('body')
bodyElement2.append(newUlElement)
const array = [{ name: "Женя", order: true },
{ name: "Кристина", order: true },
{ name: "Павел", order: false },
{ name: "Виолетта", order: false },
{ name: "Костя", order: true }];
for (let i = 0; i < array.length; i++) {
    const newLiElement = document.createElement('li')
    newUlElement.append(newLiElement)
    if (array[i].order) {
        newLiElement.textContent = ('Клиент' + ' ' + array[i].name + ' ' + 'оплатил заказ')
    }
    else {
        newLiElement.textContent = ('Клиент' + ' ' + array[i].name + ' ' + 'отменил заказ')
    }

}




