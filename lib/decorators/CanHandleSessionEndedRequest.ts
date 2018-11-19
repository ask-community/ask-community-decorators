import { HandlerInput } from "ask-sdk-core";

export function CanHandleSessionEndedRequest() {

    return function (target: any, key: string, descriptor: PropertyDescriptor) {
       
        const originalMethod = descriptor.value;

        descriptor.value = function (handlerInput: HandlerInput): boolean {

            const canHandle = handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
            // console.log(`CanHandleSessionEndedRequest for '${target.constructor.name}' checks if '${request.type}' equals 'SessionEndedRequest' returns ${canHandle}`);

            if (canHandle === false) {
                return false;
            }

            const result = originalMethod.apply(this, arguments);
            return result;
        };
        
        return descriptor;
    }    
}