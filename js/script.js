var items = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var total = 0;
var show = document.getElementById("total")
items.forEach(function (item) {

    item.onclick = function () {
        total += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent
        if (content.innerHTML != ""){
            document.querySelector("#btn1").style.display = "block";
            document.querySelector("#btn1").style.backgroundColor = "blue"
            document.querySelector("#btn1").style.color = "white";
            document.querySelector("#btn1").style.width = "120px"
            document.querySelector("#btn1").style.height = "30px"
        }
    }

})

btn.onclick = function () {
    show.innerHTML = total
}

