    setTimeout(function(){
        document.getElementById('loader').style.display="none";
    }, 2000);

    var cartItem=0; // declaring this variable to use it in the cart function
    function addCartIcon(){
        cartItem++;
        var elements= document.querySelectorAll(".selectors");
        for (let i =0; i< 2 ;i++){
        elements[i].classList.add("item");
        elements[i].innerHTML = cartItem;
        }
    }
    
    function addItem(id){
        addCartIcon()
        console.log(id);
        var x = getProduct(id);
        localStorage.setItem("cartArray", x);
    }


    // function to get the product from the API .. Created by Islam
    function getProduct(prdID) {

        var xhr = new XMLHttpRequest();

        var prdID = prdID;

        xhr.open("get", "https://fakestoreapi.com/products/" + prdID, true);

        xhr.onreadystatechange = function () {

            console.log("Inside Event, readyStat value:" + xhr.readyState);

            if (xhr.readyState == 4 && xhr.status == 200) {

                console.log("Inside Condition...");

                let products = xhr.responseText;

                //alert(products);

                let prdObject = JSON.parse(products);

                console.log(prdObject);
                //  showProduct(prdObject);

            }

        };


        xhr.send();

        console.log("After Send...")

    }
    // function to show the navbar when small screen apply
    function show(){
    document.getElementById("bar").style.display="block";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("center").style.cssText = "text-align:center; display:block";
    }

    // function to hide the navbar when small screen apply
    function hide(){
    document.getElementById("bar").style.display="none";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("center").style.display = "inline-block";
    }

    // Slider script
    var sliderindex = 0;
    slider();

    function slider(){
        var sliderImage = document.getElementsByClassName("discount");
        for(let i= 0; i < sliderImage.length; i++){
            sliderImage[i].style.display = "none";
        }
        sliderindex++;
        if(sliderindex > sliderImage.length){
            sliderindex = 1;
        }
        sliderImage[sliderindex-1].style.display = "flex";
        setTimeout(slider,1500);  
    }

// adding product info to the product page

   