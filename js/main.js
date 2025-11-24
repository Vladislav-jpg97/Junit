
$(document).ready(function () {

    /* =====================================================
       OWL SLIDER
    ====================================================== */
    $("#slider").owlCarousel({
        loop: true,
        items: 1,
        responsive: {
            0: { nav: false },
            1000: { nav: true }
        }
    });


    /* =====================================================
       ELEMENTS
    ====================================================== */
    const showOverlay = document.querySelector("#js-burger");
    const overlayElemtnt = document.querySelector("#js-overlay");
    const closeOverlay = document.querySelector("#js-overlay-close");
    const deletButton = document.querySelector("#deletButton");

    // Search #1
    const buttonInput = document.querySelector("#button-input");
    const searchInput = document.querySelector("#inputSearch");

    // Search #2
    const buttonInput2 = document.querySelector("#button-input-2");
    const searchInput2 = document.querySelector("#inputSearch-2");


    /* =====================================================
       SEARCH INPUT TOGGLES
    ====================================================== */
    const toggleSearch = (button, input) => {
        if (button && input) {
            button.addEventListener("click", () => {
                input.classList.toggle("clear-search-input");
            });
        }
    };

    toggleSearch(buttonInput, searchInput);
    toggleSearch(buttonInput2, searchInput2);


    /* =====================================================
       BURGER OVERLAY
    ====================================================== */
    if (showOverlay && overlayElemtnt && closeOverlay) {
        showOverlay.addEventListener("click", () => {
            overlayElemtnt.classList.add("show");
            document.body.style.overflow = "hidden";
            deletButton?.classList.add("hidden");
        });

        closeOverlay.addEventListener("click", () => {
            overlayElemtnt.classList.remove("show");
            document.body.style.overflow = "";
            deletButton?.classList.remove("hidden");
        });
    }


    /* =====================================================
       NAVBAR SCROLL BG
    ====================================================== */
    const navElement = document.querySelector("#js-nav");

    window.addEventListener("scroll", () => {
        if (!navElement) return;

        const currentScroll = window.scrollY;

        navElement.style.background =
            currentScroll >= 100 ? "rgba(0, 0, 0, .2)" : "";
    });

});
