const express = require('express')

const app = express()

app.use(express.static('Public')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/Expense/index.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/Public/Expense/signup.html')
})

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/Public/Expense/signin.html')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})