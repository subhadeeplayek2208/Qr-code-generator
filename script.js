const qrTextField = document.getElementById('qr-text');
const generatebtn = document.getElementById('generatebtnId');
const downloadbtn = document.getElementById('downloadbtnId');

const qrContainer = document.querySelector('.qrcodebody');

generatebtn.addEventListener('click',()=>{
    isEmptyInputArea();
});


function isEmptyInputArea(){ 
    if(qrTextField.value.length>0 ){
        generateQRCode();        
    }
    else{
        alert("Please Enter Text or URL to generate your QR Code");
    }
}

// const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
const colors1 = ["#35ffffe7", "#ff6600f3",  "#ffdf53", "#4cf54ce3", "#ffff4ae3", "#f64ef6f0" , "#ffffff", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

// const randomColorIndex = Math.floor(Math.random() * colors.length);
// const selectedColor = colors[randomColorIndex];

const randomColorIndex1 = Math.floor(Math.random() * colors1.length);
const selectedColor1 = colors1[randomColorIndex1];

function generateQRCode(){ 
    qrContainer.innerHTML ="";
    new QRCode(qrContainer, {
        text: qrTextField.value,
        width: 280 ,
        height: 260 ,
        colorDark :  "#000000",
        colorLight :  selectedColor1,
        // colorDark : "#000000" ,
        // colorLight : "#ffffff",
        // correctLevel : QRCode.CorrectLevel.H
    });
}

downloadbtn.addEventListener('click',()=>{
    let img1 = document.querySelector('img');

    if(img1 !== null){
        let imgAtrr = img1.getAttribute('src');
        downloadbtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
        alert("Please Generate QR Code before download");

    }
});

