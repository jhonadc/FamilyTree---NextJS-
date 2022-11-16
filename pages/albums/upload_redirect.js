export default async function handler(req, res) {
  try {
    // some await stuff here
    res.redirect(307, '/welcome');
  } catch (err) {
    res.status(500).send({ error: 'Error while fetching data' });
  }
}
