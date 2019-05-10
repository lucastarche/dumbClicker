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
         update();
    }
}
function increaseAutoClickers(){
    if (mainGame.currency >= mainGame.autoClickersCost){
        mainGame.autoClickers++;
        mainGame.currency -= mainGame.autoClickersCost;
        mainGame.autoClickersCost = parseInt(mainGame.autoClickersCost*1.1)+1;
        update();
    }
}
function autoClicker(){
    mainGame.currency += mainGame.autoClickers;
}
function update(){
    document.getElementById("clicks").innerHTML = "Clicks: " + mainGame.currency;
    document.getElementById("clickPower").innerHTML = "Clicking Power: " + mainGame.clickingPower;
    document.getElementById("upgradePrice").innerHTML = "Cost: " + mainGame.upgradeCost;
    document.getElementById("autoClickers").innerHTML = "Autoclickers: " + mainGame.autoClickers;
    document.getElementById("autoClickersCost").innerHTML = "Cost: " + mainGame.autoClickersCost;
}
window.setInterval(function(){
    autoClicker();
    update();
}, 1000);
