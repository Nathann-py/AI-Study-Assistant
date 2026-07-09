document.getElementById("summariseBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;

    // Show loading indicator
    document.getElementById("loading").classList.remove("hidden");

    // For now, just placeholder behaviour
    document.getElementById("summaryText").innerText =
        "AI summary coming soon... (You entered " + text.length + " characters)";
});
document.getElementById("summariseBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;

    // Show loading animation
    document.getElementById("loading").classList.remove("hidden");

    // Simulate AI processing delay
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        document.getElementById("summaryText").innerText =
            "AI summary coming soon... (You entered " + text.length + " characters)";
    }, 1500);
});

