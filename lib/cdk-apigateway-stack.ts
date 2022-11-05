
import {
  Stack,
  StackProps,
  aws_apigateway as apigateway,
  aws_lambda_nodejs as lambda,
} from "aws-cdk-lib"
import { Construct } from "constructs"

export class CdkApigatewayStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Lambda 関数（GET books/ 用）
    const getIdolsHandler = new lambda.NodejsFunction(this, "getBooksHandler", {
      entry: "lambda/idols.ts",
      handler: "getIdolsHandler",
    })

    // Lambda 関数（GET books/{id} 用）
    const getIdolHandler = new lambda.NodejsFunction(this, "getBookHandler", {
      entry: "lambda/idols.ts",
      handler: "getIdolHandler",
    })

    const api = new apigateway.RestApi(this, "IdolApi")

    const idols = api.root.addResource("idols")
    idols.addMethod("GET", new apigateway.LambdaIntegration(getIdolsHandler))

    const singleIdol = idols.addResource("{id}")
    singleIdol.addMethod("GET", new apigateway.LambdaIntegration(getIdolHandler))
  }
}
