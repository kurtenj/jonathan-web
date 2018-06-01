import React from 'react'

import Dribble from '../assets/Dribbble-color.svg'
import Linkedin from '../assets/LinkedIn-color.svg'
import Medium from '../assets/Medium-color.svg'
import Twitter from '../assets/Twitter_Logo_Blue.svg'

const IndexPage = () => (
  <div id="designBoiContent">
    <h1 className="yellingText">Howzit, I’m Jonathan</h1>
    <p>I’m a regular old <span className="pinkyBoi">design boy</span> 🎨 from <span className="wrongBoi">Cape Town</span> Portland. I’m sorta seriously into how people move around and I work with some dope folks to make <span className="blueBoi">urban mobility</span> 🚌 better. <span className="grayBois">Now and then I jot some things down, mostly about design systems and product design process. Oh yeah, I’m a coffee snob ☕ (duh), hit me up below and we’ll grab a cup.</span></p>

    <div id="fancyPantsSVG">
      <a
        href="https://dribbble.com/jonathankurten"
        rel="nofollow noopener noreferrer"
        style={{ backgroundImage: `url(${Dribble})` }}
        target="_blank"
      />
      <a
        href="https://twitter.com/jokurten"
        id="twitterSVG"
        rel="nofollow noopener noreferrer"
        style={{ backgroundImage: `url(${Twitter})` }}
        target="_blank"
      />
      <a
        href="https://medium.com/@kurtenj"
        id="mediumSVG"
        rel="nofollow noopener noreferrer"
        style={{ backgroundImage: `url(${Medium})` }}
        target="_blank"
      />
      <a
        href="https://www.linkedin.com/in/jonathankurten/"
        rel="nofollow noopener noreferrer"
        style={{ backgroundImage: `url(${Linkedin})` }}
        target="_blank"
      />
    </div>
  </div>
)

export default IndexPage
