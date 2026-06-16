//Get all elements from the DOM with the classname "product-image"
const productImages = document.querySelectorAll(".product-image");

//Add a click event on the entire window
window.addEventListener("click", e => {
    
    //Select all tooltips in the clicked card
    const tooltips = e.target.parentElement.querySelectorAll(".tooltip");
    
    //If the card image is clicked
    if(e.target.classList.contains("img")){
        
        //Show all tooltips from that card
        tooltips.forEach(tooltip => {
            tooltip.classList.add("tooltip-show");
        });
       
        //If clicked outside
    } else {
        
        //Hide all tooltips
        tooltips.forEach(tooltip => {
            tooltip.classList.remove("tooltip-show");
        });
    }
});