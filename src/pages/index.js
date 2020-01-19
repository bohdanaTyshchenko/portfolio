import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Background">

      <div className="Home" id="#Home">
      <div className="HomeText">
        <p id="name">Bohdana</p>
        <p id="lastName">Tyshchenko</p>
        <p id="description">IT Innovations and Design<br/>
        student, looking for<br/>
        co-op position.</p>
      </div>
      <div className="Photo"></div>
      <div className="Menu"></div>
    </div>

    <div className="About" id="About"> 
      <div className="Decor1"></div>
      <div className="Decor2"></div>
      <div className="Decor3"></div>
      <h1>About me</h1>
      <p><b>Hi, my name is Bohdana, nice to meet you!</b><br/>
I’m a current student of Conestoga College(Waterloo, ON). I've always<br/> been drawn to the overlap between design and development. I have a<br/> great intereset in UI/UX design, Web design and Front-end<br/> development. 
As a result of my program courses and self-study, I got<br/> experience in producing creative designs for mobile applications and<br/> web pages for a diverse client base. 
I am also passionate about<br/> building websites and bringing my designs to life.<br/>
I’m only at the beginning of my career path, but I have a huge desire<br/> to become a successful professional in my field.<br/>
Nowadays, I keep learning, continue challenging myself<br/> 
and doing interesting things that matter.</p>
    </div>
    
    <div className="Links" id="Links">
    <h1>Links</h1>
      <div className="Logos">
        <a href="https://dribbble.com/bg_grier"><img src={require('../images/dribbble.svg')} width="120"></img><p>Dribbble</p></a>
        <a href="https://github.com/bohdanaTyshchenko"><img src={require('../images/github.svg')} width="120"></img><p>GitHub</p></a>
        <a href="https://www.linkedin.com/in/bohdana-tyshchenko/"><img src={require('../images/linkedin.svg')} width="120"></img><p>LinkedIn</p></a>
        <a href=""><img src={require('../images/resume.svg')} width="120"></img><p>Resume</p></a>
        <a href="https://codepen.io/btyshchenko"><img src={require('../images/codepen.svg')} width="120"></img><p>CodePen</p></a>
        <a href="https://www.behance.net/bgtyshchenko"><img src={require('../images/behance.svg')} width="120"></img><p>Behance</p></a>
      </div>
    </div>

    <div className="ContactMe" id="ContactMe">
      <div className="Info">
        <h1>Contact<br/> Me</h1>
        <p>Email:<br/><a href="mailto:btyshchenko1417@conestogac.on.ca">btyshchenko1417@conestogac.on.ca</a></p>
        <p>Phone:<br/>+1 (519) 573 1062</p>
      </div>
      <hr></hr>
    <p id="copyRight">Bohdana Tyshchenko &copy; 2020</p>
    </div>
    </div>

  </div>
)

export default IndexPage
