const {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
} = require("./inputParameterRanges.js");
const { printMessage } = require("./bms-monitor.js");
//battery is being continuously monitored  using for loop
// warning gets printed if inputParameter is below or above threshold range
function TemperatutreMonitoring() {
  for (temp = TemperatureRange.min; temp <= TemperatureRange.max; temp += 1) {
    warningResult = warningIndicator("Temperature", temp, TemperatureRange);
    if (warningResult.warning === true) printMessage(warningResult);
  }
}
function StateOfChargeMonitoring() {
  for (soc = SOCRange.min; soc <= SOCRange.max; soc += 1) {
    warningResult = warningIndicator("SOC", soc, SOCRange);
    if (warningResult.warning === true) printMessage(warningResult);
  }
}
function ChargeRateMonitoring() {
  for (rate = ChargeRateRange.min; rate <= ChargeRateRange.max; rate += 0.1) {
    warningResult = warningIndicator("ChargeRate", rate, ChargeRateRange);
    if (warningResult.warning === true) printMessage(warningResult);
  }
}
function batteryMonitoring() {
  TemperatutreMonitoring();
  StateOfChargeMonitoring();
  ChargeRateMonitoring();
}

function warningIndicator(inputParameter, value, inputParameterRange) {
  if (value < inputParameterRange.thresholdLow)
    return { input: inputParameter, code: 4, warning: true };
  else if (value > inputParameterRange.thresholdHigh)
    return { input: inputParameter, code: 5, warning: true };
  return { input: inputParameter, code: 6, warning: false };
}
batteryMonitoring();
