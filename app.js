import express from 'express';
import cors from "cors"

const app = express()

app.use(cors())

app.get('/', (request, response) => {
     response.send("Welcome to the quote server")
})

app.get('/getDailyJoke', (request, response) => {
     response.send({
        title: "Our First Quote",
        message: "Lorum Ipsum dolar emit",
        author: "Me",
     })
})

app.listen(3456, () => {
    console.log(`Server is Listening on 3456`)
})