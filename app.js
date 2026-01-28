import express from 'express';
import cors from "cors"

class Quote{
     /**
      * 
      * @param {string} message 
      * @param {string} author 
      * @param {string | undefined} title 
      */
     constructor(message, author, title) {
          this.message = message
          this.author = author
          this.title = title
     }
}

let items = [
     new Quote("city boy", "Me", undefined),

     new Quote("Sigma", "Me", undefined),

     new Quote("Ohio", "Me", undefined),

     new Quote("6-7", "Me", undefined)

]

const app = express()

app.use(cors())

app.get('/', (request, response) => {
     response.send("Welcome to the quote server")
})

app.get('/getDailyJoke', (request, response) => {
     let randomQuote = items[Math.floor(Math.random() * items.length - 1)]
     response.send({
        title: randomQuote.title,
        message: randomQuote.message,
        author: randomQuote.author,
     })
})

app.listen(3456, () => {
    console.log(`Server is Listening on 3456`)
})