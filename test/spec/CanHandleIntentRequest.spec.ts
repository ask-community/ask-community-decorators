import { expect } from "chai";
import { HandlerInput, RequestHandler } from "ask-sdk";
import { IntentRequest, Response, RequestEnvelope } from "ask-sdk-model";

import { CanHandleIntentRequest } from "../../lib/index";

describe("CanHandleIntentRequest", () => {

    describe("with no params", () => {

        class TestIntentHandler implements RequestHandler {
            @CanHandleIntentRequest()
            canHandle(handlerInput: HandlerInput): boolean {
              return true;
            }
    
            handle(handlerInput: HandlerInput): Response | Promise<Response> {
              return <Response>{};
            }      
          }

        describe("where request intent name matches handler class name", () => {
            it("should return true", () => {
      
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
        
            expect(result).to.equal(true);
        
            });
        
        });
    
        describe("where request intent name does not match handler class name", () => {
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
                            name: 'MismatchIntentHandler'
                        }
                    }
                }
            };
        
            const handler = new TestIntentHandler();
            const result = handler.canHandle(handlerInput);
        
            expect(result).to.equal(false);
        
            });
        
        });

        describe("where request intent name matches handler class name minus handler suffix", () => {
            it("should return true", () => {
        
              const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(true);
        
            });
        
        });
    });

    describe("with one param", () => {

        class TestIntentHandler implements RequestHandler {
            @CanHandleIntentRequest('MyIntent')
            canHandle(handlerInput: HandlerInput): boolean {
            return true;
            }
    
            handle(handlerInput: HandlerInput): Response | Promise<Response> {
            return <Response>{};
            }      
        }

        describe("where request intent name matches decorator intent name", () => {
            it("should return true", () => {
        
            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(true);
        
            });
        
        });

        describe("where request intent name does not matche decorator intent name", () => {
            it("should return true", () => {
       
            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(false);
        
            });
        
        });
    });

    describe("with two params", () => {

        class TestIntentHandler implements RequestHandler {
            @CanHandleIntentRequest('MyIntent1', "MyIntent2")
            canHandle(handlerInput: HandlerInput): boolean {
            return true;
            }
    
            handle(handlerInput: HandlerInput): Response | Promise<Response> {
            return <Response>{};
            }      
        }

        describe("where request intent name matches decorator first intent name", () => {
            it("should return true", () => {
        
            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(true);
        
            });
        
        });    

        describe("where request intent name matches decorator second intent name", () => {
            it("should return true", () => {
        
            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(true);
        
            });
        
        });  
        
        describe("where request intent name does not matche any decorator intent name", () => {
            it("should return true", () => {
        
            const handlerInput = <HandlerInput> {
                requestEnvelope : <RequestEnvelope> {
                    request: <IntentRequest> {
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
        
            expect(result).to.equal(false);
        
            });
        
        });        
    });

});

