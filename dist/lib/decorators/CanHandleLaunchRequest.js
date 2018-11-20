"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CanHandleLaunchRequest() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (handlerInput) {
            const canHandle = handlerInput.requestEnvelope.request.type === 'LaunchRequest';
            // console.log(`CanHandleLaunchRequest for '${target.constructor.name}' checks if '${request.type}' equals 'LaunchRequest' returns ${canHandle}`);
            if (canHandle === false) {
                return false;
            }
            const result = originalMethod.apply(this, arguments);
            return result;
        };
        return descriptor;
    };
}
exports.CanHandleLaunchRequest = CanHandleLaunchRequest;
