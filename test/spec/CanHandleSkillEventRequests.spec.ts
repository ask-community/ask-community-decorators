import { expect } from "chai";
import { HandlerInput, RequestHandler } from "ask-sdk";
import { Request, IntentRequest, Response, RequestEnvelope } from "ask-sdk-model";

import { CanHandleSkillEventRequests } from "../../lib/index";

describe("CanHandleSkillEventRequests", () => {

    class TestIntentHandler implements RequestHandler {
        @CanHandleSkillEventRequests()
        canHandle(handlerInput: HandlerInput): boolean {
          return true;
        }

        handle(handlerInput: HandlerInput): Response | Promise<Response> {
          return <Response>{};
        }      
    }

    describe("where request type is AlexaSkillEvent.SkillEnabled", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <Request> {
                        type: 'AlexaSkillEvent.SkillEnabled',
                        requestId: '',
                        timestamp: ''
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(true);
    
        });
    
    });

    describe("where request type is AlexaSkillEvent.SkillDisabled", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <Request> {
                        type: 'AlexaSkillEvent.SkillDisabled',
                        requestId: '',
                        timestamp: ''
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(true);
    
        });
    
    });

    describe("where request type is AlexaSkillEvent.SkillPermissionAccepted", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <Request> {
                        type: 'AlexaSkillEvent.SkillPermissionAccepted',
                        requestId: '',
                        timestamp: ''
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(true);
    
        });
    
    });

    describe("where request type is AlexaSkillEvent.SkillPermissionChanged", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <Request> {
                        type: 'AlexaSkillEvent.SkillPermissionChanged',
                        requestId: '',
                        timestamp: ''
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(true);
    
        });
    
    });

    describe("where request type is AlexaSkillEvent.SkillAccountLinked", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <Request> {
                        type: 'AlexaSkillEvent.SkillAccountLinked',
                        requestId: '',
                        timestamp: ''
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(true);
    
        });
    
    });

    describe("where request is not a Skill Event", () => {
        it("should return false", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(false);
    
        });
    
    });
});