// ========================================
// MERCURY VAULT
// Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Mercury Vault loaded successfully.");


    // ========================================
    // ROBLOX LINKS
    // ========================================

    const robloxLinks = {
        basic:
            "https://www.roblox.com/es/game-pass/1618913362/5-ROBUX",

        standard:
            "https://www.roblox.com/es/game-pass/1244405285/15-ROBUX",

        premium:
            "https://www.roblox.com/es/game-pass/1258666193/35-ROBUX"
    };


    // ========================================
    // PACKAGE BUTTONS
    // ========================================

    const packageCards =
        document.querySelectorAll(".package-card");


    if (packageCards.length >= 3) {

        const basicButton =
            packageCards[0].querySelector(".package-button");

        const standardButton =
            packageCards[1].querySelector(".package-button");

        const premiumButton =
            packageCards[2].querySelector(".package-button");


        if (basicButton) {
            basicButton.href = robloxLinks.basic;

            basicButton.target = "_blank";
            basicButton.rel = "noopener noreferrer";
        }


        if (standardButton) {
            standardButton.href = robloxLinks.standard;

            standardButton.target = "_blank";
            standardButton.rel = "noopener noreferrer";
        }


        if (premiumButton) {
            premiumButton.href = robloxLinks.premium;

            premiumButton.target = "_blank";
            premiumButton.rel = "noopener noreferrer";
        }

    }


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ========================================
    // DEBUG
    // ========================================

    console.log("Basic:", robloxLinks.basic);
    console.log("Standard:", robloxLinks.standard);
    console.log("Premium:", robloxLinks.premium);

});