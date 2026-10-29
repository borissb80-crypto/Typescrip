"use strict";
var PageColor;
(function (PageColor) {
    PageColor["Blue"] = "lightblue";
    PageColor["Green"] = "lightgreen";
    PageColor["Red"] = "lightcoral";
})(PageColor || (PageColor = {}));
const userName = 'Сергій';
const userAge = 46;
function getGreeting(name, age, hobby, experience) {
    let message = `Привіт, ${name}! Тобі ${age} років. Твоє хобі — ${hobby}. `;
    if (experience > 5) {
        message += `Вау, ти справжній експерт у ${hobby}!`;
    }
    else if (experience >= 1 && experience <= 5) {
        message += `Чудово, ти вже маєш досвід у ${hobby}.`;
    }
    else {
        message += `Все попереду! Починати нове хобі — це цікаво.`;
    }
    return message;
}
const btn = document.getElementById('runBtn');
const colorSelect = document.getElementById('colorSelect');
const hobbyInput = document.getElementById('hobbyInput');
const expInput = document.getElementById('expInput');
const output = document.getElementById('output');
btn.addEventListener('click', () => {
    const hobby = hobbyInput.value;
    const exp = Number(expInput.value);
    // 1. Отримання тексту привітання
    const greeting = getGreeting(userName, userAge, hobby, exp);
    // 2. Зміна кольору фону сторінки
    document.body.style.backgroundColor = colorSelect.value;
    // 3. Перебір Enum та формування списку
    let enumValues = '<ul>';
    for (const key in PageColor) {
        enumValues += `<li>Значення Enum: ${PageColor[key]}</li>`;
    }
    enumValues += '</ul>';
    // 4. Виведення результату
    output.innerHTML = `<p><strong>${greeting}</strong></p>${enumValues}`;
});
