import { SolcastApiResponse } from "../interfaces/Solcast";
import { SolcastData } from "../interfaces/Solcast";
import { Location } from "../interfaces/Solcast";

/**
 * Convert kW to W and process Solcast data.
 * @param data - Array of Solcast API data.
 * @returns Processed data with `pv_power_rooftop` in Watts.
 */
export function processSolcastData(data: SolcastApiResponse[], location: Location): SolcastData[] {
    console.log(typeof data)
    return data.map(entry => ({
            ...entry,
            latitude: location.latitude,
            longitude: location.longitude,
            pv_power_rooftop_w: entry.pv_power_rooftop * 1000, // Convert kW to W
        }));
}

/**
 * Validate an entry to ensure required fields are present.
 * @param entry - Single Solcast data entry.
 * @returns `true` if valid, `false` otherwise.
 */
function validateEntry(entry: SolcastApiResponse): boolean {
    return (
        typeof entry.period_end === "string" &&
        typeof entry.air_temp === "number" &&
        typeof entry.dni === "number" &&
        typeof entry.ghi === "number" &&
        typeof entry.relative_humidity === "number" &&
        typeof entry.surface_pressure === "number" &&
        typeof entry.wind_speed_10m === "number" &&
        typeof entry.pv_power_rooftop === "number"
    );
}
