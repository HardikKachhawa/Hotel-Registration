// Core Modules
const path = require('path')

// External Modules
const express = require('express')

// Local Modules
const userRouter = require('./routes/userRouter')
const {hostRouter} = require('./routes/hostRouter')
const rootPath = require('./utils/pathUtil')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded())
app.use(userRouter)
app.use("/host", hostRouter)

app.use(express.static(path.join(rootPath, 'public')))

app.use((req,res,next) => {
    res.status(404).render('404', { pageTitle: 'Page Not FOund', currentPage: '404' })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`)
})