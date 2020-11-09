//creates array to hold bag items
var productArr = []
var productArr2 = []

class Product {
	
	
	constructor(type, quantity, glaze, price) {
		this.type = type
		this.quantity = quantity
		this.glaze = glaze
		this.price = price
	}
}

function checkoutPageLoaded() {
	var loadedProductArr = localStorage.getItem('order')
	var productArr2 = JSON.parse(loadedProductArr)
	console.log(productArr2)

	var cart = document.getElementById("cart")

	for(var i = 0; i < productArr2.length; i++) {
		var bun = productArr2[i]
		var bunGlaze = bun.glaze
		var bunQuantity = bun.quantity
		var bunType = document.getElementsByName("type")

		cart.innerHTML += "<div class='cart-img'> <img src="+ bunGlaze +"> </div><h3> Pumpkin Spice</br> Price: $"+ bunQuantity +"</h3><span class='delete' onclick= 'deleteProduct(" + i + ")'> Delete </span>"
		
	}
}

function saveEdits() {
	localStorage.setItem('order', JSON.stringify(productArr2))
}

//Changes price when quantity is selected 
function priceCounter(){
	var price = document.getElementById("price-details");
	price.innerHTML =  document.getElementById("quantity").value;
}
function setImage(select){
  var image = document.getElementsByName("image-swap")[0];
  image.src = select.options[select.selectedIndex].value;
}  

function items(type, quantity, glaze, price, img){
	this.type = type;
	this.quantity = quantity;
	this.glaze = glaze;
	this.price = price;
	this.img = img;
}
function deleteProduct(i) {
	alert('i : ' + i)
	console.log('before we delete')
	console.log(productArr2)

	productArr2.splice(i,1)

	console.log('after we delete')
	console.log(productArr2)
}

//Add to Cart Functionality
function addToCart() {
	var quantityCount = document.getElementById("quantityCount");
	quantityCount.innerText = document.getElementById("quantity").value;
	document.getElementById("quantityCount").style.visibility = "visible";


	type = document.getElementsByClassName("type");
	price = document.getElementById("quantity").value;
	img = document.getElementById("glaze").value;
	quantity = document.getElementById("quantity")
	img = "images/cinnamon-bun-2.jpeg"
	addItem = new items(type, quantity, glaze, price, img);

	window.localStorage.setItem(localStorageCount, JSON.stringify(addItem));
	// localStorageCount += 1;
}

function addToCart() {
	var type = document.getElementById('type')
	var quantity = document.getElementById('quantity').value
    var glaze = document.getElementById('glaze').value

    var bun = new Product(type, quantity, glaze, price)
    productArr.push(bun)
	
	updateCartNumber(productArr.length)
}

function goToCheckoutPage() {
	alert("taking you to your cart")
	localStorage.setItem('order', JSON.stringify(productArr))

	window.location.replace("cart.html")
}

function updateCartNumber(num) {
	var cartCount = document.getElementById('quantityCount')
	cartCount.innerHTML = num
}