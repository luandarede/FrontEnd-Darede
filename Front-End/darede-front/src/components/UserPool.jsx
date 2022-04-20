import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {

    UserPoolId: "us-east-1_Fc39LjwNb",
    ClientId: "1g36b2sqgdauaqc1ni5q6vel2b"
}

    export default new CognitoUserPool(poolData);