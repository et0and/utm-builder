const utmBtn = document.getElementById('utmBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');

utmBtn.addEventListener('click', utmBuild);
copyBtn.addEventListener('click', copyToClip);
downloadBtn.addEventListener('click', downloadQR);

function utmBuild() {
    const webInput = document.getElementById('webInput').value;
    const sourceInput = document.getElementById('sourceInput').value;
    const mediumInput = document.getElementById('mediumInput').value;
    const nameInput = document.getElementById('nameInput').value;

    if (webInput === '' || sourceInput === '' || mediumInput === '' || nameInput === '') {
        alert('A Field is Missing');
    } else {
        const utmUrl = webInput + '?utm_source=' + sourceInput + '&utm_medium=' + mediumInput + '&utm_campaign=' + nameInput;
        document.getElementById('utmOutput').innerHTML = utmUrl;
        generateQR(utmUrl);
    } 
}

function copyToClip() {
    const utmOutput = document.getElementById('utmOutput');
    utmOutput.select();
    document.execCommand('copy');
}

function generateQR(url) {
    const qrCanvas = document.getElementById('qrCanvas');
    const qrSize = 10; // Scale for QR code
    const qr = qrcode(0, 'H'); // Error correction level: High
    qr.addData(url);
    qr.make();
    qrCanvas.innerHTML = qr.createImgTag(qrSize);
}

function downloadQR() {
    const qrCanvas = document.getElementById('qrCanvas');
    const image = qrCanvas.querySelector('img').src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}