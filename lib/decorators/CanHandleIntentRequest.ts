import { HandlerInput } from "ask-sdk-core";
import { IntentRequest } from "ask-sdk-model";

export function CanHandleIntentRequest(...intentNames: string[]) {

    return function (target: any, key: string, descriptor: PropertyDescriptor) {
       
        const originalMethod = descriptor.value;

        descriptor.value = function (handlerInput: HandlerInput): boolean {
            const className = target.constructor.name;

            let possibleIntentNames: string[] = intentNames;

            if (possibleIntentNames.length === 0) {
                const modifiedClassName = className.replace('Handler', '');
                possibleIntentNames = [className, modifiedClassName];
            }

            const request = handlerInput.requestEnvelope.request as IntentRequest;
            const intentName = request.intent.name;


            const canHandle = request.type === 'IntentRequest' && (possibleIntentNames.indexOf(intentName) > -1);
            // console.log(`CanHandleIntentRequest for '${className}' checks if '${intentName}' is in '${possibleIntentNames}' returns ${canHandle}`);

            if (canHandle === false) {
                return false;
            }

            const result = originalMethod.apply(this, arguments);
            return result;
        };
        
        return descriptor;
    }    
}