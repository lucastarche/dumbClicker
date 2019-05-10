var mainGame = {
     currency: 0,
     clickingPower: 1,
     upgradeClickCost: 10,
     autoClickers: 0,
     autoClickersCost: 50,
     autoClickerMultiplier: 0,
     upgradeAutoClickersCost: 500,
}
var clicksPerSecond = mainGame.autoClickers*(2^mainGame.autoClickerMuliplier);
function addClick(){
    mainGame.currency += mainGame.clickingPower;
    if (mainGame.currency > 1000){
    document.getElementById("reward").textContent = "This is NOT a Jojo´s reference";
    }
    update();
}
function increaseClicking(){
    if (mainGame.currency >= mainGame.upgradeClickCost){
        mainGame.clickingPower+=1;
        mainGame.currency -= mainGame.upgradeClickCost;
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
    mainGame.currency += clicksPerSecond
}
function upgradeAutoClickers(){
     if(mainGame.currency >= mainGame.upgradeAutoClickersCost){
          mainGame.currency -= mainGame.upgradeAutoClickersCost
          mainGame.autoClickerMultiplier++
          mainGame.upgradeAutoClickersCost *= 3;
     }
}
function update(){
    document.getElementById("clicks").innerHTML = "Clicks: " + mainGame.currency;
    document.getElementById("clickPower").innerHTML = "Clicking Power: " + mainGame.clickingPower;
    document.getElementById("upgradePrice").innerHTML = "Cost: " + mainGame.upgradeCost;
    document.getElementById("autoClickers").innerHTML = "Autoclickers: " + mainGame.autoClickers;
    document.getElementById("autoClickersCost").innerHTML = "Cost: " + mainGame.autoClickersCost;
    document.getElementById("clicksPerSecond").innerHTML = "CPS: " + clicksPerSecond;
    document.getElementById("upgradeAutoClickersCost").innerHTML = "Cost: " + mainGame.upgradeAutoClickersCost;
    clicksPerSecond = mainGame.autoClickers*(2^mainGame.autoClickerMuliplier);
}
window.setInterval(function(){
    autoClicker();
    update();
}, 1000);
 
