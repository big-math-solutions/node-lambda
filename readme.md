# lambdifying: Lambda aws helper


# Invoke(name,Payload,LogType) -> Promise

The name must a string in format:

'FunctionName:Qualifier:InvocationType'

'FunctionName:Qualifier'

'FunctionName:InvocationType'

'FunctionName'


The default values to InvocationType is RequestResponse,
$LATEST to Qualifier and Tail to LogType.
## Usage

```js
const {invoke} = require('lambdifying')

invoke('lambdaName:prod:Event',{data:'is here'})
    .then((response) => {
        // response is the Payload parsed
    })
    .catch(error => {
        // error could be the error in request or LogResult if there is FunctionError
    })

invoke('lambdaName:prod',{data:'is here with RequestResponse as InvocationType'})
    .then((response) => {
        // response is the Payload parsed
    })
    .catch(error => {
        // error could be the error in request or LogResult if there is FunctionError
    })

invoke('lambdaName',{data:'is here with RequestResponse as InvocationType and Qualifier as $LATEST'})
    .then((response) => {
        // response is the Payload parsed
    })
    .catch(error => {
        // error could be the error in request or LogResult if there is FunctionError
    })

```
