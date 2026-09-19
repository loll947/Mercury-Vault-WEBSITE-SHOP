const DISCORD_TICKET =
  "https://discord.com/channels/1548817819200786443/1548824734744191036";

document.addEventListener("DOMContentLoaded", () => {

  console.log("Mercury Vault loaded.");

  document
    .querySelectorAll(
      "[data-discord], .buy-btn, .package-btn, .discord-btn"
    )
    .forEach((button) => {

      button.addEventListener("click", (event) => {

        if (button.tagName === "A") {
          return;
        }

        event.preventDefault();

        window.location.href = DISCORD_TICKET;

      });

    });

});