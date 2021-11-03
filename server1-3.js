const https = require('https');
const fs = require('fs');

https
	.createServer(
		{
			cert: fs.readFileSync('도메인 인증서 경로'),
			key: fs.readFileSync('도메인 비밀키 경로'),
			ca: [fs.readFileSync('상위 인증서 경로'), fs.readFileSync('상위 인증서 경로')],
		},
		(req, res) => {
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.write('<h1>Hello Server!</p>');
		}
	)
	.listen(443, () => {
		console.log('443번 포트에서 서버 대기 중');
	});
//https 모듈로 웹 서버에 SSL 암호화 추가하기
//원래는 인증서를 발급 받아야하지만 도메인 필요, 복잡하기 때문에 스킵
