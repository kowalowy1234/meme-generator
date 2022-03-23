import React, {useState} from 'react';

function Meme() {

    const [meme, setMemeImage] = useState({
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setMemeData] = useState([])

    function generateMeme(){
      const randomImageURL = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url
      setMemeImage(prevMemeImage => {
        return {
          ...prevMemeImage,
          randomImage: randomImageURL
        }
      })
  }

  function handleChange(event){
    const {name, value} = event.target
    setMemeImage(prevMemeImage => ({
      ...prevMemeImage,
      [name]:value
    }))
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setMemeData(data.data.memes))
  }, [])

  console.log(allMemeImages)

  return(
    <section>
      <div>
        <input 
          type='text' 
          placeholder='Top text' 
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input 
          type='text' 
          placeholder='Bottom text' 
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button id='generate' onClick={generateMeme}>Get a new meme image 🖼</button>
      </div>
      <div className='meme-wrapper'>
        <img src={meme.randomImage} alt='' />
            <h2 className="meme--text top" >{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}

export default Meme;