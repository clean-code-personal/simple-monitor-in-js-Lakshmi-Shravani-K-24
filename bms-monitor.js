const {
    TemperatureRange,
    SOCRange,
    ChargeRateRange,
    inputParameterMap,
    messageHashMap,
    languageCode,
  } = require("./inputParameterRanges.js");
const {isInRange, isInThresholdRange } = require("./bms-rangeChecker.js");
  
function printMessage(result) {
    const inputParameterCode = languageCode + result.input;
    const messageCode = languageCode + result.code; //message is combination of language and code
    const inputParameter = inputParameterMap.get(inputParameterCode); // get the parameter
    let message = messageHashMap.get(messageCode); // get the message
    console.log(inputParameter + message);
  }
  function batteryIsOk(temperature, soc, chargeRate) {
    const temperatureResult = isInRange(
      "Temperature",
      temperature,
      TemperatureRange
    );
    //SOC
    const socResult = isInRange("SOC", soc, SOCRange);
    //  Charge Rate
    const chargeRateResult = isInRange("ChargeRate", chargeRate, ChargeRateRange);
    printMessage(temperatureResult);
    printMessage(socResult);
    printMessage(chargeRateResult);
   
    const results = [
      temperatureResult.normal,
      socResult.normal,
      chargeRateResult.normal,
    ];
    const finalResult = results.reduce((acc, result) => acc && result, true);
    if (finalResult) {
      printMessage({ input: "Battery", code: "Ok" });
      return true;
    } else {
      printMessage({ input: "Battery", code: "NotOk" });
      return false;
    }
  }

  function batteryWarningIndicator(temperature, soc, chargeRate){
    const temperatureWarning=isInThresholdRange("Temperature",
    temperature,
    TemperatureRange);
    const socWarning=isInThresholdRange("SOC",soc,SOCRange);
    const chargeRateWarning= isInThresholdRange("ChargeRate", chargeRate, ChargeRateRange);

    printMessage(temperatureWarning);
    printMessage(socWarning);
    printMessage(chargeRateWarning);

    const warnings=[temperatureWarning.isSafe,socWarning.isSafe,chargeRateWarning.isSafe];
    const finalWarningResult= warnings.reduce((acc, result) => acc && result, true);
    if (finalWarningResult) {
      printMessage({ input: "Battery", code: "Safe" });
      return true;
    } else {
      printMessage({ input: "Battery", code: "NotSafe" });
      return false;
    }

  }
  module.exports = { batteryIsOk,batteryWarningIndicator };
