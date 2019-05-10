var currency = 0;
var clickingPower = 1;
var upgradeCost = 10;
function addClick(){
    currency += clickingPower;
    document.getElementById("clicks").textContent = "Clicks: " + currency;
}
function increaseClicking(){
    if (currency >= upgradeCost){
        clickingPower+=1;
        currency -= upgradeCost;
        upgradeCost = parseInt(upgradeCost*1.1)+1;
    }
    document.getElementById("clicks").textContent = "Clicks: " + currency;
    document.getElementById("clickPower").textContent = "Clicking Power: " + clickingPower;
    document.getElementById("upgradePrice").textContent = "Cost: " + upgradeCost;
}
if (currency > 1000){
    document.getElementById("reward").textContent = "This is NOT a Jojo´s reference";
}
