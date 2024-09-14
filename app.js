
function containsNumbers(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9') {
            return true; 
        }
    }
    return false; 
}


let userInput = prompt("Metn daxil edin:");


if (containsNumbers(userInput)) {
    console.log("Reqem var.");
} else {
    console.log("Reqem yoxdu");
}