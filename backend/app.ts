import express from 'express';

const app = express();


app.get('/', (req, res) => {
    console.log('this is get reques')
        res.json('workd')

})

app.listen(3000, () => {
    console.log('listens to port 3000')
})
