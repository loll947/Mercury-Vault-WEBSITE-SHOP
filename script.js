// Mercury Vault
// Main website scripts


const discordTicket =
    "https://discord.com/channels/1548817819200786443/1548824734744191036";


// Add a small console message when the website loads.

document.addEventListener("DOMContentLoaded", () => {

    console.log("Mercury Vault loaded.");

});


// Make sure order buttons always use the correct Discord ticket.

document.querySelectorAll(".buy-btn, .package-btn").forEach(button => {

    button.addEventListener("click", () => {

        button.setAttribute(
            "href",
            discordTicket
        );

    });

});