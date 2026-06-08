const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
	console.log("Got a request to /")

	response.status(200).send('Hello World!');
});

app.listen(PORT, function(err) {
    if (err) {
		console.log("Error in server setup")
	}

    console.log("Server listening on Port", PORT);
})