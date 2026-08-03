function play(userChoice) {
    // 1. Создаем список вариантов
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
    } else {
        result = "Компьютер победил! 🤖";
    }

    // Выводим результат на страницу
    document.getElementById('result-text').innerText = result;
}
