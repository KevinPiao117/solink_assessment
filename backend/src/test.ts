import { handler } from "./solcastLambda";  // ✅ Import Lambda function

const event = {
    queryStringParameters: { param1: "test" },
};

handler()
    .then((response) => console.log("Lambda Response:", response))
    .catch((error) => console.error("Error:", error));
