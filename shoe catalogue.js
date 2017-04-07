var input = document.querySelectorAll('#option');
var output = document.querySelector('#display');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var counter = 0;
var user = document.getElementById('user')
var owner = document.getElementById('owner')

function showHideStock(){
  counter ++;

  if (counter % 2 == 0){
  owner.style.display='none'
}
else{
  owner.style.display='block'
}
}


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


/*function login (){
  var attempt = 3
  var username = document.querySelector('#uname').value
  var password = document.querySelector('#psw').value
if (username == "Mi Casa" && password == "12345") {
  window.location = "stock.html";
  alert("successfully Logged in");
  return false;
}
else{
  attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("uname").disabled = true;
document.getElementById("psw").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
};*/

function addStock(){
  var brandInput = document.getElementById('brand').value
  var colorInput = document.getElementById('color').value
  var sizesInput = document.getElementById('size').value
  var priceInput = document.getElementById('Price').value

  var freshStock = JSON.stringify({
    brand : brandInput, color : colorInput, Price : priceInput, sizes : sizesInput
  })
  availStock = freshStock
  stock.push(availStock);
output.innerHTML = freshStock
}
