# @CanHandleLaunchRequest

The @CanHandleLaunchRequest method decorator is used on the `canHandle` method of a `RequestHandler` class.

## Usage

`@CanHandleLaunchRequest(): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor`

This decorator accepts the following parameters:

* `@CanHandleLaunchRequest()`


## Examples

### `@CanHandleLaunchRequest()`
No parameters passed to the decorator.

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { CanHandleLaunchRequest } from 'ask-community-decorators';

export class LaunchRequestHandler implements RequestHandler {

    @CanHandleLaunchRequest()
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

export class LaunchRequestHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): boolean {

        // decorator code
        const canHandle = handlerInput.requestEnvelope.request.type === 'LaunchRequest';

        if (canHandle === false) {
            return false;
        }

        // original code
        return true;
    }   
}
```
