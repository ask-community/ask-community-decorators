import { HandlerInput } from "ask-sdk-core";

export function CanHandleSkillEventRequests() {

    return function (target: any, key: string, descriptor: PropertyDescriptor) {
       
        const originalMethod = descriptor.value;

        descriptor.value = function (handlerInput: HandlerInput): boolean {
            const className = target.constructor.name;

            const canHandle = handlerInput.requestEnvelope.request.type.startsWith('AlexaSkillEvent.');
            // console.log(`CanHandleSkillEventRequests for '${className}' checks if '${request.type}' starts with 'AlexaSkillEvent.' returns ${canHandle}`);

            if (canHandle === false) {
                return false;
            }

            const result = originalMethod.apply(this, arguments);
            return result;
        };
        
        return descriptor;
    }    
}