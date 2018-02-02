# lambda-node: Lambda aws helper


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
const {invoke} = require('lambda-node')

invoke('lambdaName:prod:Event',{data:'is here'})
    .then((response) => {
        // response is the Payload parsed
    })
    .catch(error => {
        // error could be the error in request or LogResult if there is FunctionError
    })

```
