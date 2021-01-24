let yourBudg = +prompt('Ваш бюджет на месяц?'),
    yourShop = prompt("Название вашего магазина?");

appData = {
    budget: yourBudg,
    nameShop: yourShop,
    shopGoods: [],
}

for (let i = 0; i < 3; i++) {
    let a = prompt("Какой тип товаров будем продавать?");

    if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
        appData.shopGoods[i] = a;
    } else {
        i--;
    }
}

let priceAns = +prompt('Укажите цену');