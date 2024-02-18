const {batteryWarningIndicator}= require("./bms-monitor.js");
const assert = require('assert');
describe('warningIndicator function', function() {
    it('should return true when all parameters are in threshold range ', function() {
        assert.strictEqual(batteryWarningIndicator(25, 70, 0.6), true);
    });
  
    it('should return false when temperature value is below threshold low', function() {
        assert.strictEqual(batteryWarningIndicator(2, 70, 0.6), false);
      });

    it('should return false when temperature value is above threshold high', function() {
        assert.strictEqual(batteryWarningIndicator(43, 70, 0.5), false);
    });

    it('should return false when SOC value is below threshold low', function() {
        assert.strictEqual(batteryWarningIndicator(25, 23, 0.6), false);
    });
  
    it('should return warning when SOC value is above threshold high', function() {
        assert.strictEqual(batteryWarningIndicator(25, 77, 0.6), false);
    });
  
    it('should return warning when ChargeRate value is below threshold low', function() {
        assert.strictEqual(batteryWarningIndicator(25, 70, 0.03), false);
    });
  
    it('should return warning when ChargeRate value is above threshold high', function() {
        assert.strictEqual(batteryWarningIndicator(25, 70, 0.78), false);
    });
  
    it('should return true when all parametrs are  near to threshold range - high', function() {
        assert.strictEqual(batteryWarningIndicator(42.75, 76, 0.76), true);
    });

    it('should return true when all parametrs are  near to threshold range - low', function() {
        assert.strictEqual(batteryWarningIndicator(2.25, 24, 0.04), true);
    });

  });
  
