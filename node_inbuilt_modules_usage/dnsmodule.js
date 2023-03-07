// 4.DNS: It is used to perform operations like lookup and resolve on domain names.It translate domain address to IP Address.
const dns = require('dns');
var searchh = dns.lookup('gtco.com', function (err, addresses, family) {
      console.log(addresses);
});