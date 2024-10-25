async function copyText() {
    try {
        // Select the text content
        const text = document.getElementById("textToCopy").innerText;

        // Use the Clipboard API to copy the text
        await navigator.clipboard.writeText(text);
        
        // Notify user that text has been copied
        // alert("Text copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}
