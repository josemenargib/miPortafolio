const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Full Stack Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Civil Enginer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);