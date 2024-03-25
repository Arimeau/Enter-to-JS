let bank
let dialog
let amount
let i = 0
let j = 0
let price = 0
const phone = 999
const accessory = 9
const tax = 0.2


function volodya() {

    return dollars + (dollars * tax)

}

function bucks() {

    return '$' + dollars.toFixed(2)

}


dialog = prompt('Сколько у Вас денег?')

bank = Number(dialog)

while (price < bank) {                  // Выявление значения, которое
    price = price + phone + accessory   // избыточно. Т.е. в этом цикле
    dollars = price                     // значение всегда будет больше
    price = volodya(dollars)            //  "bank"
    // console.log(price)
    i++
    // console.log(i)
}

price = 0
j = i - 1                               // Получаю количество итераций цикла
i = 1                                   // выше, вычитаю из него "1" для цикла
                                        // ниже, т.к. он уже найдёт количество 
while (i <= j) {                        // итераций, которое будет меньше 
    price = price + phone + accessory   // "bank", т.к. деньги не резиновые
    dollars = price
    price = volodya(dollars)
    // console.log(price)
    i++
}

dollars = bank
let bank1 = bucks()

dollars = price
let price1 = bucks()

dialog = alert('На ' + bank1 + ' можно купить ' + j + ' телефон(а, ов) с аксессуаром(ами) на сумму ' + price1)


/* P.S. Если ты знаешь как можно сделать "price" используя один цикл(а не два), то можешь пожалуйста рассказать, а то чувство, как-будто я наговнокодил и эти огромные комментарии немного пугают(которые я заебался писать с новой строки постоянно нажимая tab!) */