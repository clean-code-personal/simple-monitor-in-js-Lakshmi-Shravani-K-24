const {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  messageHashMap,
} = require("./inputParameterRanges.js");
const languageCode = 1; // 1: English / 2: German

//checks whether inputParameters are in range or not  and returns boolean value and also specifies the type of breach that is low or high
function isInRange(inputParameter, value, min, max) {
  if (value < min) {
    return { input: inputParameter, code: 1, normal: false };
  } else if (value > max) {
    return { input: inputParameter, code: 2, normal: false };
  }
  return { input: inputParameter, code: 3, normal: true };
}

function batteryIsOk(temperature, soc, chargeRate) {
  //this function generates Message code and prints the message
  function printMessage(result) {
    const code = result.code; //code determines nputParameter's state low or high or normal
    const inputParameter = result.input;
    const messageCode = "" + languageCode + inputParameter + code; //message is combination of language , inputParameter and code
    let message = messageHashMap.get(messageCode);
    console.log(message);
  }
  const temperatureResult = isInRange(
    "Temperature",
    temperature,
    TemperatureRange.min,
    TemperatureRange.max
  );
  printMessage(temperatureResult);
  const socResult = isInRange("SOC", soc, SOCRange.min, SOCRange.max);
  printMessage(socResult);
  const chargeRateResult = isInRange(
    "ChargeRate",
    chargeRate,
    ChargeRateRange.min,
    ChargeRateRange.max
  );
  printMessage(chargeRateResult);

  const results = [
    temperatureResult.normal,
    socResult.normal,
    chargeRateResult.normal,
  ];

  const finalResult = results.reduce((acc, result) => acc && result, true);
  if (finalResult) {
    printMessage({ input: "BatteryState", code: 4 });
    return true;
  } else {
    printMessage({ input: "BatteryState", code: 5 });
    return false;
  }
}
module.exports = { batteryIsOk };
