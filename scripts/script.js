const socket = io();
const body = document.getElementById('Info');

socket.on('test',
    function (data) {
        body.innerHTML = `${data.data}<br>
        ${data.message} `;
    });

socket.on('updateValues',
    function (data) {
        console.log(`\n\nDATA:\ncpu ${data.cpu}\ncard: ${data.cardIndex}\nmem: ${data.mem}\ncard: ${data.cardIndex}`);
        setDialHandPosition(data.cpu, data.cardIndex);
        setDialHandInvertedPosition(data.mem, data.cardIndex);
    });

function setDialHandPosition(percentage, cardIndex) {
    let elements = Array.from(document.querySelectorAll(`#dial-value-${cardIndex}, #hand-pointer-${cardIndex}`));
    const degrees = (percentage / 100) * 180;

    elements.forEach(element => {
        if (element.id === `dial-value-${cardIndex}`) {
            element.innerHTML = percentage + '%';
        }
        else if (element.id === `hand-pointer-${cardIndex}`) {
            element.style.transform = `translate(0, -50%) rotate(${degrees - 90}deg)`;
        }
    });

    //const dialVal = document.getElementById(`dial-value-${cardIndex}`);
    //const hand = document.getElementById(`hand-pointer-${cardIndex}`);

    //const degrees = (percentage / 100) * 180;

    //dialVal.innerHTML = percentage + '%';
    //hand.style.transform = `translate(0, -50%) rotate(${degrees - 90}deg)`;
}

function setDialHandInvertedPosition(percentage, cardIndex) {
    let elements = Array.from(document.querySelectorAll(`#dial-value-inverted-${cardIndex}, #hand-pointer-inv-${cardIndex}`));
    const degrees = (percentage / 100) * 180;

    elements.forEach(element => {
        if (element.id === `dial-value-inverted-${cardIndex}`) {
            element.innerHTML = percentage + '%';
        }
        else if (element.id === `hand-pointer-inv-${cardIndex}`) {
            element.style.transform = `translate(0, -50%) rotate(${180 - degrees + 90}deg)`;
        }
    });

    //const dialValInv = document.getElementById(`dial-value-inverted-${cardIndex}`);
    //const handInv = document.getElementById(`hand-pointer-inv-${cardIndex}`);

    //const degrees = (percentage / 100) * 180;

    //dialValInv.innerHTML = percentage + '%';
    //handInv.style.transform = `translate(0, -50%) rotate(${180 - degrees + 90}deg)`;
}