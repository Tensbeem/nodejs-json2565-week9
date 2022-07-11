const http = require('http')
const msg = require('./message.js')
//const {loadUser}  = require('./user_models')
const {loadVnl2022} = require('./vnl2022_model')

const host = "localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    //const JsonContent = JSON.stringify(loadUser())
    const JsonContent = JSON.stringify(loadVnl2022())
    res.writeHead(200, { 'Content-Type':'text/plain' })
    //res.write(`${JsonContent }`)
    res.write(`${JsonContent}`)
    res.end()
})

server.listen(PORT, () => {
    console.log(`Strat server running at http://${host}:${PORT}`)
})