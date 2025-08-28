// DYNAMIC DATA
let callHistoryData = [];
let coinBalance = getNumber("coinHave");
let heartCount = 0; 
let copyCount = 0;

// FUNCTIONS
function getNumber(id) {
    const doc = document.getElementById(id).innerText;
    return parseInt(doc);
}

function getString(id) {
    return document.getElementById(id).innerText;
}

function getElement(id) {
    return document.getElementById(id);
}

function heartClicked(id) {
    getElement(id).addEventListener("click", function(event) {
        heartCount++;
        getElement("heartCount").innerText = heartCount;
    });
}

function copyClicked(id, num) {
    getElement(id).addEventListener("click", function(event) {
        copyCount++;
        const number = getString(num);
        const toCopy = number.toString();
        toCopy.textContent;
        alert(`Number Copied: ${number}`);
        getElement("textCopied").innerText = copyCount;
        navigator.clipboard.writeText(toCopy);

    });
}

function clickedCall(id, txt, num) {
    getElement(id).addEventListener("click", function() {
        if (coinBalance >= 20) {
            const text = getString(txt);
            const number = getNumber(num);
            coinBalance -= 20;
            getElement("coinHave").innerText = coinBalance;
            alert(`📞 Calling ${text} ${number}...`);
        } else {
            alert(`Balance Insufficient, You Must Have 20 Coin!`);
        }
    });
}

// CALLING FUNC
function callButtons() { 
    clickedCall("nationalEmergencyCall", "nationalEmergencyTxt", "nationalEmergencyNum");
    clickedCall("policCall", "policTxt", "policNum");
    clickedCall("fireCallBtn", "fireTxt", "fireNum");
    clickedCall("ambulanceNumCallBtn", "ambulanceTxt", "ambulanceNum");
    clickedCall("womenCallBtn", "womenTxt", "womenNum");
    clickedCall("achCallBtn", "achTxt", "achNum");
}
// CALLING FUNC
function heartButtons() {
    heartClicked("emerHeart");
    heartClicked("policHeart");
    heartClicked("fireHeart");
    heartClicked("ambulanceHeart");
    heartClicked("womenHeart");
    heartClicked("achHeart");
    heartClicked("elecHeart");
    heartClicked("bracHeart");
    heartClicked("railHeart");
}

// CALLING FUNC 
function copyButtons() {
    copyClicked("emergencyCopyBtn", "nationalEmergencyNum"); 
    copyClicked("policCopyBtn", "policNum");
    copyClicked("fireCopyBtn", "fireNum");
    copyClicked("ambulanceCopyBtn", "ambulanceNum");
    copyClicked("womenCopyBtn", "womenNum");
    copyClicked("achCopyBtn", "achNum");
}

// STARTING MY SITE FUNC
callButtons(); 
heartButtons();
copyButtons();