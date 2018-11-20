"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../../lib/index");
describe("CanHandleIntentRequest", () => {
    describe("with no params", () => {
        class TestIntentHandler {
            canHandle(handlerInput) {
                return true;
            }
            handle(handlerInput) {
                return {};
            }
        }
        __decorate([
            index_1.CanHandleIntentRequest(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", Boolean)
        ], TestIntentHandler.prototype, "canHandle", null);
        describe("where request intent name matches handler class name", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'TestIntentHandler'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(true);
            });
        });
        describe("where request intent name does not match handler class name", () => {
            it("should return false", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'MismatchIntentHandler'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(false);
            });
        });
        describe("where request intent name matches handler class name minus handler suffix", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'TestIntent'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(true);
            });
        });
    });
    describe("with one param", () => {
        class TestIntentHandler {
            canHandle(handlerInput) {
                return true;
            }
            handle(handlerInput) {
                return {};
            }
        }
        __decorate([
            index_1.CanHandleIntentRequest('MyIntent'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", Boolean)
        ], TestIntentHandler.prototype, "canHandle", null);
        describe("where request intent name matches decorator intent name", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'MyIntent'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(true);
            });
        });
        describe("where request intent name does not matche decorator intent name", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'MismatchIntent'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(false);
            });
        });
    });
    describe("with two params", () => {
        class TestIntentHandler {
            canHandle(handlerInput) {
                return true;
            }
            handle(handlerInput) {
                return {};
            }
        }
        __decorate([
            index_1.CanHandleIntentRequest('MyIntent1', "MyIntent2"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", Boolean)
        ], TestIntentHandler.prototype, "canHandle", null);
        describe("where request intent name matches decorator first intent name", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'MyIntent1'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(true);
            });
        });
        describe("where request intent name matches decorator second intent name", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'MyIntent2'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(true);
            });
        });
        describe("where request intent name does not matche any decorator intent name", () => {
            it("should return true", () => {
                const handlerInput = {
                    requestEnvelope: {
                        request: {
                            type: 'IntentRequest',
                            requestId: '',
                            timestamp: '',
                            dialogState: {},
                            locale: '',
                            intent: {
                                name: 'WrongIntent'
                            }
                        }
                    }
                };
                const handler = new TestIntentHandler();
                const result = handler.canHandle(handlerInput);
                chai_1.expect(result).to.equal(false);
            });
        });
    });
});
