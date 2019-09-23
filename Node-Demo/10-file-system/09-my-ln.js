const fs = require('fs');



switch(process.argv.length){
    case 4:{
        //硬链接
        var src = process.argv[2];
        var lnk = process.argv[3];
        fs.linkSync(src,lnk);
        break;
    }
    case 5:{
        //符号链接
        var opt = process.argv[2];
        var src = process.argv[3];
        var lnk = process.argv[4];
        if(opt !== '-s')errMsg();
        fs.symlinkSync(src,lnk);
        break;
    }
    default:{
        errMsg();
    }
}

function errMsg(){
    console.log('ERR:命令语法不正确！');
}
