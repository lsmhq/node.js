const Radio = require('./03-radio');

const station = {
    freq:'106.7',
    name:'music radio'
};
var radio = new Radio(station);

radio.on('play',(station)=>{
    console.log('FM:%s--%s opened',station.freq,station.name);
    console.log('🎵🎵🎵~');
});

radio.on('stop',(station)=>{
    console.log('close.');
});