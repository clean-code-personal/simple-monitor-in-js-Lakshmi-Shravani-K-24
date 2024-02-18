const TemperatureRange = {
  min: 0,
  max: 45,
  thresholdLow: 2.25,
  thresholdHigh: 42.75,
};

const SOCRange = {
  min: 20,
  max: 80,
  thresholdLow: 24,
  thresholdHigh: 76,
};

const ChargeRateRange = {
  min: 0,
  max: 0.8,
  thresholdLow: 0.04,
  thresholdHigh: 0.76,
};
const languageCode = "eng"; // eng for english // ger for german
//this hashmap is to store input parameters
const inputParameterMap = new Map();
//english
inputParameterMap.set("engTemperature", "Temperature ");
inputParameterMap.set("engSOC", "State of Charge ");
inputParameterMap.set("engChargeRate", "Charge Rate ");
inputParameterMap.set("engBattery", "Battery ");
// german
inputParameterMap.set("gerTemperature", "Temperatur ");
inputParameterMap.set("gerSOC", "Ladezustand ");
inputParameterMap.set("gerChargeRate", "Laderate ");
inputParameterMap.set("gerBattery", "Batterie ");
// this hashMap is to display messages
const messageHashMap = new Map();
//english
messageHashMap.set("englow", "is low - Out of Range");
messageHashMap.set(
  "engwarnlow",
  "is going below threshold - Action Required!!"
);
messageHashMap.set("enghigh", "is high - Out of Range");
messageHashMap.set(
  "engwarnhigh",
  "is going above threshold - Action Required!!"
);
messageHashMap.set("engnormal", "is normal - In Range");
messageHashMap.set("engOk", "is Ok");
messageHashMap.set("engNotOk", "is not Ok");
//german
messageHashMap.set("gerlow", "ist niedrig - Außerhalb der Reichweite");
messageHashMap.set(
  "gerwarnlow",
  "unterschreitet den Schwellenwert - Handlungsbedarf!!"
);
messageHashMap.set("gerhigh", "ist hoch - Außerhalb der Reichweite");
messageHashMap.set(
  "gerwarnhigh",
  "überschreitet den Schwellenwert - Handlungsbedarf!!"
);
messageHashMap.set("gernormal", "ist normal - in Reichweite");
messageHashMap.set("gerOk", "ist ok");
messageHashMap.set("gerNotOk", "ist nicht in Ordnung");

module.exports = {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  inputParameterMap,
  messageHashMap,
  languageCode,
};
