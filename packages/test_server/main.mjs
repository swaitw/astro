import express from 'express';
import { handler as ssrHandler } from '../web_app/dist/server/entry.mjs';

const app = express();
app.use(express.static('../web_app/dist/client/'));
console.log(ssrHandler, 'ssrHandler');
app.use((req, res, next) => {
	
	const content = ssrHandler(req, res, next);
	console.log(content, 'content');
});

app.listen(8080, () => {
	  console.log('Listening on port 8080');
});
