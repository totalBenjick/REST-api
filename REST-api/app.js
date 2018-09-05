const http = require('http');
const fs = require('fs');
const ABSOLUTE_INDEX_HTML_FILE =`${__dirname}/index.html`;

function handleRequest(request, response) {
	const indexFile = fs.readFileSync(ABSOLUTE_INDEX_HTML_FILE);

	response.write(indexFile);
	response.writeHead(200,{ "Content-Type" : "text/html" });
}

const server = http.createServer(handleRequest);

server.listen( 3000, function(){

	const msg =  chalk.green('Native Node Server running on PORT: 3000');

	console.log(msg);

});
















