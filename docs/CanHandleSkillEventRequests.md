# @CanHandleSkillEventRequests

The @CanHandleSkillEventRequests method decorator is used on the `canHandle` method of a `RequestHandler` class.

## Usage

`@CanHandleSkillEventRequests(): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor`

This decorator accepts the following parameters:

* `@CanHandleSkillEventRequests()`


## Examples

### `@CanHandleSkillEventRequests()`
No parameters passed to the decorator.

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { CanHandleSkillEventRequests } from 'ask-community-decorators';

export class SkillEventHandler implements RequestHandler {

    @CanHandleSkillEventRequests()
    canHandle(handlerInput: HandlerInput): boolean {
        
        // original code
        return true;
    }   
}
```

is equivalent to

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';

export class SkillEventHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): boolean {

        // decorator code
        const canHandle = handlerInput.requestEnvelope.request.type.startsWith('AlexaSkillEvent.');

        if (canHandle === false) {
            return false;
        }

        // original code
        return true;
    }   
}
```
