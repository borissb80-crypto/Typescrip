enum PageColor {
    Blue = 'lightblue',
    Green = 'lightgreen',
    Red = 'lightcoral'
}

const userName: string = 'Сергій';
const userAge: number = 46;

function getGreeting(name: string, age: number, hobby: string, experience: number): string {
    let message = `Привіт, ${name}! Тобі ${age} років. Твоє хобі — ${hobby}. `;
    
    if (experience > 5) {
        message += `Вау, ти справжній експерт у ${hobby}!`;
    } else if (experience >= 1 && experience <= 5) {
        message += `Чудово, ти вже маєш досвід у ${hobby}.`;
    } else {
        message += `Все попереду! Починати нове хобі — це цікаво.`;
    }
    
    return message;
}

const btn = document.getElementById('runBtn') as HTMLButtonElement;
const colorSelect = document.getElementById('colorSelect') as HTMLSelectElement;
const hobbyInput = document.getElementById('hobbyInput') as HTMLInputElement;
const expInput = document.getElementById('expInput') as HTMLInputElement;
const output = document.getElementById('output') as HTMLDivElement;

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
        enumValues += `<li>Значення Enum: ${PageColor[key as keyof typeof PageColor]}</li>`;
    }
    enumValues += '</ul>';
    
    // 4. Виведення результату
    output.innerHTML = `<p><strong>${greeting}</strong></p>${enumValues}`;
});