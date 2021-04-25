const path=require('path');

console.log(path.dirname('/home/deependra/CODE/VS CODE/Nodejs/pathmodule.js'));

console.log(path.extname('/home/deependra/CODE/VS CODE/Nodejs/pathmodule.js'));

console.log(path.basename('/home/deependra/CODE/VS CODE/Nodejs/pathmodule.js'));

const a=path.parse("/home/deependra/CODE/VS CODE/Nodejs/pathmodule.js");
console.log(a.name);