const http = require('https');
const cheerio = require('cheerio');
const log = console.log;
const print = require('util').debuglog('crawler');
let num = 1;
const addr = 'https://space.bilibili.com/'+num;

// http.get(addr,function (res) {
//     var html = '';
//     res.on('data',function (data) {
//         html += data.toString('utf8');
//     });
//     res.on('end',() =>{
//         log(html);
//         var $ = cheerio.load(html);
//         $('body').find('#app').each(function () {
//             //print($(this).html());
//             var cName = $(this).find('.h-level').attr('lvl');
//             //var cURL = $(this).find('.card-title a').attr('href');
//             log('等级:',cName);
//             //log('URL',cURL);
//             log('');
//         });//find 查询 each 遍历
//     })
// })

var timer = setInterval(()=>{
    http.get(addr,function (res) {
        if(res.statusCode == 404){
            console.log('end');
            clearInterval(timer);
        }else{
            var html = '';
            res.on('data',function (data) {
                html += data.toString('utf8');
            });
            log(html);
            res.on('end',()=>{
                var $ = cheerio.load(html);
                var val =  $('.h-level').attr('lvl');
                log(num+":"+val);
            });
            num++;
        }
    })
    
})