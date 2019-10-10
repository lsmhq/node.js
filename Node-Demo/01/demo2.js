var http = require('http');
http.createServer(function(req,res){
  res.end('hello world');
    }).listen(8080);
    console.log('Server is running!');




//     server{
//          listen 80;
//          server_name www.1459.top;
//          location / {
//            proxy_pass http://localhost:8005;
//            proxy_set_header Host $host;
//               proxy_set_header X-Real-IP $remote_addr;}

//               }



// server {
//      listen       443 ssl;
//      server_name  www.1459.top;
//      root         /usr/share/nginx/html;
//      ssl_certificate "/home/suzewang/2824924_suhuijun.1459.top.pem";
//      ssl_certificate_key "/home/suzewang/2824924_suhuijun.1459.top.key";
//      ssl_session_cache shared:SSL:1m;
//      ssl_session_timeout  5m;
//      ssl_ciphers HIGH:!aNULL:!MD5;
//      ssl_prefer_server_ciphers on;
 
//  # Load configuration files for the default server block.
//      include /etc/nginx/default.d/*.conf;
//      location / {
//      proxy_pass http://localhost:8005;
//      proxy_set_header Host $host;
//      proxy_set_header X-Real-IP $remote_addr;
//      }
//  error_page 404 /404.html;
//  location = /40x.html {
//  }
//  error_page 500 502 503 504 /50x.html;                                                                                                                                                                                                           location = /50x.    html {
//  }
// ； }