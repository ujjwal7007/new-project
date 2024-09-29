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
    greetingFunc();
}

const greetingFunc =  () => {
    let date = new Date();
    let hour = date.getHours();
    if(hour>=0 && hour < 12){
       speakFunc("good morning sir, How can help you !") 
    }
}