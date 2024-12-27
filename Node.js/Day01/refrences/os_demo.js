const os = require("os");

// console.log(os.platform());

// console.log(os.arch());


// cpu core information
// console.log(os.cpus().length);
console.log(os.totalmem())


let obj = {
    name :" arslan",
    getmyname : function () {
        return {
            naam : this.name,
            NewName : function () {
                return "kaam kara m "
            }
        }
    }
}

let tset = obj.getmyname();
// console.log(tset);

console.log(tset.NewName());



