const {
    TemperatureRange,
    SOCRange,
    ChargeRateRange,
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

  function isInThresholdRange(inputParameter, value, inputParameterRange) {
    if (value < inputParameterRange.thresholdLow)
      return { input: inputParameter, code: "warnlow", isSafe: false};
    else if (value > inputParameterRange.thresholdHigh)
      return { input: inputParameter, code:"warnhigh", isSafe: false };
    return { input: inputParameter, code: "normal", isSafe: true};
  }
  
module.exports={isInRange,isInThresholdRange};
