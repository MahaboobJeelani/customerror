// const express = require('express')
// // const CustomError = require('./CustomError')
// const errorHandler = require('./ErrorMiddleware')

// const app = express()

// let getUser = () => undefined

// app.get('/', (req, resp, next) => {
//     try {
//         let user = getUser()

//         if (!user) {
//             throw new Error('Invalid Age')
//         }
//     } catch (error) {
//         // resp.send(error.message)
//         return next(error)
//     }
// })


// app.use(errorHandler)

// app.listen(8081, () => {
//     console.log('Server is running on the port 8081');
// })



const express = require('express')
const CustomError = require('./CustomError')

const app = express()

app.get('/', (req, resp) => {
    try {
        throw new CustomError("Error Occured")
    } catch (error) {
        resp.send(error.message)
    }
})

app.listen(8081, () => {
    console.log('Server is running on the port 8081');
})