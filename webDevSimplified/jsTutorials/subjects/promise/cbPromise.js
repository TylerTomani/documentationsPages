let userLeft = false;
let wathcingAnotherVideo = true
function wathcingVideoCallback(cb, errorCb){ 
    if(userLeft){
        errorCb({
            username: "Rosenhan ",
            message: "has left the page"
        })
    } else if(wathcingAnotherVideo){
        errorCb({
            username: "Rosenhan ",
            message: "is watching another video"
        })
    } else{
        cb({
            message: "Success, user is watching this video"
        })
    }
}
wathcingVideoCallback( (userObj) => {
    console.log(userObj.message)
}, (error) => {
    console.log(error.username + error.message)
})