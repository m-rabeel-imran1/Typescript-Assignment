const people_:string[] = ['asad','ahmad','ali']
console.log("ahmad")
people_.splice(1,1,"Arif")
for(let x=0;x<people_.length;x++){
    console.log(`you are invited to dinner ${people_[x]}`)
}