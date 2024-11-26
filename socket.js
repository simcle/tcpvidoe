const {io} = require('socket.io-client')

const socket = io('https://apigps.ndpteknologi.com')

socket.on('connect', () => {
    console.log(socket.id)
    socket.emit('progress', 'tesdata')
})
let value = 0;
let total = 0;
let percentage = 0

exports.start =  (t, v) => {
    total = t 
    value = v
}

exports.update = (v) => {
    value = v
    percentage = (value * 100) / total
    socket.emit('progress', `${parseInt(percentage)}%`)
}

exports.stop = () => {
    value = 0
    total = 0
    percentage = 0
}

exports.done = (file) => {
    socket.emit('done', file)
}