var input = document.querySelectorAll('#option');
var output = document.querySelector('#display');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');

var stock = [
  {brand : "Nike", color : "black and white", inStock :65, sizes : 4, Price : 1299},
  {brand : "Vans", color : "black and white", inStock :65, sizes : 4, Price : 749},
  {brand : "Puma", color : "black and white", inStock :65, sizes : 4, Price : 2599},
  {brand : "Converse", color : "blue and white", inStock : 45, sizes : 9, Price : 999 },
  {brand : "Adidas", color : "black", inStock : 30, sizes :  7, Price : 1499},
  {brand : "Nike", color: "white", inStock : 89, sizes : 8, Price : 1799}

];

var availStock = [];
var source = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source);


 function search(){

  var availStock = [];

  for (var  i = 0; i < stock.length; i++){
    if (stock[i].brand === option1.value && stock[i].color === option2.value && stock[i].sizes === Number(option3.value)){

      availStock.push(stock[i]);
    }


  }

  var newStock = template ({
    availStock
  })
    output.innerHTML = newStock;
};
