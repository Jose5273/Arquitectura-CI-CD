const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    mensaje: 'Backend funcionando. Ve a /api/saludo' 
  });
});

app.get('/api/saludo', (req, res) => {
  res.json({ 
    mensaje: '¡Hola desde el backend profesional en Node.js!',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Backend escuchando en puerto ${port}`);
});