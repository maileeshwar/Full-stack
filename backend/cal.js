const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer((req, res) => {

    const num1 = 4;
    const num2 = 8;

    const add = num1 + num2;
    const sub = num1 - num2;
    const mul = num1 * num2;
    const div = num1 / num2;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end(
        `Number 1 = ${num1}\n` +
        `Number 2 = ${num2}\n\n` +
        `Addition = ${add}\n` +
        `Subtraction = ${sub}\n` +
        `Multiplication = ${mul}\n` +
        `Division = ${div}`
    );
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});