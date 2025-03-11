import axios from "axios";
import dotenv from "dotenv";
import { SolcastApiResponse } from "../interfaces/solcasts";
import { Location } from "../interfaces/solcasts";

dotenv.config();

// check if connection string exists
if (!process.env.SOLCAST_API_URL) {
    throw new Error("Missing environment variable: SOLCAST_API_URL");
}
const apiUrl = process.env.SOLCAST_API_URL;

/**
 * Fetch data from Solcast API
 */
export async function fetchSolcastData(location: Location): Promise<SolcastApiResponse[] | null> {
    try {
        const response = await axios.get(apiUrl);
        // api returns {debugInfo:''. data:[{}, {}]}
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
