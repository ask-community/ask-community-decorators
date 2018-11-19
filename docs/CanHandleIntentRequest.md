# @CanHandleIntentRequest

The @CanHandleIntentRequest method decorator is used on the `canHandle` method of a `RequestHandler` class.

## Usage

`@CanHandleIntentRequest(...intentNames: string[]): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor`

This decorator accepts the following parameters:

* `@CanHandleIntentRequest()`
* `@CanHandleIntentRequest('intentName')`
* `@CanHandleIntentRequest('intentName','intentName', ...)`

## Examples

### `@CanHandleIntentRequest()`
No parameters passed to the decorator. This follows the convention where the intent name will match the name of the handler class or end with *Intent*.

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { CanHandleIntentRequest } from 'ask-community-decorators';

export class HelloWorldIntentHandler implements RequestHandler {

    @CanHandleIntentRequest()
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

export class HelloWorldIntentHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): boolean {

        // decorator code
        const possibleIntentNames = ['HelloWorldIntentHandler', 'HelloWorldIntent'];

        const canHandle = handlerInput.requestEnvelope.request.type === 'IntentRequest' 
            && (possibleIntentNames.indexOf(handlerInput.requestEnvelope.request.intent.name) > -1);

        if (canHandle === false) {
            return false;
        }

        // original code
        return true;
    }   
}
```

### `@CanHandleIntentRequest('intentName')`
A single intent name passed to the decorator.

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { CanHandleIntentRequest } from 'ask-community-decorators';

export class HelloWorldIntentHandler implements RequestHandler {

    @CanHandleIntentRequest('HelloIntent')
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

export class HelloWorldIntentHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): boolean {

        // decorator code
        const canHandle = handlerInput.requestEnvelope.request.type === 'IntentRequest' 
            && handlerInput.requestEnvelope.request.intent.name === 'HelloIntent';

        if (canHandle === false) {
            return false;
        }

        // original code
        return true;
    }   
}
```

### `@CanHandleIntentRequest('intentName', 'intentName')`
Multiple intent names passed to the decorator.

```ts
import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { CanHandleIntentRequest } from 'ask-community-decorators';

export class StopCancelIntentHandler implements RequestHandler {

    @CanHandleIntentRequest('AMAZON.CancelIntent', 'AMAZON.StopIntent')
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

export class StopCancelIntentHandler implements RequestHandler {

    canHandle(handlerInput: HandlerInput): boolean {

        // decorator code
        const possibleIntentNames = ['AMAZON.CancelIntent', 'AMAZON.StopIntent'];

        const canHandle = handlerInput.requestEnvelope.request.type === 'IntentRequest' 
            && (possibleIntentNames.indexOf(handlerInput.requestEnvelope.request.intent.name) > -1);

        if (canHandle === false) {
            return false;
        }

        // original code
        return true;
    }   
}
```