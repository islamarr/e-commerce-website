    setTimeout(function(){
        document.getElementById('loader').style.display="none";
    }, 2000);

    var cartItem=0; // declaring this variable to use it in the cart function
    function addItem(){
        cartItem++;
        var elements= document.querySelectorAll(".selectors");
        for (let i =0; i< 2 ;i++){
        elements[i].classList.add("item");
        elements[i].innerHTML = cartItem;
        }
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


   