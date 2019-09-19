#!/usr/bin/node
const log = console.log;

var dt = {
  "name":"代天放",
  "qq":"784433957",
  "age":21

}
log('Name:%s',dt.name);
log("age:%d",dt.age)

log('%j',dt)
log('Name',dt.name)
log('Age is $(dt.age)')


