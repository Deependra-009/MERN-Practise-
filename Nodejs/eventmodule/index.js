const EventEmitter=require('events');

const event=new EventEmitter();

event.on('myclick',()=>
{
    console.log("hello");
});

event.emit("myclick");