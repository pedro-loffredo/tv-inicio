// Prova do service.js fora da TV: `node service-check.js` sai 0 se tudo certo.
var assert = require('assert');
var http = require('http');
global.tizen = { application: { launch: function (id, ok, err) {
  if (id === '3201910019365') ok(); else err({ message: 'not found' });
} } };
require('./service.js');

function get(path, cb) {
  http.get('http://127.0.0.1:8095' + path, function (r) {
    var body = ''; r.on('data', function (d) { body += d; });
    r.on('end', function () { cb(r.statusCode, body, r.headers['access-control-allow-origin']); });
  });
}
setTimeout(function () {
  get('/launch?id=3201910019365', function (s, b, cors) {
    assert.strictEqual(s, 200); assert.strictEqual(b, 'ok'); assert.strictEqual(cors, '*');
    get('/launch?id=xyz', function (s2, b2) {
      assert.strictEqual(s2, 500); assert.strictEqual(b2, 'not found');
      get('/launch?id=a;rm%20-rf', function (s3) {
        assert.strictEqual(s3, 404);
        console.log('service.js ok: abre app, repassa erro, recusa id estranho');
        process.exit(0);
      });
    });
  });
}, 200);
