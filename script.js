// DARK MODE TOGGLE
const toggleBtn = document.getElementById("toggleDarkMode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SUMMARISE BUTTON
document.getElementById("summarizeBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value.trim();

    // Show loading animation
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        if (text.length === 0) {
            document.getElementById("summaryText").innerText =
                "Please paste some lecture notes first.";
            return;
        }

        // BASIC CLEANING
        const cleaned = text.replace(/\s+/g, " ").trim();

        // SPLIT INTO SENTENCES
        const sentences = cleaned.split(/\.|\?|!/).filter(s => s.length > 0);

        // SIMPLE BULLET POINT SUMMARY
        const bulletPoints = sentences.slice(0, 3).map(s => "• " + s.trim());

        // WORD COUNT
        const wordCount = cleaned.split(" ").length;

        // FINAL OUTPUT
        const output =
            "Summary:\n" +
            bulletPoints.join("\n") +
            "\n\nStats:\n" +
            `Words: ${wordCount}\n` +
            `Sentences: ${sentences.length}`;

        document.getElementById("summaryText").innerText = output;
    }, 1500);
});

