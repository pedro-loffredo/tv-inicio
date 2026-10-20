// Serviço do módulo "Início", roda dentro do serviço Node do TizenBrew na TV.
// A página do módulo vive em http://127.0.0.1:8081 e lá a TV não injeta o objeto `tizen`,
// então ela pede aqui para abrir os apps. ES5 de propósito: o Node da TV é antigo.
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (q.pathname === '/ping') return res.end('ok');
  if (q.pathname !== '/launch' || !/^[\w.]+$/.test(q.query.id || '')) { res.statusCode = 404; return res.end(); }
  try {
    tizen.application.launch(q.query.id,
      function () { res.end('ok'); },
      function (e) { res.statusCode = 500; res.end(String(e && e.message)); });
  } catch (e) {
    res.statusCode = 500; res.end(String(e && e.message || e));
  }
});
// porta ocupada = o serviço de uma abertura anterior já está atendendo
server.on('error', function () {});
server.listen(8095, '127.0.0.1');
