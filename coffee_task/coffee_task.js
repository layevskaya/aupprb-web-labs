/* 
Кофейня предлагает три объёма кофе: маленький(2рубля, 50ккал), средний(3рубля, 100ккал), большой(4рубля, 150ккал).
К кофе предлагается несколько сиропов(это обязательно): корица(1рубль, 10ккал), ваниль(1.5рубля, 15ккал), 
шоколад(2р, 20ккал). Напишите программу, рассчитывающую стоимость и калорийность кофе с сиропом. 
*/

var coffee = {
	"small": [2, 50],
	"average": [2, 50], 
	"big":[4, 150]
};

alert(coffee);

var syrap = {
	"cinnamon": [1, 10], 
	"vanilla": [1.5, 15], 
	"chocolate": [2, 20]
};

var coffee_order = prompt("Какое кофе вы желаете?(small, average, big)"),
	syrap_order = prompt("Какой сироп вы желаете?(cinnamon, vanilla, chocolate)");

function order(coffee_order, syrap_order) {
	var price_coffee = coffee[coffee_order][0], 
		price_syrap = syrap[syrap_order][0];

 	var kkal_coffee = coffee[coffee_order][1],
		kkal_syrap = syrap[syrap_order][1];

	var order_price = price_coffee + price_syrap,
		order_kkal = kkal_coffee + kkal_syrap;

	return "Цена Вашего заказа: " + order_price + " рублей, " + 
	       "количество ккалорий в Вашем заказе: "+ order_kkal;
};

document.write("<br />" + "Ваш заказ: " + coffee_order + " и " + syrap_order);
document.write("<br />" + order(coffee_order, syrap_order));