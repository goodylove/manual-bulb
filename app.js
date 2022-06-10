let bulb = document.querySelector(".bulb");
        let btn = document.querySelector(".onbulb");

        btn.addEventListener("click", function () {
            if(bulb.classList.contains("off")){
                bulb.classList.remove("off")
                bulb.src="image/pic_bulbon.gif"
                btn.textContent = "off bulb"
            }
            else{
                bulb.classList.add("off");
                bulb.src="image/pic_bulboff.gif"
                btn.textContent = "on bulb"
            }
        })