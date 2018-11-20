"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CanHandleSessionEndedRequest() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (handlerInput) {
            const canHandle = handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
            // console.log(`CanHandleSessionEndedRequest for '${target.constructor.name}' checks if '${request.type}' equals 'SessionEndedRequest' returns ${canHandle}`);
            if (canHandle === false) {
                return false;
            }
            const result = originalMethod.apply(this, arguments);
            return result;
        };
        return descriptor;
    };
}
exports.CanHandleSessionEndedRequest = CanHandleSessionEndedRequest;
