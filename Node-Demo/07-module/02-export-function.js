function circle(r){
    
    function area(){
        return Math.PI*r*r;
    }
    function circumference(){
        return 2*Math.PI*r;
    }
    return{
        area:area,
        circumference:circumference
    }
}

//console.dir(module);
module.exports = circle;