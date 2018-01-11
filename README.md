[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

# aws-node-elasticache-redis
> A set of serverless functions using elasticache (redis) within VPC

---

### Getting Started

In order to install and run this example you need an AWS accounts credentials configured with your system. To get started with AWS account configuration, please follow this [link](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

1. Clone aws-node-elasticache-redis and install npm packages
```
git clone git@github.com:ankkho/aws-node-elasticache-redis.git
cd aws-node-elasticache-redis
npm install
export REGION='your-desired-aws-region' eg: 'ap-south-1'
```

> Comment from line number 17 to 24. Else you'll get an error, since serverless tires to fetch those resources which are not been present yet.

> Once you run `sls deploy`, then uncomment those lines and run `sls deploy` once again.

*Deploy using sls deploy*
```
sls deploy --stage <any stage> --region <your region>
```

### Folder Structure

functions -- contains all business logic required for a function

handler.js -- lambda handler

lib -- acts as middleware. You can perform following operations: schema validations, checking user roles (if any) etc..
