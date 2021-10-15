
const utmBtn = document.getElementById('utmBtn');
const copyBtn = document.getElementById('copyBtn');

utmBtn.addEventListener('click', utmBuild);
copyBtn.addEventListener('click', copyToClip);

function utmBuild() {
    const webInput = document.getElementById('webInput').value;
    const sourceInput = document.getElementById('sourceInput').value;
    const mediumInput = document.getElementById('mediumInput').value;
    const nameInput = document.getElementById('nameInput').value;
 

    if (webInput === '') {
        alert('A Field is Missing')
    } else if (sourceInput === '') {
        alert('A Field is Missing')
    } else if (mediumInput === '') {
        alert('A Field is Missing')
    } else if (nameInput === '') {
        alert('A Field is Missing')
    } else {
    document.getElementById('utmOutput').innerHTML = webInput + '?utm_source=' + sourceInput + '&utm_medium=' + mediumInput + '&utm_campaign=' + nameInput;
  } 
}

function copyToClip() {
    document.getElementById('utmOutput').select();
    document.execCommand('copy');
}