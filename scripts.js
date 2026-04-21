console.log("Script loaded");
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const suggestionsBox = document.getElementById("suggestions");

    // Stop if elements are missing (prevents crashes)
    if (!searchInput || !suggestionsBox) return;

    const data = [
        { keyword: "traffic", page: "mobility.html" },
        { keyword: "transport", page: "mobility.html" },

        { keyword: "police", page: "public_safety.html" },
        { keyword: "fire", page: "public_safety.html" },

        { keyword: "hospital", page: "health.html" },
        { keyword: "ambulance", page: "health.html" },
        { keyword: "health", page: "health.html" },

        { keyword: "waste", page: "#" },
        { keyword: "events", page: "#" }
    ];

    // AUTOCOMPLETE
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase().trim();
        suggestionsBox.innerHTML = "";

        if (value === "") return;

        const filtered = data.filter(item =>
            item.keyword.includes(value)
        );

        filtered.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = item.keyword;

            div.addEventListener("click", () => {
                window.location.href = item.page;
            });

            suggestionsBox.appendChild(div);
        });
    });

    // ENTER KEY SEARCH
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const value = searchInput.value.toLowerCase().trim();

            const match = data.find(item =>
                item.keyword === value
            );

            if (match) {
                window.location.href = match.page;
            } else {
                alert("No results found");
            }
        }
    });

});