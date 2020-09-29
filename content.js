// Define variables 
const profile = document.querySelector(".gmFkV")
const interval = setInterval (() => {
    const inPhoto = document.querySelector("._2dDPU")
    if(inPhoto){
        console.log("Photo here")
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "AutoLike"
        button.classList.add("AutoLikeButton")
        inPhoto.appendChild(button)

        //const nextPhoto = document.querySelector("._65Bje")
        //const like = document.querySelector("article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button")
        
        button.addEventListener("click", AutoLike())
    }
}, 2000)

console.log(profile)

// Define AutoClick for like in photos
function AutoLike() {
    while(True){
        const nextPhoto = document.querySelector("._65Bje")
        const like = document.querySelector("article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button")
        like.click()
        nextPhoto.click()
    }
}

// Create a list for followers
