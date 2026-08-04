console.log("Ура! Скрипт работает!");
let userScore = 0;

function play(userChoice) {
    const choices = ['камень', 'ножницы', 'бумага'];
    const randomIndex = Math.floor(Math.random() * 3);
    const compChoice = choices[randomIndex];

    document.getElementById('user-choice').innerText = userChoice;
    document.getElementById('comp-choice').innerText = compChoice;

    let result = "";

    if (userChoice === compChoice) {
        result = "Ничья! 🤝";
    } else if (
        (userChoice === 'камень' && compChoice === 'ножницы') ||
        (userChoice === 'ножницы' && compChoice === 'бумага') ||
        (userChoice === 'бумага' && compChoice === 'камень')
    ) {
        result = "Ты победил! 🎉";
        userScore++; // Прибавляем 1 к счету
        console.log("Текущий счет: " + userScore);
    } else {
        result = "Компьютер победил! 🤖";
    }

    document.getElementById('result-text').innerText = result;
    
    document.getElementById('user-wins').innerText = userScore;
}
function resetScore() {
    // 1. Обнуляем переменную в памяти
    userScore = 0;

    // 2. Обновляем цифру на экране (находим по ID и пишем туда 0)
    document.getElementById('user-wins').innerText = userScore;

    // 3. Пишем что-нибудь в поле результата, чтобы было понятно, что сброс прошел
    document.getElementById('result-text').innerText = "Счет обнулен!";
}