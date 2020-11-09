//Global Variables
var quantity = "";
var glazes = "";
var img = "";
var addItem = "";


//Changes price when quantity is selected 
function priceCounter(){
	var price = document.getElementById("price-details");
	price.innerHTML =  document.getElementById("quantity").value;
}
function setImage(select){
  var image = document.getElementsByName("image-swap")[0];
  image.src = select.options[select.selectedIndex].value;
}  

function items(title, quantity, glaze, price, img){
	this.title = title;
	this.quantity = quantity;
	this.glaze = glaze;
	this.price = price;
	this.img = img;
}

//Add to Cart Functionality
function addToCart() {
	var quantityCount = document.getElementById("quantityCount");
	quantityCount.innerText = document.getElementById("quantity").value;
	document.getElementById("quantityCount").style.visibility = "visible";


	title = document.getElementsByClassName("productTitle");
	quantity = document.getElementById("quantity").value;
	glazing = document.getElementById("glazing").value;
	price = document.getElementById("quantity").value;
	img = "images/blackberry-bag.png"
	addItem = new items(title, quantity, glazing, price, img);

	window.localStorage.setItem(localStorageCount, JSON.stringify(addItem));
	// localStorageCount += 1;
}

//creates array to hold bag items
var productArr = []
var productArr2 = []

class Product {
	
	
	constructor(quantity, glaze) {
        this.quantity = quantity
		this.glaze = glaze
	}
}


function addToCart() {
    var quantity = document.getElementById('quantity').value
    var glaze = document.getElementById('glaze').value

    var bun = new Product(quantity, glaze)
    productArr.push(bun)
	
	updateCartNumber(productArr.length)
}

function goToCheckoutPage() {
	alert("taking you to your cart")
	localStorage.setItem('order', JSON.stringify(productArr))

	window.location.replace("cart.html")
}
function checkoutPageLoaded() {
	var loadedProductArr = localStorage.getItem('order')
	var productArr2 = JSON.parse(loadedProductArr)
	console.log(productArr2)

	var cart = document.getElementById("cart")

	for(var i = 0; i < productArr2.length; i++) {
		var cinbun = productArr2[i]
		var cinbunGlaze = cinbun.glaze
		var cinbunQuantity = cinbun.quantity

		cart.innerHTML += "<div class='cart-img'> <img src="+ cinbunGlaze +"> </div>"
		cart.innerHTML += "<h3><b>Pumpkin Spice</b> </br> <b>Glaze: </b></br> <b>Price:</b> $"+ cinbunQuantity +"</h3>"
		cart.innerHTML += "<span class='delete' onclick= 'deleteProduct(" + i + ")'> Delete </span>"
		
	}
}
function saveEdits() {
	localStorage.setItem('order', JSON.stringify(productArr2))
}

function deleteProduct(i) {
	alert('i : ' + i)
	
	productArr2.splice(i,1)
	console.log(productArr2)

}


function updateCartNumber(num) {
	var cartCount = document.getElementById('quantityCount')
	cartCount.innerHTML = num
}