const TemperatureRange = { min: 0, max: 45 };
const SOCRange = { min: 20, max: 80 };
const ChargeRateRange = { min: 0, max: 0.8 };
//using HashMap for storing and accessing messages in different languages 
const messageHashMap = new Map();
//English messages
// Messagecode starts with 1
messageHashMap.set("1Temperature1", "Temperature is  low - out of range");
messageHashMap.set("1Temperature2", "Temperature is  high - out of range");
messageHashMap.set("1Temperature3", "Temperature is  within range");
messageHashMap.set("1SOC1", "State of charge is low - out of range");
messageHashMap.set("1SOC2", "State of charge is high - out of range");
messageHashMap.set("1SOC3", "State of charge is within range");
messageHashMap.set("1ChargeRate1", "ChargeRate is low - out of range");
messageHashMap.set("1ChargeRate2", "ChargeRate is high - out of range");
messageHashMap.set("1ChargeRate3", "ChargeRate is within range");
messageHashMap.set("1BatteryState4", "***Battery is Ok***");
messageHashMap.set("1BatteryState5", "!!!Battery is not Ok!!!");
//German Messages
//Messagecode starts with 2
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
  "2ChargeRate1",
  "ChargeRate ist niedrig - außerhalb des Bereichs"
);
messageHashMap.set("2ChargeRate2", "ChargeRate ist hoch - außer Reichweite");
messageHashMap.set("2ChargeRate3", "ChargeRate liegt im Bereich");
messageHashMap.set("2BatteryState4", "Batterie ist ok");
messageHashMap.set("2BatteryState5", "Batterie ist nicht in Ordnung");

module.exports = {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  messageHashMap,
};
