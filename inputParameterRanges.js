const TemperatureRange = {
  min: 0,
  max: 45,
  thresholdLow: 2.25,
  thresholdHigh: 42.75,
};
const SOCRange = { min: 20, max: 80, thresholdLow: 24, thresholdHigh: 76 };

const ChargeRateRange = {
  min: 0,
  max: 0.8,
  thresholdLow: 0.04,
  thresholdHigh: 0.76,
};
const languageCode = 1; // 1.English// 2. German
// using hashmap to store and map messages in different languages
const messageHashMap = new Map();
// Messagecode starts with 1 for English and 2 for German
// Each inputParameter has 6 messages 3 for normal range and 3 for threshold range and 7 ,8  are for batterystate being ok or not ok
//!!English messages!!
//Temperature
messageHashMap.set("1Temperature1", "Temperature is  low - out of range");
messageHashMap.set("1Temperature2", "Temperature is  high - out of range");
messageHashMap.set("1Temperature3", "Temperature is  within range");
messageHashMap.set(
  "1Temperature4",
  "!!Warning!! Temperature is going below threshold"
);
messageHashMap.set(
  "1Temperature5",
  "!!Warning!! Temperature is going above threshold"
);
messageHashMap.set("1Temperature6", "Temperature is within threshold range");
//SOC
messageHashMap.set("1SOC1", "State of charge is low - out of range");
messageHashMap.set("1SOC2", "State of charge is high - out of range");
messageHashMap.set("1SOC3", "State of charge is within range");
messageHashMap.set(
  "1SOC4",
  "!!Warning!!  State of charge is going below threshold"
);
messageHashMap.set(
  "1SOC5",
  "!!Warning!!  State of charge is going above threshold"
);
messageHashMap.set("1SOC6", "State of Charge is within the threshold range");
//ChargeRate
messageHashMap.set("1ChargeRate1", "ChargeRate is low - out of range");
messageHashMap.set("1ChargeRate2", "ChargeRate is high - out of range");
messageHashMap.set("1ChargeRate3", "ChargeRate is within range");
messageHashMap.set(
  "1ChargeRate4",
  "!!Warning!! ChargeRate is going below threshold"
);
messageHashMap.set(
  "1ChargeRate5",
  "!!Warning!! ChargeRate is going above threshold"
);
messageHashMap.set("1ChargeRate6", "ChargeRate is within threshold range");
messageHashMap.set("1BatteryState7", "***Battery is Ok***");
messageHashMap.set("1BatteryState8", "!!!Battery is not Ok!!!");
//!!German Messages!!
//Temperature
messageHashMap.set(
  "2Temperature1",
  "Die Temperatur ist niedrig - außerhalb des zulässigen Bereichs"
);
messageHashMap.set(
  "2Temperature2",
  "Die Temperatur ist hoch - außerhalb des zulässigen Bereichs"
);
messageHashMap.set(
  "2Temperature3",
  "Die Temperatur liegt im zulässigen Bereich"
);
messageHashMap.set(
  "2Temperature4",
  "!!Warnung!! Die Temperatur sinkt unter den Schwellenwertbereich"
);
messageHashMap.set(
  "2Temperature5",
  "!!Warnung!! Die Temperatur überschreitet den Schwellenwertbereich"
);
messageHashMap.set(
  "2Temperature6",
  "Die Temperatur liegt innerhalb des Grenzwertes"
);
//SOC
messageHashMap.set(
  "2SOC1",
  "Der Ladezustand ist niedrig - außerhalb des zulässigen Bereichs"
);
messageHashMap.set(
  "2SOC2",
  "Der Ladezustand ist hoch - außerhalb des zulässigen Bereichs"
);
messageHashMap.set(
  "2SOC3",
  "Der Ladezustand liegt innerhalb des zulässigen Bereichs"
);
messageHashMap.set(
  "2SOC4",
  "!!Warnung!! Der Ladezustand sinkt unter den Schwellenwertbereich"
);
messageHashMap.set(
  "2SOC5",
  "!!Warnung!! Der Ladezustand überschreitet den Schwellenwertbereich"
);
messageHashMap.set(
  "2SOC6",
  "Der Ladezustand liegt innerhalb des Schwellenbereichs"
);
//chargeRate
messageHashMap.set(
  "2ChargeRate1",
  "ChargeRate ist niedrig - außerhalb des Bereichs"
);
messageHashMap.set("2ChargeRate2", "ChargeRate ist hoch - außer Reichweite");
messageHashMap.set("2ChargeRate3", "ChargeRate liegt im Bereich");
messageHashMap.set(
  "2ChargeRate4",
  "!!Warnung!! ChargeRate fällt unter den Schwellenwertbereich"
);
messageHashMap.set(
  "2ChargeRate5",
  "!!Warnung!! ChargeRate überschreitet den Schwellenwertbereich"
);
messageHashMap.set(
  "2ChargeRate6",
  "ChargeRate liegt innerhalb des Schwellenwertbereichs"
);

messageHashMap.set("2BatteryState7", "Batterie ist ok");
messageHashMap.set("2BatteryState8", "Batterie ist nicht in Ordnung");

module.exports = {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  messageHashMap,
  languageCode,
};
