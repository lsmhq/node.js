const Dog = require('./02-dog');

var taidi = new Dog('taidi',4);
var zangao = new Dog('zangao',9);
taidi.on('bark',function(){
    console.log('%s,barked! energy:%s',taidi.getName(),taidi.getEnergy());
})

zangao.on('bark',function(){
    console.log('%s,barked! energy:%s',zangao.getName(),zangao.getEnergy());
});