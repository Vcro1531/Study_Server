const http = require('http');
const fs = require('fs').promises;

http
	.createServer(async (req, res) => {
		try {
			const data = await fs.readFile('./server2.html');
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.end(data);
		} catch (err) {
			console.error(err);
			res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end(err.message);
		}
	})
	.listen(8081, () => {
		console.log('8081번 포트에서 서버 대기 중');
	});

//요청이 들어오면 fs모듈로 HTML파일을 읽음
//요청 처리 과정 중 에러가 발생했다고 응답을 보내지 않으면 클라이언트는 응답을 기다리다 Timeout처리 하기 때문에 무조건 보내야됨
