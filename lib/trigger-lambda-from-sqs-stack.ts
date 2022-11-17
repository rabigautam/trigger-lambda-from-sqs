import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as lambda from "@aws-cdk/aws-lambda";
export class TriggerLambdaFromSqsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TriggerLambdaFromSqsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const queue = new sqs.Queue(this, "TriggerSQSQueue", {
      queueName: "TestSQSQueue"
    });
    const lambdaFunction = new lambda.Function(this, "Function", {
      code: lambda.Code.fromAsset("src"),
      handler: "index.handler",
      functionName: "SqsMessageHandler",
      runtime: lambda.Runtime.NODEJS_12_X
    });
    
  }
}
