const {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  messageHashMap,
  languageCode,
} = require("./inputParameterRanges.js");

//checks whether inputParameters are in range or not  and returns boolean value and also specifies the type of breach that is low or high and also checks threshold range
function isInRange(inputParameter, value, inputParameterRange) {
  if (value < inputParameterRange.min) {
    return {
      input: inputParameter,
      code: 1,
      normal: false,
    };
  } else if (value > inputParameterRange.max) {
    return {
      input: inputParameter,
      code: 2,
      normal: false,
    };
  }

  return {
    input: inputParameter,
    code: 3,
    normal: true,
  };
}

//this function generates Message code and prints the message
function printMessage(result) {
  const code = result.code; //code determines nputParameter's state low or high or normal
  const inputParameter = result.input;
  const messageCode = "" + languageCode + inputParameter + code; //message is combination of language , inputParameter and code
  let message = messageHashMap.get(messageCode);
  console.log(message);
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
    printMessage({ input: "BatteryState", code: 7 });
    return true;
  } else {
    printMessage({ input: "BatteryState", code: 8 });
    return false;
  }
}

module.exports = { batteryIsOk, printMessage };
