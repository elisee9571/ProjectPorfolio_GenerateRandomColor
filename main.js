const generateColor = () => {

    const random = Math.floor(Math.random() * 0xFFFFFF).toString(16);

    document.body.style.backgroundColor = "#" + random;

    const text = document.querySelector('.text');
    text.innerHTML = "#" + random;
};

const copy = () => {
    const textCopy = document.querySelector('.text');

    navigator.clipboard.writeText(textCopy.innerHTML);
};