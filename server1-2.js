const http = require('http');

http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.write('<h1>Hello Node!</h1>');
		res.end('<p>Hello Server!</p>');
	})
	.listen(8080, () => {
		//서버 연결
		console.log('8080번 포트에서 서버 대기 중');
	});

http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.write('<h1>Hello Node!</h1>');
		res.end('<p>Hello Server!</p>');
	})
	.listen(8081, () => {
		//서버 연결
		console.log('8081번 포트에서 서버 대기 중');
	});

//한 번에 여러 서버 실행하기
//createServer를 원하는 만큼 호출하면 됨
//포트 번호가 같으면 안됨
