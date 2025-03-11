# Solcast Lambda Function 

## Test the deployed Lambda Function
This lambda function has a public URL
"https://o2wq72vn7xl4enwrbzyxladmz40mnkzz.lambda-url.us-east-2.on.aws/"
This can be tested by clicking the link or via `curl`:
```sh
curl -X GET https://o2wq72vn7xl4enwrbzyxladmz40mnkzz.lambda-url.us-east-2.on.aws/
```

## Setup local version
### 1. clone the repository

### 2. install dependencies
navigate to backend folder
```
cd backend
npm install
```
### 3. setup PostgreSQL
This can be done locally or through AWS RDS

### 4. setup environmental variables
create a .env file in backend folder that contains the following variables
```
SOLCAST_API_URL=api_url
DB_PASSWORD=database_password
DB_HOST=database_host
DB_NAME=database_name
DB_PORT=database_port
```

### 5. run the lambda function
running the lambda function directly with typescript
```
npx ts-node src/solcastLambda.ts
```
note: running locally will not repeat the process every 60 minute

