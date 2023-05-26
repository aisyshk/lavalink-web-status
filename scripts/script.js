function setDialHandPosition(percentage) {
    let elements = Array.from(document.querySelectorAll("#dial-value, #hand"));
    let degrees = (percentage / 100) * 180;

    elements.forEach((element) => {
        if (element.id === "dial-value") {
            element.innerHTML = percentage + "%";
        }
        else if (element.id === "hand") {
            element.style.transform = `translate(0, -50%) rotate(${degrees - 90}deg)`;
        }
    });

    //let dialVal = document.getElementById("dial-value");
    //let hand = document.getElementById("hand");
    //const degrees = (percentage / 100) * 180;
    //dialVal.innerHTML = percentage + "%";
    //hand.style.transform = `translate(0, -50%) rotate(${degrees - 90}deg)`;
}

function setDialHandInvertedPosition(percentage) {
    let elements = Array.from(document.querySelectorAll("#dial-value-inverted, #hand-inv"));
    let degrees = (percentage / 100) * 180;

    elements.forEach((element) => {
        if (element.id === "dial-value-inverted"){
            element.innerHTML = percentage + "%";
        }
        else if (element.id === "hand-inv") {
            element.style.transform = `translate(0, -50%) rotate(${180 - degrees + 90}deg)`;
        }
    });

    //let dialValInv = document.getElementById("dial-value-inverted");
    //let handInv = document.getElementById("hand-inv");
    //const degrees = (percentage / 100) * 180;
    //dialValInv.innerHTML = percentage + "%";
    //handInv.style.transform = `translate(0, -50%) rotate(${180 - degrees + 90}deg)`;
}

var socket = io();
var body = document.getElementById("Info")

socket.on("test",
    function (data) {
        body.innerHTML = `${data.data}<br>
        ${data.message} `;
    })

socket.on("updateValues",
    function (data) {
        console.log(data.cpu);
        setDialHandPosition(data.cpu);
        setDialHandInvertedPosition(data.mem);
    });