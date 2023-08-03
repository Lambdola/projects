let body = document.querySelector("body");
body.style.backgroundColor = "black"
let images = ["img1.png", "img2.png", "img3.png", "img4.png"]
let image = document.getElementById("image")
let childSlide = document.getElementById("child-slide");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let navKey = 0;

function startSlide() {
    let count = 0;
    setInterval(() => {
        if (count < images.length) {
            image.setAttribute("src", `${images[count]}`)
            count ++;
        }
        
    }, 2000);
}

function nav(direction) {

    if (direction === "next" && navKey < images.length) {
        prev.classList.remove("hidden");
        
        navKey ++;
        image.setAttribute("src", `${images[navKey]}`)
    }
    else if (direction === "prev" && navKey > 0) {
        next.classList.remove("hidden")
        navKey--;
        image.setAttribute("src", `${images[navKey]}`)
    }
    if(navKey == images.length-1) {
        next.classList.add("hidden");
    
    }
    else if (navKey <= 0 ){
         navKey = 0
        prev.classList.add("hidden");
       
    }
}