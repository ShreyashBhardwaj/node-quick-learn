console.log("Hello World");

console.log(process.platform)
console.log(process.env.USER);

process.on('exit',function(){
    console.log(
        "EXIT"
    )
})


console.log(global.luckyNum)
global.luckyNum=23
console.log(global.luckyNum);



const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch',()=>{
    console.log("YUM")
})

eventEmitter.emit('lunch')
eventEmitter.emit("lunch");




// File System

const {readFile,readFileSync} = require('fs')

readFile("./hello.txt", "utf-8", (err, txt) => {
  console.log(txt, ' Using ReadFILE');
});

const txt = readFileSync('./hello.txt','utf-8')
console.log(txt)


console.log('do this ASAP')

