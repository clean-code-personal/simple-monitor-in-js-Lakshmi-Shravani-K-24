const {TemperatureRange, SOCRange, ChargeRateRange}=require("./inputParameterRanges.js")

//checks whether inputParameters are in range or not and specifies the type of breach that is low or high
function checkBreach(inputParameter, value, min, max) {
    if (value < min) {
        console.log(`!!! ${inputParameter} is low that is ${value} - Not in range!!!`);
        return false;
    } else if (value > max) {
        console.log(`!!! ${inputParameter} is high that is ${value} - Not in range!!!`);
        return false;
    }
        console.log( `${inputParameter} is within the valid range that is : ${value}`) ;
        return true;    
}

function batteryIsOk(temperature, soc, chargeRate){
    const temperatureResult=checkBreach( "Temperature",temperature,TemperatureRange.min,TemperatureRange.max);
    const socResult=checkBreach("soc", soc, SOCRange.min, SOCRange.max);
    const chargeRateResult=checkBreach("chargeRate", chargeRate, ChargeRateRange.min, ChargeRateRange.max);
    
    if(temperatureResult & socResult & chargeRateResult ){
        console.log("***Battery is Ok***");
        return true;
    }
    else{
    console.log("!!!Battery is not Ok!!!");
    return false;
    }
}
module.exports={batteryIsOk};
