function filterRecipes() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        const title = recipe.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            recipe.style.display = 'block'; // Show recipe if it matches
        } else {
            recipe.style.display = 'none'; // Hide recipe if it doesn't match
        }
    });
}
 // Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will create a smooth scrolling effect
    });
}
function submit(){
    var btn=document.querySelector("button");
    var info=document.querySelectorAll("input");
    btn.addEventListener("click",()=>{
        let allFilled = true;
        info.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false; // Found an empty input
            }
        });
        if (!allFilled) {
            alert("Please Fill Your info First");
        } 
        else {
            alert("Your Form is Submitted Successfully");
        }
    });
}submit();



