export default defineEventHandler(async event => {
  const db = useDatabase();

  const {rows} = await db.sql`SELECT * FROM relays where relay_id = '49ba4c'`;
  console.log(rows);
  return rows;
})
