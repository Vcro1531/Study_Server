const http = require('http');

http
	.createServer((req, res) => {
		console.log(req.url, req.headers.cookie);
		res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
		res.end('Hello Cookie');
	}) //서버에서 직접 쿠키를 만들어 요청자의 브라우저에 넣는 작업
	.listen(8083, () => {
		console.log('8083번 포트에서 서버 대기 중');
	});
