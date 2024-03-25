const index = Number(prompt('Выберите операцию: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - вывод из-под квадратного корня'))
let firstNumber
let secondNumber

switch(index) {
    case 1:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert('Результат сложения fdgdfvsd', firstNumber, ' и ', secondNumber, ' равен ', firstNumber + secondNumber)
        break
    case 2:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert('Результат вычитания ', firstNumber, ' и ', secondNumber, ' равен ', firstNumber - secondNumber)
        break
    case 3:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert('Результат умножения ', firstNumber, ' и ', secondNumber, ' равен ', firstNumber * secondNumber)
        break
    case 4:
        firstNumber = Number(prompt('Введите первое число'))
        secondNumber = Number(prompt('Введите второе число'))
        alert('Результат вывод из-под квадратного корня ', firstNumber, ' и ', secondNumber, ' равен ', Math.sqrt(firstNumber + secondNumber))
        break
    default:
        alert('Корректно введите число операции')
}