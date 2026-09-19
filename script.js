// Mercury Vault
// Main website scripts

const discordTicket =
    "https://discord.com/channels/1548817819200786443/1548824734744191036";

document.addEventListener("DOMContentLoaded", () => {

    console.log("Mercury Vault loaded.");

    // All buttons that should open the Discord ticket
    const buttons = document.querySelectorAll(
        ".buy-btn, .package-btn, .discord-btn, .primary-btn"
    );

    buttons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            window.open(
                discordTicket,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });

});