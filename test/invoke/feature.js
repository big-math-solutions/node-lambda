const assert = require('assert');


module.exports = {
    getStub:(dataToAssert, ToReturn, errors = {}) => ({
        'aws-sdk': {
            Lambda: class {
                invoke(data) {
                    const { error, FunctionError, LogResult } = errors;
                    assert.deepEqual(dataToAssert, data);
                    return {
                        promise:() => error ?
                            Promise.reject(error) :
                            Promise.resolve({
                                Payload:JSON.stringify(ToReturn),
                                FunctionError,
                                LogResult
                            })
                    };
                }
            }
        }
    })
};
