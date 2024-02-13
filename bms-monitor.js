const {expect} = require('chai');

const {TemperatureRange, SOCRange, ChargeRateRange}=require("./inputParameterRanges.js")
function checkBreachType(value, min, max) {
    if (value < min) {
        return "low";
    } else if (value > max) {
        return "high";
    }
    return "nobreach";
}
function printBreachType(inputParameter,value, breachType){
    if(breachType!="nobreach"){
    console.log(`!!! ${inputParameter} is ${breachType} that is : ${value} - Not in range!!!`);
    return false;
    }
else{
console.log( `${inputParameter} is within the valid range that is : ${value}`) ;
return true;}
}

function isBreached(inputParameter, value, min, max){
    const breachType=checkBreachType(value,min, max);
    const result=printBreachType( inputParameter,value,  breachType );
return result;
}
function batteryIsOk(temperature, soc, chargeRate){
const temperatureResult=isBreached( "Temperature",temperature,TemperatureRange.min,TemperatureRange.max);
const socResult=isBreached("soc", soc, SOCRange.min, SOCRange.max);
const chargeRateResult=isBreached("chargeRate", chargeRate, ChargeRateRange.min, ChargeRateRange.max);
if(temperatureResult & socResult & chargeRateResult ){
console.log("***Battery is Ok***");
return true;
}
else{
console.log("!!!Battery is not Ok!!!");
return false;
}
}
expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false;
