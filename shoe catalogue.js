var input = document.querySelectorAll('#option');
var output = document.querySelector('#display');// getting an Id to display output

var stock = [
                        {brand : "Nike", color : "black & white", inStock :65, sizes : 4},
                        {brand : "Vans", color : "black & white", inStock :65, sizes : 4},
                        {brand : "Puma", color : "black & white", inStock :65, sizes : 4},
                        {brand : "Converse", color : "blue & white", inStock : 45, sizes : 9},
                        {brand : "Adidas", color : "black", inStock : 30, sizes :  7},
                        {brand : "Nike", color: "white", inStock : 89, sizes : 8}

];

var source = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source);// compiling my output to

function search(){
var availStock = [];
  var option = document.getElementById('option').value;
  var nike = document.getElementById('Nike').innerHTML;
  var Puma = document.getElementById('Puma').innerHTML;
  var Converse = document.getElementById('Converse').innerHTML;
  var Adidas = document.getElementById('Adidas').innerHTML;
  var Vans = document.getElementById('Vans').innerHTML;


  for (var  i = 0; i < stock.length; i++){
//  availStock.push(stock[i]);
if (stock[i].brand === option.value){
  availStock.push(stock[i])
}
}

output.innerHTML = template({stock});
//console.log(availStock);
}
/*


 function search(){;
  //  var option.value = option.value;
  var availStock = [];

  for (var  i = 0; i < stock.length; i++){
    availStock.push(stock[i]);

    var newStock = template ({
      availStock
    })
    // if (stock[i].brand === option.value){
      // return stock.brand == option.value
    // }

    output.innerHTML += newStock;

  }
};*/
