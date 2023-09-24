let matchFound = false
const username:string[]=["admin","client1","client2","client3","client4","client5"]
for(let x=0;x<username.length;x++){
    if(username[x]==="admin"){
    console.log('Welcome admin,do you want status report');
    matchFound = true
    break
    }
}    
if(matchFound===false){
    console.log("Hello client,thankyou for logging in again")
}
export{};