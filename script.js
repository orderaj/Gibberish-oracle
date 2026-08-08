const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("speak");

button.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") {
        output.textContent = "Say something...";
        return;
    }

    // Reverse the text so it can be read in a mirror
    const reversed = text.split("").reverse().join("");

    output.textContent = reversed;
});
