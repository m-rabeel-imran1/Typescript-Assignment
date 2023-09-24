const magicians:string[]=["arokh","lazio","bdestu"]
const greatMagicians:string[]=["The great arohkh","the great lazio","the great bdestu"]
function make_great(greatMagicians:string[]){
      console.log(...[greatMagicians])
}
make_great(greatMagicians)
function showMagicians(greatMagicians:string[]){
    for(let y=0;y<greatMagicians.length;y++)
    console.log(greatMagicians[y])
}
showMagicians(magicians)
export{}