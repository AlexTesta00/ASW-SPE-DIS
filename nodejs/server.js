// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware per parsare il body delle richieste JSON
app.use(express.json());

// Array di esempio per memorizzare dati
let items = [];

// API per ottenere tutti gli items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// API per aggiungere un nuovo item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// API per ottenere un item specifico tramite ID
app.get('/api/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// API per eliminare un item specifico tramite ID
app.delete('/api/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === itemId);
    if (index !== -1) {
        items.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Esporta l'app per i test
module.exports = app;

// Avvio del server solo se il file è eseguito direttamente
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}