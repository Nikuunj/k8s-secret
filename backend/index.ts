import express from 'express'

const app = express();

console.log(process.env.DB_URL);
console.log(process.env.PORT)


app.get('/', (req, res) => {
  res.json({
    db: process.env.DB_URL,
    poer: process.env.PORT
  })
})

app.listen(process.env.PORT);

