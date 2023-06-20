# AWS CDK で API Gateway の REST API を作成する

https://maku.blog/p/k7eoer5/

### command

#### create cdk v1 to v2
> npx aws-cdk@2.x init app --language typescript

#### immigrate v2
https://docs.aws.amazon.com/cdk/v2/guide/migrating-v2.html

#### make a cdk project (la ts)
> cdk init app --language typescript

#### develop lambda function (la ts)
> npm install --save-dev @types/aws-lambda

### error memo

```
Error: spawnSync docker ENOENT
 at Object.spawnSync (node:internal/child_process:1083:20)
    at Object.spawnSync (node:child_process:812:24)
    at dockerExec
...
```

#### resolve process
> npm install --save-dev esbuild@0

# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

#### Endopoint

https://kz1j17qwp9.execute-api.ap-northeast-1.amazonaws.com/prod/

> https://kz1j17qwp9.execute-api.ap-northeast-1.amazonaws.com/prod/idols/1