const http2 = require('http2');
const fs = require('fs');

http2
	.createSecureServer(
		{
			cert: fs.readFileSync('도메인 인증서 경로'),
			key: fs.readFileSync('도메인 비밀키 경로'),
			ca: [fs.readFileSync('상위 인증서 경로'), fs.readFileSync('상위 인증서 경로')],
		},
		(req, res) => {
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.write('<h1>Hello Node!</h1>');
			res.end('<p>Hello Server</p>');
		}
	)
	.listen(443, () => {
		console.log('443번 포트에서 서버 대기 중');
	});

//노드의 http2 모듈은 SSL 암호화 + 최신 HTTP 프로토콜인 http/2 사용 가능
//https 모듈을 http2로, createServer 메서드를 createSecureServer메서드로 바꾸면 됨.
