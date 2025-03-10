import { fetchSolcastData } from "./api/fetchSolcastData";
import { processSolcastData } from "./utils/process_data";
import { storeData } from "./database/insert_data";
import { Location } from "./interfaces/Solcast";



async function main(location: Location): Promise<void> {
    try {
        // Fetching Data step
        console.log("Fetching Solcast data...");
        const apiResponseData = await fetchSolcastData(location);
        if (!apiResponseData || apiResponseData.length === 0) {
            console.error("No data fetched. Exiting...");
            return;
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
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

const location = { latitude: -33.856784, longitude: 151.215297 };
main(location).catch(console.error);
