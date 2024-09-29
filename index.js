let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    //speakInput.rate = 1;
    //speakInput.pitch = 1;
    //speakInput.volume = 1;
    speakInput.lang = 'en-IN'
    window.speechSynthesis.speak(speakInput);
}
window.onload = () => {
    //speakFunc("Hello just for code");
}