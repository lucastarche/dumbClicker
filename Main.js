var mainGame = {
     currency = 0;
     clickingPower = 1;
     upgradeCost = 10;
     autoClickers = 0;
     autoClickersCost = 50;
}
function addClick(){
    mainGame.currency += mainGame.clickingPower;
    if (mainGame.currency > 1000){
    document.getElementById("reward").textContent = "This is NOT a Jojo´s reference";
    }
    uodate();
}
function increaseClicking(){
    if (currency >= upgradeCost){
        clickingPower+=1;
        currency -= upgradeCost;
        upgradeCost = parseInt(upgradeCost*1.1)+1;
    }
}
function increaseAutoClickers(){
    if (currency >= autoClickersCost){
        autoClickers++;
        currency -= autoClickersCost;
        autoClickersCost = parseInt(autoClickersCost*1.1)+1;
    }
}
function autoClicker(){
    currency += autoClickers;
}
function update(){
    document.getElementById("clicks").textContent = "Clicks: " + currency;
    document.getElementById("clickPower").textContent = "Clicking Power: " + clickingPower;
    document.getElementById("upgradePrice").textContent = "Cost: " + upgradeCost;
    document.getElementById("autoClickers").textContent = "Autoclickers: " + autoClickers;
    document.getElementById("autoClickersCost").textContent = "Cost: " + autoClickersCost;
}
window.setInterval(function(){
    autoClicker();
    update();
}, 1000);
