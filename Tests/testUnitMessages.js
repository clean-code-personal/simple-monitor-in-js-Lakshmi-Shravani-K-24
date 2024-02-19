const assert = require('assert');
const {
  TemperatureRange,
  SOCRange,
  ChargeRateRange,
  messageHashMap,
  languageCode,
} = require('../inputParameterRanges.js'); 

let currentLanguageCode = languageCode;
const setLanguageCode = (code) => {
  currentLanguageCode = code;
};

describe('Message Testing', () => {
  // Temperature Messages
  it('should display correct message for low temperature in English', () => {
    setLanguageCode('eng');
    const lowTemperature = TemperatureRange.min - 1; // Below minimum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}low`), 'is low - Out of Range');
  });

  it('should display correct message for low temperature in German', () => {
    setLanguageCode('ger');
    const lowTemperature = TemperatureRange.min - 1; // Below minimum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}low`), 'ist niedrig - Außerhalb der Reichweite');
  });

  it('should display correct message for high temperature in English', () => {
    setLanguageCode('eng');
    const highTemperature = TemperatureRange.max + 1; // Above maximum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}high`), 'is high - Out of Range');
  });

  it('should display correct message for high temperature in German', () => {
    setLanguageCode('ger');
    const highTemperature = TemperatureRange.max + 1; // Above maximum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}high`), 'ist hoch - Außerhalb der Reichweite');
  });

  it('should display correct message for normal temperature in English', () => {
    setLanguageCode('eng');
    const normalTemperature = (TemperatureRange.min + TemperatureRange.max) / 2; // Within range
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}normal`), 'is normal - In Range');
  });

  it('should display correct message for normal temperature in German', () => {
    setLanguageCode('ger');
    const normalTemperature = (TemperatureRange.min + TemperatureRange.max) / 2; // Within range
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}normal`), 'ist normal - in Reichweite');
  });

  // SOC Messages
  it('should display correct message for low SOC in English', () => {
    setLanguageCode('eng');
    const lowSOC = SOCRange.min - 1; // Below minimum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}low`), 'is low - Out of Range');
  });

  it('should display correct message for low SOC in German', () => {
    setLanguageCode('ger');
    const lowSOC = SOCRange.min - 1; // Below minimum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}low`), 'ist niedrig - Außerhalb der Reichweite');
  });

  it('should display correct message for high SOC in English', () => {
    setLanguageCode('eng');
    const highSOC = SOCRange.max + 1; // Above maximum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}high`), 'is high - Out of Range');
  });

  it('should display correct message for high SOC in German', () => {
    setLanguageCode('ger');
    const highSOC = SOCRange.max + 1; // Above maximum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}high`), 'ist hoch - Außerhalb der Reichweite');
  });

  it('should display correct message for normal SOC in English', () => {
    setLanguageCode('eng');
    const normalSOC = (SOCRange.min + SOCRange.max) / 2; // Within range
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}normal`), 'is normal - In Range');
  });

  it('should display correct message for normal SOC in German', () => {
    setLanguageCode('ger');
    const normalSOC = (SOCRange.min + SOCRange.max) / 2; // Within range
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}normal`), 'ist normal - in Reichweite');
  });

  // Charge Rate Messages
  it('should display correct message for low charge rate in English', () => {
    setLanguageCode('eng');
    const lowChargeRate = ChargeRateRange.min - 0.01; // Below minimum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}low`), 'is low - Out of Range');
  });

  it('should display correct message for low charge rate in German', () => {
    setLanguageCode('ger');
    const lowChargeRate = ChargeRateRange.min - 0.01; // Below minimum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}low`), 'ist niedrig - Außerhalb der Reichweite');
  });

  it('should display correct message for high charge rate in English', () => {
    setLanguageCode('eng');
    const highChargeRate = ChargeRateRange.max + 0.01; // Above maximum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}high`), 'is high - Out of Range');
  });

  it('should display correct message for high charge rate in German', () => {
    setLanguageCode('ger');
    const highChargeRate = ChargeRateRange.max + 0.01; // Above maximum
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}high`), 'ist hoch - Außerhalb der Reichweite');
  });

  it('should display correct message for normal charge rate in English', () => {
    setLanguageCode('eng');
    const normalChargeRate = (ChargeRateRange.min + ChargeRateRange.max) / 2; // Within range
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}normal`), 'is normal - In Range');
  });

  it('should display correct message for normal charge rate in German', () => {
    setLanguageCode('ger');
    const normalChargeRate = (ChargeRateRange.min + ChargeRateRange.max) / 2; // Within range
    assert.strictEqual(messageHashMap.get(`${currentLanguageCode}normal`), 'ist normal - in Reichweite');
  });

});
