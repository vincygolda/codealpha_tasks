function openLightbox(src){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function filterImages(category){

    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        if(category === "all"){
            img.style.display = "block";
        }
        else if(img.classList.contains(category)){
            img.style.display = "block";
        }
        else{
            img.style.display = "none";
        }

    });

}