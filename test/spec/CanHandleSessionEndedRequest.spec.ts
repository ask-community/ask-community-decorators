import { expect } from "chai";
import { HandlerInput, RequestHandler } from "ask-sdk";
import { SessionEndedRequest, IntentRequest, Response, RequestEnvelope } from "ask-sdk-model";

import { CanHandleSessionEndedRequest } from "../../lib/index";

describe("CanHandleSessionEndedRequest", () => {

    class TestIntentHandler implements RequestHandler {
        @CanHandleSessionEndedRequest()
        canHandle(handlerInput: HandlerInput): boolean {
          return true;
        }

        handle(handlerInput: HandlerInput): Response | Promise<Response> {
          return <Response>{};
        }      
    }

    describe("where request type is CanHandleSessionEndedRequest", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <SessionEndedRequest> {
                        type: 'SessionEndedRequest',
                        requestId: '',
                        timestamp: '',
                        locale: ''
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(true);
    
        });
    
    });

    describe("where request is not CanHandleSessionEndedRequest", () => {
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