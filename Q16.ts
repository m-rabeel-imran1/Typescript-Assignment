const people_:string[] = ['asad','Arif','ali']
for(let x=0;x<people_.length;x++){
    console.log(`we found a bigger dinner table and invite more for dinner${people_[x]}`)
}
people_.unshift("Akmal")
people_.splice(1,0,"Adnan")
people_.push("Ahsan")
for(let x=0;x<people_.length;x++){
    console.log(`you are invited with some new people ${people_[x]}`)
}
export{}