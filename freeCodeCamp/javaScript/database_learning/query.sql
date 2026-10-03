SELECT * FROM cars
WHERE year>=3
AND year IN 1200 to 1299;

WHERE color LIKE '%green%';
WHERE color NOT LIKE 'DB_';
AND year >1299;
WHERE year BETWEEN 1890 AND 1899;
WHERE condition BETWEEN 1 AND 3
AND color LIKE '%red%';
OR brand='Porche';
ORDER BY brand DESC,year;

WHERE sold IS FALSE;

LIMIT 1;

SELECT COUNT (*) total_sold AS FROM cars
    WHERE sold IS TRUE;

    //FLOOR(AVG
SELECT MAX(price) AS most_expensive FROM cars
    WHERE sold IS TRUE;

SELECT CEIL(AVG(price)) AS AVG,
    MIN(price),
    MAX(price)
FROM cars
    WHERE sold IS TRUE;


SELECT condition,COUNT (condition) FROM cars
    GROUP BY condition; 

    HAVING  count(brand)>1; //



INSERT INTO cars(
    brand,year
)VALUES(
    'BMW',2322
),(
    'ASHTON MARTIN',1121
);

UPDATE cars SET 
    sold=TRUE
WHERE brand='FORD'
AND MODEL='ESC';


DELETE FROM cars
    WHERE condition=0;