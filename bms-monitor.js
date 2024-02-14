const {TemperatureRange, SOCRange, ChargeRateRange}=require("./inputParameterRanges.js")

//checks whether inputParameters are in range or not  and returns boolean value and also specifies the type of breach that is low or high
function isInRange(inputParameter, value, min, max) {
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
    const temperatureResult=isInRange( "Temperature",temperature,TemperatureRange.min,TemperatureRange.max);
    const socResult=isInRange("soc", soc, SOCRange.min, SOCRange.max);
    const chargeRateResult=isInRange("chargeRate", chargeRate, ChargeRateRange.min, ChargeRateRange.max);
    const finalResult=temperatureResult & socResult & chargeRateResult;
    if(finalResult){
        console.log("***Battery is Ok***");
        return true;
    }
    else{
    console.log("!!!Battery is not Ok!!!");
    return false;
    }
}
module.exports={batteryIsOk};
