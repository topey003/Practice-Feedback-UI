const rating = document.querySelectorAll('.rating')
const container = document.getElementById('container')
const button = document.getElementById('btn')
const suggestion = document.getElementById('rating-input')




let selectedRating = "";
rating.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (e) => {
        removeActive();
        suggestion.style.display = 'block'
        selectedRating = e.target.innerText || e.target.parentNode.innerText
        e.target.classList.add("active")
        e.target.parentNode.classList.add("active")
    })
})



button.addEventListener("click", () => {
    if(selectedRating !== ""){
        container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        Feedback: ${selectedRating}
        <p>We'll use your feedback to improve our customer support</p>
        ` 
    }
})

function removeActive() {
    rating.forEach((ratingEl) => {
        ratingEl.classList.remove("active")
    })
}

/* function suggBox(){
    if(selectedRating !== ""){
        suggestion.style.display='block'
    }
    else{
        suggestion.style.display='none'
    }
    panel = true;
     if(panel === true){
            suggestion.style.display='block'
        }
        else if (panel === false){
            suggestion.style.display='none'
        }
} */
 
