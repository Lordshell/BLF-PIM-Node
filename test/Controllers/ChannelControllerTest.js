/*
 * AKKBLFPIM23Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.ChannelController;
const AuthentificationByRefreshTokenRequest = testerlib.AuthentificationByRefreshTokenRequest;
const AuthentificationByPasswordRequest = testerlib.AuthentificationByPasswordRequest;


describe("ChannelController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Assuming that the given code is the code of an existing channel
     */
    it("should testChannel response", function testChannelTest(done) {
        controller.getChannel(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });

    /**
     * TODO: Add Description
     */
    it("should testChannels response", function testChannelsTest(done) {
        controller.getChannels(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        });
    });
});
