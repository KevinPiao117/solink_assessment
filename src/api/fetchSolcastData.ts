import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export interface SolcastData {
    period_end: string;              // Timestamp in ISO format
    air_temp: number;                // Air temperature (°C)
    dni: number;                     // Direct Normal Irradiance (W/m²)
    ghi: number;                     // Global Horizontal Irradiance (W/m²)
    relative_humidity: number;        // Relative humidity (%)
    surface_pressure: number;         // Surface pressure (hPa)
    wind_speed_10m: number;           // Wind speed at 10m height (m/s)
    pv_power_rooftop: number;         // PV power generation (kW)
}

if (!process.env.SOLCAST_API_URL) {
    throw new Error("Missing environment variable: SOLCAST_API_URL");
}
const apiUrl = process.env.SOLCAST_API_URL;

/**
 * Fetch data from Solcast API
 */
export async function fetchSolcastData(): Promise<SolcastData[] | null> {
    try {
        const response = await axios.get<SolcastData[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
