const index = Number(prompt('Выберите операцию: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление, 5 - возведение в квадрат, 6 - извлечение квадрата'))
let firstNumber
let secondNumber

switch(index) {
    case 1:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert(`Результат сложения ${firstNumber} и ${secondNumber} равен ${firstNumber + secondNumber}`)
        break
    case 2:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert(`Результат вычитания ${firstNumber} и ${secondNumber} равен ${firstNumber - secondNumber}`)
        break
    case 3:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert(`Результат умножения ${firstNumber} и ${secondNumber} равен ${firstNumber * secondNumber}`)
        break
    case 4:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert(`Результат деления ${firstNumber} и ${secondNumber} равен ${firstNumber / secondNumber}`)
        break
    case 5:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert(`Результат возведения в квадрат ${firstNumber} и ${secondNumber} равен ${firstNumber ** secondNumber}`)
        break
    case 6:
        firstNumber = Number(prompt('Введите число'))
        alert(`Результат извлечения из-под квадратного корня равен ${Math.sqrt(firstNumber)}`)
        break
    default:
        alert('Корректно введите число операции')
}