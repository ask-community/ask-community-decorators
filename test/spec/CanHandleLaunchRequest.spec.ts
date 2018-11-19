import { expect } from "chai";
import { HandlerInput, RequestHandler } from "ask-sdk";
import { LaunchRequest, IntentRequest, Response, RequestEnvelope } from "ask-sdk-model";

import { CanHandleLaunchRequest } from "../../lib/index";

describe("CanHandleLaunchRequest", () => {

    class TestIntentHandler implements RequestHandler {
        @CanHandleLaunchRequest()
        canHandle(handlerInput: HandlerInput): boolean {
          return true;
        }

        handle(handlerInput: HandlerInput): Response | Promise<Response> {
          return <Response>{};
        }      
    }

    describe("where request type is LaunchRequest", () => {
        it("should return true", () => {

            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <LaunchRequest> {
                        type: 'LaunchRequest',
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

    describe("where request is not LaunchRequest", () => {
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