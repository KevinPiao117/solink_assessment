CREATE TABLE solcast_data (
    id SERIAL PRIMARY KEY,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    period_end TIMESTAMP NOT NULL,
    air_temp REAL NOT NULL,
    dni REAL NOT NULL,
    ghi REAL NOT NULL,
    relative_humidity REAL NOT NULL,
    surface_pressure REAL NOT NULL,
    wind_speed_10m REAL NOT NULL,
    pv_power_rooftop_w REAL NOT NULL
);
