
export interface Location {
    latitude: number;
    longitude: number;
}

// API response structure
export interface SolcastApiResponse {
    period_end: string;              // Timestamp in ISO format
    air_temp: number;                // Air temperature (°C)
    dni: number;                     // Direct Normal Irradiance (W/m²)
    ghi: number;                     // Global Horizontal Irradiance (W/m²)
    relative_humidity: number;        // Relative humidity (%)
    surface_pressure: number;         // Surface pressure (hPa)
    wind_speed_10m: number;           // Wind speed at 10m height (m/s)
    pv_power_rooftop: number;         // PV power generation (kW)
}

// Database structure
export interface SolcastData extends Location, SolcastApiResponse{
    pv_power_rooftop_w: number;
}