import { fetchSolcastData } from "./api/fetchSolcastData";

async function main() {
    console.log("Fetching Solcast Data...");
    
    const data = await fetchSolcastData();

    if (data) {
        console.log("Data Fetched Successfully:", data);
    } else {
        console.error("Failed to fetch Solcast data.");
    }
}

// Execute the function
main().catch(console.error);
