var input = document.querySelector('.list')
var output = document.querySelector('#output').innerHTML;// getting an Id to display output


var availableStock = []

var template = Handlebars.compile(output);// compiling my output to
var stock = template ({

  dataStock: [
                {brand : "Nike", color : "black & white", inStock :65, sizes : 4},
                {brand : "nike", color : "black & white", inStock :65, sizes : 4},
                {brand : "nike", color : "black & white", inStock :65, sizes : 4},
                {brand : "nike", color : "blue & white", inStock : 45, sizes : 9},
                {brand : "nike", color : "black", inStock : 30, sizes :  7},
                {brand : "nike", color: "white", inStock : 89, sizes : 8}

]
}
);


document.body.innerHTML += stock;
