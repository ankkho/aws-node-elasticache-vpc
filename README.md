[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

# serverless-elasticache
> A simple serverless function using elasticache (redis)

---

### Getting Started

In order to install and run this example you need an AWS accounts credentials configured with your system. To get started with AWS account configuration, please follow this [link](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

1. Clone serverless-elasticache and install npm packages
```
git clone git@github.com:ankkho/serverless-elasticache.git
cd serverless-elasticache
npm install
```

2. Deploy using sls deploy
```
sls deploy --stage <any stage> --region <your region>
```

### Folder Structure

functions -- contains all business logic required for a function

handler.js -- lambda handler

lib -- acts as middleware. You can perform following operations: schema validations, checking user roles (if any) etc..
