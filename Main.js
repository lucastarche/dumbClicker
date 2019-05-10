var mainGame = {
     currency: 0,
     clickingPower: 1,
     upgradeCost: 10,
     autoClickers: 0,
     autoClickersCost: 50,
}
function addClick(){
    mainGame.currency += mainGame.clickingPower;
    if (mainGame.currency > 1000){
    document.getElementById("reward").textContent = "This is NOT a Jojo´s reference";
    }
    update();
}
function increaseClicking(){
    if (mainGame.currency >= mainGame.upgradeCost){
        mainGame.clickingPower+=1;
        mainGame.currency -= mainGame.upgradeCost;
        mainGame.upgradeCost = parseInt(mainGame.upgradeCost*1.1)+1;
    }
}
function increaseAutoClickers(){
    if (mainGame.currency >= mainGame.autoClickersCost){
        mainGame.autoClickers++;
        mainGame.currency -= mainGame.autoClickersCost;
        mainGame.autoClickersCost = parseInt(mainGame.autoClickersCost*1.1)+1;
    }
}
function autoClicker(){
    mainGame.currency += mainGame.autoClickers;
}
function update(){
    document.getElementById("clicks").textContent = "Clicks: " + mainGame.currency;
    document.getElementById("clickPower").textContent = "Clicking Power: " + mainGame.clickingPower;
    document.getElementById("upgradePrice").textContent = "Cost: " + mainGame.upgradeCost;
    document.getElementById("autoClickers").textContent = "Autoclickers: " + mainGame.autoClickers;
    document.getElementById("autoClickersCost").textContent = "Cost: " + mainGame.autoClickersCost;
}
window.setInterval(function(){
    autoClicker();
    update();
}, 1000);
