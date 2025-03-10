import axios from "axios";

// Define API response structure
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

const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=3iV3nyDOscoIQDBZ_zVXhhRj-VBAoE62NNlRx8XQjjKvLxqL9BtbHNo7m4tYuLcn7jk_5rF9D-xMeOdFwPCiwbxCHwb_GVYhOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6ZQL9zg4nzErHkuFtBREH245O9-x8_AESik0EeAdGGaTK2AcpoR_CTlhzD6mry43fUpb2DILZnlvMGYFEwILfDvr7kDVOU7VuX2KnvcqMMGFZR6btdKBkCY8-paDNctvg&lib=MR_mt8Wmapn2W5zwbI-xTtMWO3py5UuMP";

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
