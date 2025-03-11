#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as dotenv from "dotenv"
import { SolcastLambdaStack } from '../lib/aws-stack';

dotenv.config();

const app = new cdk.App();
new SolcastLambdaStack(app, "SolcastLambdaStack", {
  env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
  },
});


