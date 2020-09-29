// Define variables 
const profile = document.querySelector(".gmFkV")
const interval = setInterval (() => {
const inPhoto = document.querySelector("._2dDPU")
    
    if(inPhoto){
        console.log("Photo here")
        clearInterval(interval)

        const buttonLike = document.createElement("button")
        
        buttonLike.innerHTML = "AutoLike"
        buttonLike.classList.add("AutoLikeButton")
        inPhoto.appendChild(buttonLike)        

        const nextPhoto = document.querySelector("._65Bje")
        const like = document.querySelector("article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button")

        console.log(nextPhoto)
        console.log(like)
        
        AutoLike()
    }
}, 2000)

function AutoLike(){
    buttonLike.addEventListener("click",() => {
        like.click()
        nextPhoto.click()
    })
}

console.log(profile)



// Define AutoClick for like in photos



// Create a list for followers
