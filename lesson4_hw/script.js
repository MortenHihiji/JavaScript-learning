let appData = {
    shopGoods: [],
    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите через запятую товары", "");
        
        if ((typeof(items)) === 'string' && items != null && items != '') {
            appData.shopGoods = items.split(",");
        } else {
            alert("Ошибка");
        }
    },
    availability: function availability() {
        appData.shopGoods.forEach(function(item, i) {
            alert("У нас вы можете купить " + (i+1) + ": " + item);
        })
    },
    include: function include() {
        for (let key in appData) {
            console.log("Наш магазин включает в себя: " + key);
        }
    }
};


appData.chooseShopItems();
appData.availability();
appData.include();