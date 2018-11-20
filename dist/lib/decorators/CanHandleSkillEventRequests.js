"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CanHandleSkillEventRequests() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (handlerInput) {
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
    };
}
exports.CanHandleSkillEventRequests = CanHandleSkillEventRequests;
