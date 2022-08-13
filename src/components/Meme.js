import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage(){
        const memesArray = allMemeImages.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray [randomNumber].url
        setMeme (prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(url)
    }



    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form__input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form__input"
                />
                <button 
                    className="form__button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src= {meme.randomImage} className = "meme__Image" alt="" />
        </main>
    )
}