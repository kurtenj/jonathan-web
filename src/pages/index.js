import React from 'react'
import Bus from '../assets/Bus.svg';
import Tree from '../assets/Tree.svg';
import Paint from '../assets/Paint.svg';

import Dribble from '../assets/Dribbble-color.svg'
import Linkedin from '../assets/LinkedIn-color.svg'
import Medium from '../assets/Medium-color.svg'
import Twitter from '../assets/Twitter_Logo_Blue.svg'

const IndexPage = () => (
  <div id="designBoiContent">
    <h1 className="yellingText">Howzit, I’m Jonathan</h1>
    <p>I’m a regular old <span className="pinkyBoi">design boy</span>&nbsp;&nbsp;<img className="emojiSVG" src={Paint} />&nbsp;
      from <span className="wrongBoi">Cape Town</span> Portland <img className="emojiSVG" src={Tree} />.
      I’m sorta seriously into how people move around and I work
      with some dope folks to make <span className="blueBoi">urban mobility</span>&nbsp;&nbsp;<img className="emojiSVG" src={Bus} /> better.
      &nbsp;<span className="grayBois">Now and then I jot some things down, mostly about design
      systems and product design process. Oh yeah, I’m a coffee
      snob (duh), hit me up below and we’ll grab a cup.</span></p>
    <div id="fancyPantsSVG">
      <a href="https://dribbble.com/jonathankurten" style={{backgroundImage:`url(${Dribble})`}} />
      <a id="twitterSVG" href="https://twitter.com/jokurten" style={{backgroundImage:`url(${Twitter})`}} />
      <a id="mediumSVG" href="https://medium.com/@kurtenj" style={{backgroundImage:`url(${Medium})`}} />
      <a href="https://www.linkedin.com/in/jonathankurten/" style={{backgroundImage:`url(${Linkedin})`}} />
    </div>
  </div>
)

export default IndexPage
