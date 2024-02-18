const {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  inputParameterMap,
  messageHashMap,
  languageCode,
} = require("./inputParameterRanges.js");

function isInRange(inputParameter, value, inputParameterRange) {
  if (value < inputParameterRange.min) {
    return {
      input: inputParameter,
      code: "low",
      normal: false,
    };
  } else if (value > inputParameterRange.max) {
    return {
      input: inputParameter,
      code: "high",
      normal: false,
    };
  }

  return {
    input: inputParameter,
    code: "normal",
    normal: true,
  };
}
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
  printMessage(temperatureResult);
  //SOC
  const socResult = isInRange("SOC", soc, SOCRange);
  printMessage(socResult);
  //  Charge Rate
  const chargeRateResult = isInRange("ChargeRate", chargeRate, ChargeRateRange);
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
batteryIsOk(48, 40, 0.9);
module.exports = { batteryIsOk, printMessage };
