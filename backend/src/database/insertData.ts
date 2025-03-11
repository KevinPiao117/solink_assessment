import { pool } from "./dbHelper";
import { SolcastData } from "../interfaces/solcasts";

/**
 * Inserts Solcast API data into the PostgreSQL database.
 * @param data - Array of processed Solcast API data.
 */
export async function storeData(data: SolcastData[]): Promise<void> {
    const client = await pool.connect();
    try {
        for (const entry of data) {
            await client.query(
                `INSERT INTO solcast_data 
                (period_end, latitude, longitude, air_temp, dni, ghi, relative_humidity, surface_pressure, wind_speed_10m, pv_power_rooftop_w) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
                [
                    entry.period_end,
                    entry.latitude,
                    entry.longitude,
                    entry.air_temp,
                    entry.dni,
                    entry.ghi,
                    entry.relative_humidity,
                    entry.surface_pressure,
                    entry.wind_speed_10m,
                    entry.pv_power_rooftop_w,
                ]
            );
        }
        console.log("Data successfully stored in PostgreSQL!");
    } catch (error) {
        console.error("Error inserting data into PostgreSQL:", error);
    } finally {
        client.release();
    }
}
