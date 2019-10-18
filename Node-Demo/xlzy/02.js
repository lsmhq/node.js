/*****************
## 班级:6班
## 姓名:代天放
## 学号:2017011959
## 日期:2019-10-6
*****************/ 
const fs = require('fs');
const p = process.argv[2];//参数一，list & mkdir
const fileName = process.argv[3];//参数二,也就是那个folder
const log = console.log;
const err = console.error;
const dirPath = __dirname;
if(p === 'list'){
    //log(dirPath);
    //log(fs.readdirSync(dirPath));
    log(printDir(dirPath));
}else if(p === 'mkdir'){
    if(fileName === undefined){
        err('Error in fileName !');
    }else{
        if(fs.existsSync(fileName)){
            err('File is existed !');
        }
        else{
            fs.mkdirSync(fileName);
            log('Make successfully !');
        }
    }
}else{
    err('The command format is incorrect !');
}

function printDir(dirPath) {
    let fileArray = [];
    let fileJson = {};
    let i = 0;
    let stats;
    fs.readdirSync(dirPath).forEach((val)=>{
        stats = fs.statSync(val);
        if(!stats.isDirectory()){//判断文件
            fileJson = {"fileName":val,"fileSize":stats.size};
            fileArray[i] = fileJson;
            i++;
        }
    });
    return fileArray;
}