const oldUsername:string[]=["Ali","Ahmad","Asad","Arif","Agha"]
const newUsernames:string[]=["Akmal","Agha","Danish","Faisal","Ahmad"]
for(let x=0;x<oldUsername.length;x++){
    for(let y=0;y<newUsernames.length;y++)
    if(oldUsername[x]==(newUsernames[y])){
        console.log("Change your username")
    }else{
        console.log("username is available")
    }
}