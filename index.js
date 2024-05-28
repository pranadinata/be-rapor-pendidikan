
require('dotenv').config();
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json'); // Generated Swagger file
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use(express.json()); // For parsing application/json

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.APP_PORT;


// // Sample in-memory data
// let items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' }
// ];

// app.get('/items', (req, res) => {
//     res.json(items);
// });

// app.get('/items/:id', (req, res) => {
//     const item = items.find(i => i.id === parseInt(req.params.id));
//     if (!item) return res.status(404).send('Item not found');
//     res.json(item);
// });

// app.post('/items', (req, res) => {
//     const item = {
//         id: items.length + 1,
//         name: req.body.name
//     };
//     items.push(item);
//     res.status(201).json(item);
// });

// app.put('/items/:id', (req, res) => {
//     const item = items.find(i => i.id === parseInt(req.params.id));
//     if (!item) return res.status(404).send('Item not found');
//     item.name = req.body.name;
//     res.json(item);
// });

// app.delete('/items/:id', (req, res) => {
//     const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
//     if (itemIndex === -1) return res.status(404).send('Item not found');
//     items.splice(itemIndex, 1);
//     res.status(204).send();
// });
const Router = require('./routes/route.module');

app.use('/', Router);


app.listen(PORT, () => {
  console.log('server started at port', PORT);
});