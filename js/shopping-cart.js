
// If a shopping cart does not exist in localstorage
if( localStorage.getItem('cart')  == null ) {

	// Create the cart
	localStorage.setItem('cart', JSON.stringify( [] ) );
}

// Extract the cart and convert it back into an Object
var cart = JSON.parse( localStorage.getItem('cart') );

// Show the contents of the cart
console.log( cart );

// Show the user how many items they have in the cart
updateCartDisplay();


// Find all the add to cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to them all 
for(var i=0; i<addToCartButtons.length; i++) {

	addToCartButtons[i].onclick = addToCart;

}

function addToCart() {

	var productName = this.dataset.name;
	var productPrice = this.dataset.price;

	var product = {
		name: productName,
		price: productPrice
	}

	cart.push(product);

	localStorage.setItem('cart', JSON.stringify(cart) );

	console.log(cart);

	updateCartDisplay();

}

// Listen for the clicks on the clear cart button
document.querySelector('#clear-cart').onclick = function() {

	// Reset localstorage
	localStorage.setItem('cart', JSON.stringify( [] ) );

	// Reset the cart variable
	cart = [];

	updateCartDisplay();

};

function updateCartDisplay() {

	// Cet the cart contents
	var cart = JSON.parse( localStorage.getItem('cart') );

	// Count the cart contents and display number on screen
	document.querySelector('#total-cart').innerHTML = cart.length;

}




// // Get a copy of the cart
// // var cart = localStorage.getItem('cart');

// cart = {
// 	id: 1234,
// 	name: "Smartphone",
// 	price: 1000,
// 	thumbnail: 'image.jpg'
// };

// // Convert out object into text, because Localstorage dosen't work with object
// cart = JSON.stringify(cart);

// // Save our changes
// localStorage.setItem('cart', cart);