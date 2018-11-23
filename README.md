[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

# aws-node-elasticache-vpc
> A set of serverless functions using elasticache (redis) within VPC

---

### Getting Started

In order to install and run this example you need an AWS accounts credentials configured with your system. To get started with AWS account configuration, please follow this [link](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

1. Clone aws-node-elasticache-vpc and install npm packages
```
git clone git@github.com:ankkho/aws-node-elasticache-vpc.git
cd aws-node-elasticache-vpc
npm install
export REGION='your-desired-aws-region' eg: 'ap-south-1'
```

*NOTE*
> Before you run `sls deploy`. Comment line number 17 and from 28-34. Else you'll get an error, since serverless try to fetch (elasticache and vpc) resources which are not currently present.

> Once deployment is done uncomment those lines and run `sls deploy` once again.

*Deploy using sls deploy*
```
sls deploy
```

### Warning
> NAT Gateway is included in CF template, but it's not included in AWS Free Tier. You will be charged for using NAT Gateway.

Instead of using NAT Gateway you can use NAT Instance. A NAT Instance allows you to use ec2 instance with NAT image provided by AWS. [Check out docs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#basics).


### Folder Structure

> functions -- contains all business logic required for a function

> handler.js -- lambda handler

> lib -- acts as middleware. You can perform following types of operations:
  schema validation, check users role (if any) etc..
