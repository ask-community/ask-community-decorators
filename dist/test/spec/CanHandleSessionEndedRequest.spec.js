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
describe("CanHandleSessionEndedRequest", () => {
    class TestIntentHandler {
        canHandle(handlerInput) {
            return true;
        }
        handle(handlerInput) {
            return {};
        }
    }
    __decorate([
        index_1.CanHandleSessionEndedRequest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], TestIntentHandler.prototype, "canHandle", null);
    describe("where request type is CanHandleSessionEndedRequest", () => {
        it("should return true", () => {
            const handlerInput = {
                requestEnvelope: {
                    request: {
                        type: 'SessionEndedRequest',
                        requestId: '',
                        timestamp: '',
                        locale: ''
                    }
                }
            };
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
            chai_1.expect(result).to.equal(true);
        });
    });
    describe("where request is not CanHandleSessionEndedRequest", () => {
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
                            name: 'TestIntentHandler'
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
