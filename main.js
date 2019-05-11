var gameData = {
    currency: 10,
    clickPower: 1,
    upgradeClickCost: 10,
    generator1: 0,
    generator1Cost: 25,
    generator1Multiplier: 1,
    gen1MultiplierCost: 500,
};
function addClick(){
    gameData.currency += gameData.clickPower;
    update();
}
function upgradeClicks(){
    if (gameData.currency >= gameData.upgradeClickCost){
        gameData.currency -= gameData.upgradeClickCost;
        gameData.upgradeClickCost = parseInt(gameData.upgradeClickCost *= 1.2);
        gameData.clickPower++;
        update();
    }
}
function autoClicking(){
    gameData.currency += (gameData.generator1*gameData.generator1Multiplier);
    update();
}
function addAutoclickers(){
    if (gameData.currency >= gameData.generator1Cost){
        gameData.currency -= gameData.generator1Cost;
        gameData.generator1Cost = parseInt(gameData.generator1Cost *= 1.2);
        gameData.generator1++;
        update();
    }
}
function upgradeAutoclickers(){
    if (gameData.currency >= gameData.gen1MultiplierCost){
        gameData.currency -= gameData.gen1MultiplierCost;
        gameData.generator1Multiplier *= 2;
        gameData.gen1MultiplierCost *= 3;
    }
}
function update(){
    document.getElementById("currency").innerHTML 
    = "Money: " + gameData.currency;
    document.getElementById("upgradeClicksCost").innerHTML 
    = "Upgrade Clicks<br>Cost: " + gameData.upgradeClickCost;
    document.getElementById("clickingPower").innerHTML 
    = "Money/Click: " + gameData.clickPower;
    document.getElementById("generator1").innerHTML 
    = "Cookie bakeries: " + gameData.generator1;
    document.getElementById("generator1Multiplier").innerHTML 
    = "Multiplier: x" + gameData.generator1Multiplier;
    document.getElementById("generator1Cost").innerHTML 
    = "Buy cookie bakery<br>Cost: " + gameData.generator1Cost;
    document.getElementById("gen1MultiplierCost").innerHTML 
    = "Upgrade: " + gameData.gen1MultiplierCost;
}
window.setInterval(function(){
    autoClicking();
    update();
}, 1000);