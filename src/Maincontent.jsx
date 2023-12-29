import React from "react"

function Maincontent() {

   //const [memeImage , setMemeimage] = React.useState("http://i.imgflip.com/1bij.jpg")


   const [meme,setMeme] =React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
   } ) 


   const [allMeme,setAllMeme] = React.useState([])

    

function getMemeImage() {
    

    //const memeArray = allMeme
    const random = Math.floor(Math.random() * allMeme.length)

    const url = allMeme[random].url

    setMeme( prevMeme => ({
        ...prevMeme,
        randomImage : url
    }))

    console.log(setAllMeme)

    

    
} 

function handleChange(event) {
    const {name , value} = event.target 

    setMeme(preMeme => ({
        ...preMeme,
        [name] : value
    }))
}

React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes))
, []})

    


    return <div>

        <div className="form">
            <form action="">
                <input 
                type="text"
                 placeholder="Top text"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
                 />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} />
            </form>
            <button className="button" onClick={getMemeImage}>Get a new meme image</button>
        </div>
       
        <div className="meme">
            <img src={meme.randomImage} alt="meme" className="meme-image" />
            <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
           
            
        </div>
    </div>
}



export default Maincontent



