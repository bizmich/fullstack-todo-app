import express from 'express';

const app = express();

app.get('/', (req, res) => {
   res.json('boook')
})

app.listen(3000, () => {
    console.log('listens to port 300');
});
    