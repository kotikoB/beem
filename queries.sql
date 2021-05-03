-- Create the query to list the top 3 orders and from which
-- campaign it has been bought and by which user. This will help reduce the cost of campaigns and increase revenue.

SELECT 
        o.order_id
        ,u.name
        ,c.campaign_name
    FROM orders o
    INNER JOIN users u on u.user_id = o.user_id
    LEFT JOIN campaigns c on c.campaign_id = u.campaign_id
    ORDER BY o.value desc
    LIMIT 3;

SELECT c.campaign_name
    ,sum(o.total) as Revenue
    FROM campaigns c
    INNER JOIN users u on u.campaign_id = c.campaign_id
    LEFT JOIN orders o on o.user_id = u.user_id
    ORDER BY Revenue DESC
    LIMIT 3;