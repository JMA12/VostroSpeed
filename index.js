const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 3012;

const server = http.createServer()

const file_path = path.resolve(__dirname, 'assets/sampleFile.mp4')

console.log("file_path: ", file_path)
const file = fs.createReadStream(file_path)

server.on('request', (req, res) => {
    console.log('req: ', req.url)
    if (req.url === '/checkDownloadSpeed' && req.method === "GET") {
        res.setHeader("Content-Disposition", "attachment")
        file.pipe(res)
    } else {
        res.end("HEY!")
    }
})



server.listen(port, hostname, () => {
    console.log(`\nServer listening at http://${hostname}:${port}`)
})