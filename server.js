const http = require('http');
const port = process.env.PORT || 8000;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<button type='button' data-qa='button'>Button</button><br /><input type='text' data-qa='textinput'></input>");
    res.end();
}).listen(port, () => {
    console.log(`App is running on port ${port}`);
});

