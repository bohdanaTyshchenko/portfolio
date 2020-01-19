import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component{

  constructor(props)
  {
    super(props);

    this.state={
      hasScrolled:false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageXOffset;

    if(scrollTop>50){
      this.setState({ hasScrolled:false})
    }
    else{
      this.setState({hasScrolled:true})
      
    }
    
     
  }
  render()
  {
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup" id="Menu">
          <Link className="Head" to="#">BohDana</Link>
          <Link className="White" to="#Home">Home</Link>
          <Link className="White" to="#About">About</Link>
          <Link className="Black" to="#Links">Links</Link>
          <Link className="Black" to="#ContactMe">Contact me</Link>
        </div>
      </div>
    )
  }
}

export default Header
