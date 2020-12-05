

var obj1 = { id: 1, srcImg: "assets/images/cart-1.jpg", name: "bla2q bla2 bal2", desc: "bla bal", price: "10 LE", quantity: "4" };
var obj2 = { id: 2, srcImg: "assets/images/cart-2.jpg", name: "blrr rtt yyu2", desc: "blauuuu bal", price: "90 LE", quantity: "1" };
var array = [obj1, obj2];
localStorage.setItem("cartArray", JSON.stringify(array));

var tr_node, td_node;
var total = 0;

var storedArray = JSON.parse(localStorage.getItem("cartArray"));

if (storedArray === undefined || storedArray.length == 0) {
    setEmptyArray();
}

storedArray.forEach(element => {
    tr_node = document.createElement("tr");
    tr_node.setAttribute('align', 'center');

    createImge(element.srcImg, element.name, element.id);
    createDesc(element.desc);
    createPrice(element.price);
    createQuan(element.quantity);

    var totalPr = parseInt(element.price) * parseInt(element.quantity);
    var txt = String(totalPr);
    var res = txt.concat(" LE");
    createTotal(res);
    createBtn();

    document.getElementById("tbl").appendChild(tr_node);

    total = total + parseInt(totalPr);
    calculateTotal(total);

});

function setEmptyArray() {

    document.getElementById("tbl").style.display = "none";
    document.getElementById("btns").style.display = "none";
    document.getElementById("empty_cart").style.display = "block";

}

function createImge(img_src, txt, id) {

    td_node = document.createElement("td");
    var span_node = document.createElement("span");
    td_node.appendChild(span_node);
    var img_node = document.createElement("img");
    img_node.src = img_src;
    img_node.width = "70";
    span_node.appendChild(img_node);
    var h4_node = document.createElement("h4");
    var h4_txt_node = document.createTextNode(txt);
    h4_node.appendChild(h4_txt_node);
    span_node.appendChild(h4_node);

    var inpt = document.createElement("input");
    inpt.setAttribute('type', 'hidden');
    inpt.setAttribute('value', id);

    span_node.appendChild(inpt);

    tr_node.appendChild(td_node);
}


function createDesc(desc) {
    td_node = document.createElement("td");
    var td_txt_node = document.createTextNode(desc);
    td_node.appendChild(td_txt_node);
    tr_node.appendChild(td_node);
}

function createPrice(price) {
    td_node = document.createElement("td");
    var td_txt_node = document.createTextNode(price);
    td_node.appendChild(td_txt_node);
    tr_node.appendChild(td_node);
}

function createQuan(num) {
    td_node = document.createElement("td");
    var inpt = document.createElement("input");
    inpt.setAttribute('type', 'number');
    inpt.setAttribute('value', num);
    inpt.setAttribute('min', '1');
    inpt.setAttribute('class', 'inp-width');
    td_node.appendChild(inpt);
    tr_node.appendChild(td_node);
}

function createTotal(txt) {
    td_node = document.createElement("td");
    var td_txt_node = document.createTextNode(txt);
    td_node.appendChild(td_txt_node);
    tr_node.appendChild(td_node);
}

function createBtn() {
    td_node = document.createElement("td");
    var btn_node = document.createElement("button");
    var btn_txt_node = document.createTextNode("Remove");
    btn_node.classList.add("btn1");
    btn_node.classList.add("black-btn");
    btn_node.appendChild(btn_txt_node);
    btn_node.onclick = function () {

        setPrice(parseInt(btn_node.parentNode.parentNode.childNodes[4].textContent));
        clearItemFromLocaleStorage(btn_node.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[2].value);

        var index = btn_node.parentNode.parentNode.rowIndex;
        document.getElementById("tbl").deleteRow(index);


    }
    td_node.appendChild(btn_node);
    tr_node.appendChild(td_node);
}

function setPrice(removedPrice) {
    total = total - removedPrice
    calculateTotal(total);
    if (total == 0) {
        var element = document.getElementById("checkoutBtn");
        element.parentNode.removeChild(element);

        var element = document.getElementById("total");
        element.parentNode.removeChild(element);

        setEmptyArray();
    }

}

function clearItemFromLocaleStorage(id) {
    var newArray = [];
    if (total != 0) {
        storedArray.forEach(element => {
            if (element.id == id) return;

            newArray.push(element);

        });

    }


    localStorage.setItem("cartArray", JSON.stringify(newArray));
}

function calculateTotal(pr) {

    var str1 = "Total Price = ";
    var str2 = total;
    var str3 = " LE";
    var res = str1.concat(str2, str3);

    document.getElementById("total").innerHTML = res;
}

function openHome () {

}


