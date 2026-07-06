import http from 'http';

const data = JSON.stringify({
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  subject: 'General Inquiry',
  message: 'Hello from direct test',
});

const options = {
  hostname: '127.0.0.1',
  port: 5000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  console.log('status', res.statusCode);
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('body', body);
  });
});

req.on('error', (err) => {
  console.error('request error', err.message);
});
req.write(data);
req.end();
