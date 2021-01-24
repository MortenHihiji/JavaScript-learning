let yourBudg = +prompt("Ваш бюджет на месяц?"),
    shopName = prompt("Название вашего магазина?"),
    type1 = prompt("Какой тип товаров будем продавать?"),
    type2 = prompt("Какой тип товаров будем продавать?"),
    type3 = prompt("Какой тип товаров будем продавать?");

let appData = {
    budget: yourBudg,
    name: shopName,
    types: {type1,type2,type3}
}

alert(yourBudg/30);
