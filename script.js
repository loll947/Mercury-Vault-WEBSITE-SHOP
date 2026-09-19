function login() {
    alert("Login system coming soon.");
}


function buyProduct(product) {
    alert(
        "You selected " +
        product +
        ". Checkout system coming soon."
    );
}


document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "Navigating to " + link.getAttribute("href")
        );

    });

});