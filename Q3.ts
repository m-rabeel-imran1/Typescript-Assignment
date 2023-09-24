let myname : string = "Muhammad Rabeel Imran"
console.log(myname.toUpperCase())
console.log(myname.toLowerCase())
function titleCase(_name:string){
let _name_;
     _name_ = _name.toLowerCase().split(" ")
    for (let x = 0 ; x <_name_.length;x++){
        _name_[x] = _name_[x].charAt(0).toUpperCase() + _name_[x].slice(1);
    }
    return _name_.join(" ")

}
console.log(titleCase("MUHAMMAD RABEEL IMRAN"))

