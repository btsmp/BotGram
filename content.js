// Define variables 
const profile = document.querySelector(".gmFkV")
const interval = setInterval (() => {
const inPhoto = document.querySelector("._2dDPU")
    
    if(inPhoto){
        console.log("Photo here")
        clearInterval(interval)

        const nextPhoto = document.querySelector("._65Bje")
        const like = document.querySelector(`aria-label="Like"`)

        console.log(nextPhoto)
        console.log(like)

        const buttonLike = document.createElement("button")
        buttonLike.innerHTML = "AutoLike"
        buttonLike.classList.add("AutoLikeButton")
        inPhoto.appendChild(buttonLike)
        buttonLike.addEventListener("click", AutoLike())     
    }
}, 2000)



console.log(profile)



// Define AutoClick for like in photos

function AutoLike(){
    like.click()
    nextPhoto.click()
}

// Create a list for followers
