let userLeft = true;
let wathcingAnotherVideo = false
function wathcingVideoPromise(){
    return new Promise( (resolve, reject) => {
        if(userLeft){
            reject({
                username: "Rosenhan ",
                message: "has left the page"
            })
        } else if(wathcingAnotherVideo){
            reject({
                username: "Rosenhan ",
                message: "is watching another video"
        })
        } else{
            resolve({
            message: "Success, user is watching this video"
            })
        }
    })
}
wathcingVideoPromise().then( (userObj) => {
    console.log(userObj.message)
}).catch( (error) => {
    console.log(error.username + error.message)
});