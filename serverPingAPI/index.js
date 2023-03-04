const Express = require('express');
require('dotenv').config();

const app = Express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.status(200).json({ success: true})
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});