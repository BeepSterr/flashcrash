
var robot   = require("robotjs");
var cmd     = require('node-cmd');
var crashed = false;

console.log('\033c')

setInterval(()=>{

    if(crashed == false){

        console.log('\033c')

        var val1 = robot.getPixelColor(100, 100);
        var val2 = robot.getPixelColor(500, 100);
        var val3 = robot.getPixelColor(500, 500);
        var val4 = robot.getPixelColor(100, 500);

        console.log("Colors: " + val1 + ", " + val2 + ", " + val3 + ", " + val4 + ", ")


        if(val1 == "ffffff" && val1 == val2 && val3 == val4 && val2 == val3){
            console.log("!! WILL CRASH !!");
            doCrash();
            crashed = true;
        }else{
            console.log("WONT CRASH");
        }

    }

}, 100);

function doCrash(){

    robot.keyTap("f11");

    setTimeout(()=>{
        cmd.run('taskkill /f /im csgo.exe');
        crashed = false;
    }, 2500);

}