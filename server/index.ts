export default defineEventHandler(async () => {
  const db = useDatabase();

  // Create users table
  // await db.sql`DROP TABLE IF EXISTS users`;
  await db.sql`CREATE TABLE IF NOT EXISTS relays (
    "id" TEXT PRIMARY KEY,
    "relay_id" TEXT,
    "grid_id" INTEGER,
    "total" INTEGER,
    "timestamp" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    )`;

  // Add a new user
  const id = String(Math.round(Math.random() * 10_000));
  await db.sql`INSERT INTO relays (relay_id, grid_id, total) VALUES ('123', ${id}, '1')`;

  // Query for users
  const { rows } = await db.sql`SELECT * FROM relays`;

  return {
    rows,
  };
});