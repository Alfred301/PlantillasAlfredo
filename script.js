document.addEventListener("DOMContentLoaded", () => {
    const cardsPerPage = 6;
    const cards = document.querySelectorAll(".page");
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    
    // Obtener la última página visitada o empezar en la 1
    let currentPage = parseInt(sessionStorage.getItem("lastPage")) || 1;
    
    function showPage(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = "block";

                // Si aún no tiene una imagen, agrégala
                if (!card.querySelector("img")) {
                    const img = document.createElement("img");
                    img.src = card.getAttribute("data-src");
                    img.loading = "lazy";
                    card.querySelector("a").appendChild(img);
                }
            } else {
                card.style.display = "none";
            }
        });

        document.getElementById("page-number").textContent = page;

        // Guardar la última página visitada
        sessionStorage.setItem("lastPage", page);
    }

    document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("next").addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});




/*
document.addEventListener("DOMContentLoaded", () => {
    const cardsPerPage = 9;
    const cards = document.querySelectorAll(".page");
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = "block";
                
                // Si aún no tiene una imagen, agrégala
                if (!card.querySelector("img")) {
                    const img = document.createElement("img");
                    img.src = card.getAttribute("data-src");
                    img.loading = "lazy";
                    card.querySelector("a").appendChild(img);
                }
            } else {
                card.style.display = "none";
            }
        });

        document.getElementById("page-number").textContent = page;
    }

    document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("next").addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});

*/