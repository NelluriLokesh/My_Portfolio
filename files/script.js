
var typed = new Typed(".text", {
    strings: ["Python","Java","Data Analytics using Python,Power Bi,SQL","Statistical Analysis Expertise", "Machine Learning","Nerual Network"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


document.addEventListener("DOMContentLoaded", function() {
    // Get the link element
    var githubLink = document.getElementById("github-link");
    
    // Add a click event listener
    githubLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the link (prevent navigation)
        event.preventDefault();
        
        // Redirect the user to the specified link
        window.location.href = "https://github.com/NelluriLokesh/Voice-Activated-Personal-Assistant";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the link element
    var sportifyLink = document.getElementById("sportify-link");
    
    // Add a click event listener
    sportifyLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the link (prevent navigation)
        event.preventDefault();
        
        // Redirect the user to the specified link
        window.location.href = "https://github.com/NelluriLokesh/Sportify_Power_BI_Dashboard";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the link element
    var mlAlgorithmsLink = document.getElementById("ml-algorithms-link");
    
    // Add a click event listener
    mlAlgorithmsLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the link (prevent navigation)
        event.preventDefault();
        
        // Redirect the user to the specified link
        window.location.href = "https://github.com/NelluriLokesh/Projects-on-Machine-Learning-Algorithms";
    });
});
