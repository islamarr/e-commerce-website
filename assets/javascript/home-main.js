// function to make the preloader element display none after 2 seconds
setTimeout(function () {                                        
    document.getElementById('loader').style.display = "none";
}, 2000);

//declaring this variable to use it in the cart function
var cartItem = localStorage.getItem("counter"); 
if (cartItem == null) {
    cartItem = 0;
}
else {
    var elements = document.getElementsByClassName("cartCounter");
    for (let i = 0; i < 2; i++) {
        elements[i].classList.add("item");
        elements[i].innerHTML = cartItem;
    }
}
// function to make the cart icon change to how many items has been chosen to order
function addCartIcon() {
    cartItem++;
    localStorage.setItem("counter", cartItem);
    var elements = document.getElementsByClassName("cartCounter");
    for (let i = 0; i < 2; i++) {
        elements[i].classList.add("item");
        elements[i].innerHTML = cartItem;
    }
}
// this function will call the function of adding item to the local storage and the function of changing the cart items icon
function addItem(id) {
    addCartIcon()
    console.log(id);
    getProduct(id);

}


// function to get the product from the API .. and calling saveItem function to add the product as an object in the local storage 
function getProduct(productID) {
    var xhr = new XMLHttpRequest();             

    xhr.open("get", "https://fakestoreapi.com/products/" + productID, true);
    xhr.onreadystatechange = response(xhr);
    xhr.send();
}


// function to check the respond from the API 
function response(xhr){
    if (xhr.readyState == 4) {
        switch (xhr.status) {
            case 200:
                let products = xhr.responseText;
                let prdObject = JSON.parse(products);
                prdObject.quantity = 1;
                saveItem(prdObject);
                break;
            case 404:
                alert("Item not Found...");
                break;
            case 500:
                alert("There is a problem in the Server...");
                break;
            default:
                alert("Something went wrong, please refresh the page");
                break;
        }
    }

}


// add the product to the storage script
var array = [];                     
function saveItem(product) {
    array.push(product);
    localStorage.setItem("cartArray", JSON.stringify(array));
}

// function to show the navbar when small screen apply
function show() {
    document.getElementById("bar").style.display = "block";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("center").style.cssText = "text-align:center; display:block";
}

// function to hide the navbar when small screen apply
function hide() {
    document.getElementById("bar").style.display = "none";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("center").style.display = "inline-block";
}

// Slider script
var sliderindex = 0;
slider();

function slider() {
    var sliderImage = document.getElementsByClassName("discount");
    for (let i = 0; i < sliderImage.length; i++) {
        sliderImage[i].style.display = "none";
    }
    sliderindex++;
    if (sliderindex > sliderImage.length) {
        sliderindex = 1;
    }
    sliderImage[sliderindex - 1].style.display = "flex";
    setTimeout(slider, 1500);
}



