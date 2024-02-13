const assert = require('assert');
const {batteryIsOk}= require('./bms-monitor.js');

describe('Battery Health Check', function() {
    it('should return true for acceptable parameters', function() {
        assert.strictEqual(batteryIsOk(25, 70, 0.7), true);
    });

    it('should return false for high temperature', function() {
        assert.strictEqual(batteryIsOk(50, 70, 0.7), false);
    });

    it('should return false for low temperature', function() {
        assert.strictEqual(batteryIsOk(-5, 70, 0.7), false);
    });

    it('should return false for high SOC', function() {
        assert.strictEqual(batteryIsOk(25, 85, 0.7), false);
    });
    it('should return false for low SOC', function() {
        assert.strictEqual(batteryIsOk(25, 15, 0.7), false);
    });

    it('should return false for high charge rate', function() {
        assert.strictEqual(batteryIsOk(25, 70, 0.9), false);
    });
});
