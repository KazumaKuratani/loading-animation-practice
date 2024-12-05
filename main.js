window.onload = function(){
    setTimeout(() =>{
    // loaderを消す
        const loader = document.querySelector(".loader")
        loader.classList.add("loaded")
    }, 1700);
    setTimeout(()=>{
        // titleをつける
        const title = document.querySelector(".title")
        title.classList.add("visible")
    }, 2200)
}

