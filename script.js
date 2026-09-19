// Mercury Vault
// Main website scripts

const discordTicket =
    "https://discord.com/channels/1548817819200786443/1548824734744191036";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Mercury Vault loaded.");

    // All order and purchase buttons open the Discord ticket.
    document.querySelectorAll(".buy-btn, .package-btn").forEach((button) => {
        button.setAttribute("href", discordTicket);
        button.setAttribute("target", "_blank");
        button.setAttribute("rel", "noopener noreferrer");
    });
});
