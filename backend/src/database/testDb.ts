import { pool } from "./dbHelper";

async function testDB() {
    try {
        const result = await pool.query("SELECT NOW();");
        console.log("Successfully connected to AWS PostgreSQL:", result.rows);
    } catch (error) {
        console.error("Connection Failed:", error);
    } finally {
        pool.end();
    }
}

testDB();
