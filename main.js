var gameData = {
    currency: 10,
    clickPower: 1,
    upgradeClickCost: 10,
    generator1: 0,
    generator1Cost: 25,
    generator1Multiplier: 1,
    gen1MultiplierCost: 500,
};
//<--Load saved game 
var savegame = JSON.parse(localStorage.getItem("dumbClickerSave"));
if (savegame !== null) {
  gameData = savegame;
}//-->
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
function buyMax(){
    while(gameData.currency >= gameData.generator1Cost){
        addAutoclickers();
    }
}
function update(){
    document.getElementById("currency").innerHTML 
    = "Knowldedge: " + gameData.currency;
    document.getElementById("upgradeClicksCost").innerHTML 
    = "Buy a book<br>Cost: " + gameData.upgradeClickCost;
    document.getElementById("clickingPower").innerHTML 
    = "Knowldedge/Click: " + gameData.clickPower;
    document.getElementById("generator1").innerHTML 
    = "Audiobooks: " + gameData.generator1;
    document.getElementById("generator1Multiplier").innerHTML 
    = "Multiplier: x" + gameData.generator1Multiplier;
    document.getElementById("generator1Cost").innerHTML 
    = "Buy an audiobook<br>Cost: " + gameData.generator1Cost;
    document.getElementById("gen1MultiplierCost").innerHTML 
    = "x2 multiplier<br>Cost: " + gameData.gen1MultiplierCost;
}
//<--Saves the game, manually or automatically
function saveGame(){
    localStorage.setItem("dumbClickerSave", JSON.stringify(gameData));
    document.getElementById("savedGame").innerHTML 
    = "Game has been saved!";
    window.setTimeout(function(){
        document.getElementById("savedGame").innerHTML
        = " ";
    }, 5000);
}//-->
window.setInterval(function(){
    autoClicking();
    update();
}, 1000); //Autoclickers y update cada segundo
window.setInterval(function(){
    saveGame();
}, 60000); //Autosave cada minuto