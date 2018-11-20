"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CanHandleIntentRequest(...intentNames) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (handlerInput) {
            const className = target.constructor.name;
            let possibleIntentNames = intentNames;
            if (possibleIntentNames.length === 0) {
                const modifiedClassName = className.replace('Handler', '');
                possibleIntentNames = [className, modifiedClassName];
            }
            const request = handlerInput.requestEnvelope.request;
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
    };
}
exports.CanHandleIntentRequest = CanHandleIntentRequest;
