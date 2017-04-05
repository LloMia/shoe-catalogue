var input = document.querySelectorAll('#option');
var output = document.querySelector('#display');
var option = document.getElementById('option');

var stock = [
  {brand : "Nike", color : "black & white", inStock :65, sizes : 4},
  {brand : "Vans", color : "black & white", inStock :65, sizes : 4},
  {brand : "Puma", color : "black & white", inStock :65, sizes : 4},
  {brand : "Converse", color : "blue & white", inStock : 45, sizes : 9},
  {brand : "Adidas", color : "black", inStock : 30, sizes :  7},
  {brand : "Nike", color: "white", inStock : 89, sizes : 8}

];

var availStock = [];
var source = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source);


 function search(){

  var availStock = [];

  for (var  i = 0; i < stock.length; i++){
    if (stock[i].brand === option.value){

      availStock.push(stock[i]);
    }


  }
  var newStock = template ({
    availStock
  })
    output.innerHTML = newStock;
};
