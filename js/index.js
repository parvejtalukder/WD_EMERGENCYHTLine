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
        event.stopPropagation();
        heartCount++;
        getElement("heartCount").innerText = heartCount;
    });
}

function copyClicked(id, num) {
    getElement(id).addEventListener("click", function(event) {
        event.stopPropagation();
        copyCount++;
        const number = getString(num);
        const toCopy = number.toString();
        toCopy.textContent;
        alert(`Number Copied: ${number}`);
        getElement("textCopied").innerText = copyCount;
        navigator.clipboard.writeText(toCopy);

    });
}

function historyOfCall(txt, number) {
    const text = getString(txt);
    const numb = getString(num);
    let call = {
       To: text,
       Num: numb,
       Time: new Date().toLocaleTimeString()
    };
    callHistoryData.push(call);
    console.log(call);
}

function historyDisplay() {
    const HistoryDivHead = getElement("historyDiv");
    historyDisplay.innerHTML = "";
    for(const data of callHistoryData) {
        const Div = document.createElement("div");
        Div.innerHTML = `
        <div class="w-full h-[75px] rounded-[8px] bg-[#FAFAFA] my-[10px] p-[10px]">
            <div class="flex justify-between items-center">
                    <div class="flex flex-col text-left items-start">
                            <h2 class="font-bold text-[18px]">${data.To}</h2>
                            <p class="text-[18px] text-[#5C5C5C]">${data.Num}</p>
                    </div>
                        <p class="text-[18px]">${data.Time}</p>
            </div>
        </div>
        `;
        HistoryDivHead.appendChild(Div);

    }
}

function clickedCall(id, txt, num) {
    getElement(id).addEventListener("click", function(event) {
        event.stopPropagation();
        if (coinBalance >= 20) {
            const text = getString(txt);
            const number = getString(num);
            coinBalance -= 20;
            getElement("coinHave").innerText = coinBalance;
            alert(`📞 Calling ${text} ${number}...`);
            historyOfCall(txt, number);
            historyDisplay();
        } else {
            alert(`Balance Insufficient, You Must Have 20 Coin!`);
        }
    });
}

// CALLING FUNC OF HEARTS
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

// CALLING FUNC OF COPIES
function copyButtons() {
    copyClicked("emergencyCopyBtn", "nationalEmergencyNum"); 
    copyClicked("policCopyBtn", "policNum");
    copyClicked("fireCopyBtn", "fireNum");
    copyClicked("ambulanceCopyBtn", "ambulanceNum");
    copyClicked("womenCopyBtn", "womenNum");
    copyClicked("achCopyBtn", "achNum");
    copyClicked("elecCopyBtn", "elecNum");
    copyClicked("bracCopyBtn", "bracNum");
    copyClicked("railCopyBtn", "railNum");
}

// CALLING FUNC OF CALL BTNs
function callButtons() { 
    clickedCall("nationalEmergencyCall", "nationalEmergencyTxt", "nationalEmergencyNum");
    clickedCall("policCall", "policTxt", "policNum");
    clickedCall("fireCallBtn", "fireTxt", "fireNum");
    clickedCall("ambulanceNumCallBtn", "ambulanceTxt", "ambulanceNum");
    clickedCall("womenCallBtn", "womenTxt", "womenNum");
    clickedCall("achCallBtn", "achTxt", "achNum");
    clickedCall("elecCallBtn", "elecTxt", "elecNum");
    clickedCall("bracCallBtn", "bracTxt", "bracNum");
    clickedCall("railCallBtn", "railTxt", "railNum");
}

// STARTING MY SITE's ACTIVITIES
callButtons(); 
heartButtons();
copyButtons();