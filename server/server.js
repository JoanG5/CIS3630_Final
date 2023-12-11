import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());

app.post('/api/games', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      req.body,
      {
        headers: {
          'Client-ID': '5r20ib2nzaf729r6upuna02mx28rt8',
          Authorization: 'Bearer 9uv4sl0ooauvju470jwwotbl8fkwt4',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
