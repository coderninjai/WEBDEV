import { PGlite } from "@electric-sql/pglite";
import fs from 'node:fs';

const db = new PGlite("./mydb");

// Create the cars table
await db.exec(`
    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        brand TEXT,
        model TEXT,
        year INTEGER,
        price INTEGER,
        fuel TEXT,
        transmission TEXT
    );

    INSERT INTO cars 
        (brand, model, year, price, fuel, transmission)
    VALUES
        ('Toyota', 'Fortuner', 2024, 4200000, 'Diesel', 'Automatic'),
        ('Mahindra', 'Thar', 2023, 1800000, 'Petrol', 'Manual'),
        ('Tata', 'Nexon', 2024, 1200000, 'Petrol', 'Manual'),
        ('Hyundai', 'Creta', 2024, 1700000, 'Diesel', 'Automatic'),
        ('Maruti', 'Swift', 2023, 850000, 'Petrol', 'Manual'),
        ('Honda', 'City', 2022, 1450000, 'Petrol', 'Automatic'),
        ('Kia', 'Seltos', 2024, 1950000, 'Diesel', 'Automatic'),
        ('BMW', '3 Series', 2023, 6200000, 'Petrol', 'Automatic'),
        ('Audi', 'A4', 2022, 5500000, 'Petrol', 'Automatic'),
        ('Tata', 'Harrier', 2023, 2400000, 'Diesel', 'Automatic');
`);

const query=fs.readFileSync('query.sql','utf8')
// Now query the database
const result = await db.query(
query);

console.clear();
console.log(result.rows);