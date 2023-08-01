import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/hello', (req, resp) => {
  console.log('test-service ip', req.ip);
  console.log('test-service ip', req.header('x-forwarded-for'));
  console.log('test-service body', req.body);
  console.log('test-service body', JSON.stringify(req.headers));

  resp.send(
    JSON.stringify({
      body: req.body,
      headers: req.headers,
      ip: req.ip
    })
  );
});

const port = 3010;

app.listen(port, () => {
  console.log('server started on port ' + port);
});
