# @CanHandleSessionEndedRequest

The @CanHandleSessionEndedRequest method decorator is used on the `canHandle` method of a `RequestHandler` class.

## Usage

`@CanHandleSessionEndedRequest(): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor`

This decorator accepts the following parameters:

* `@CanHandleSessionEndedRequest()`


## Examples

### `@CanHandleSessionEndedRequest()`
No parameters passed to the decorator.

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { CanHandleSessionEndedRequest } from 'ask-community-decorators';

export class SessionEndedRequestHandler implements RequestHandler {

    @CanHandleSessionEndedRequest()
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

export class SessionEndedRequestHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): boolean {

        // decorator code
        const canHandle = handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';

        if (canHandle === false) {
            return false;
        }

        // original code
        return true;
    }   
}
```
