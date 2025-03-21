import { fetchSolcastData } from "./api/fetchSolcastData";
import { processSolcastData } from "./utils/processData";
import { storeData } from "./database/insertData";

/**
 * AWS Lambda Handler
 */
export async function handler(): Promise<{ statusCode: number; body: string }> {

    const location = { latitude: -33.856784, longitude: 151.215297 };
    try {
        // Fetching Data step
        console.log("Fetching Solcast data...");
        const apiResponseData = await fetchSolcastData(location);
        if (!apiResponseData || apiResponseData.length === 0) {
            console.error("No data fetched. Exiting...");
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "No data fetched from Solcast." }),
            };
        }
        console.log("Data fetched successfully!");
        console.log(typeof apiResponseData)
        // Processing step

        console.log("Processing data...");
        const processedData = processSolcastData(apiResponseData, location);
        console.log("Data finished processing")
        
        // Storing step
        console.log("Storing data in PostgreSQL...");
        await storeData(processedData);
        console.log("Data processing and storage complete!");
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Success! Data processed and stored." }),
        };
    } catch (error) {
        console.error("Error in Lambda function:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", error}),
        };
    }
}

if (require.main === module) {
    handler()
        .then(response => console.log("Lambda Response:", response))
        .catch(error => console.error("Lambda Error:", error));
}