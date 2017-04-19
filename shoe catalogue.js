var stock = [{
        stockBrand: "Nike",
        color: "black and white",
        inStock: 65,
        sizes: 1,
        Price: 1299
    },
    {
        stockBrand: "Vans",
        color: "black and white",
        inStock: 65,
        sizes: 4,
        Price: 749
    },
    {
        stockBrand: "Puma",
        color: "black and white",
        inStock: 65,
        sizes: 4,
        Price: 2599
    },
    {
        stockBrand: "Converse",
        color: "blue and white",
        inStock: 45,
        sizes: 9,
        Price: 999
    },
    {
        stockBrand: "Adidas",
        color: "black",
        inStock: 30,
        sizes: 7,
        Price: '1499'
    },
    {
        stockBrand: "Nike",
        color: "white",
        inStock: 89,
        sizes: 8,
        Price: 1799
    }
];

var output = document.getElementById('display');
var brandOption = document.querySelector('.optionBrand')
var colorOption = document.querySelector('.optionColor')

var source = document.getElementById('newBrandOption').innerHTML;
var template2 = Handlebars.compile(source);

var source2 = document.getElementById('newColorOption').innerHTML;
var template3 = Handlebars.compile(source2);

var source1 = document.getElementById('output').innerHTML;
var template = Handlebars.compile(source1);

function uniBrand() {
  var uniqueBrand = [];
  var brandMap = {};
  for (var i = 0; i < stock.length; i++) {
    var assets = stock[i]
    if (brandMap[assets.stockBrand] === undefined) {
      brandMap[assets.stockBrand] = assets.stockBrand;
      uniqueBrand.push(assets.stockBrand)
    }
  }

  document.querySelector('.optionBrand').innerHTML = template2({
    brandOption: uniqueBrand
  })
}
uniBrand();

function uniColor(){
  var uniqueColor = [];
  var colorMap = {};
for (var a = 0; a < stock.length; a ++){
  var colorate = stock[a]
  if (colorMap[colorate.color] === undefined){
    colorMap[colorate.color] = colorate.color;
    uniqueColor.push(colorate.color)

  }

}
document.querySelector('.optionColor').innerHTML = template3({
    colorOption: uniqueColor
})
};
uniColor()


function addStock() {

  var inputBrand = document.getElementById('brand').value
  var inputColor = document.getElementById('color').value
  var inputSize = document.getElementById('size').value
  var inputPrice= document.getElementById('Price').value
  var inputInStock = document.getElementById('inStock').value
if (inputBrand !== '' && inputColor !== '' && inputSize !== '' && inputPrice !== '' && inputInStock){
  var pushStock = stock.push({
        stockBrand: inputBrand,
        color: inputColor,
        sizes: inputSize,
        Price: inputPrice,
        inStock: inputInStock,
    })
  }

    /*localStorage.setItem("stock", JSON.stringify(stock));
    storedStock = JSON.parse(localStorage.getItem("stock"));*/
    uniBrand()
    uniColor()
};

function showAll() {
  var newArray = template({
      stock
  })
  output.innerHTML = newArray
}

function search(){

  function brandF(input) {
    return input.stockBrand == brandOption.value
  }
  if (brandOption.value !== ''){
    var b = stock.filter(brandF); //new stock with select brand
  }


  function colorF(input) {
    return input.color == colorOption.value
  }
  if (colorOption.value !== ''){
    if (brandOption !== ''){
      b = b.filter(colorF);//new stock with select brand
    }
    else {
    var  b = stock.filter(brandF)
    }
}

   var  print = template({
     stock: b
   });
  output.innerHTML = print;
};
