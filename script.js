// Mercury Vault
// Main website scripts

const discordTicket =
    "https://discord.com/channels/1548817819200786443/1548824734744191036";


document.addEventListener("DOMContentLoaded", () => {

    console.log("Mercury Vault loaded.");


    // Make sure all purchase buttons use the Discord ticket

    document
        .querySelectorAll(".buy-btn, .package-btn")
        .forEach((button) => {

            button.addEventListener("click", () => {

                button.href = discordTicket;

            });

        });

});