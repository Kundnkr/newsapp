import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from "react-router-dom";


export class NavBar extends Component {

  // static defaultProps = {
  //   country : "in",
  //   category : "general"
  // }
  // static propTypes = {
  //   country : PropTypes.string,
  //   category : PropTypes.string
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-danger" to="/"><strong><span style={{color : "white"}}>Aaj</span><i>तक</i></strong></Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className= {`nav-link ${this.props.Active}`}><Link className='nav-link' to="/">Home</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/business">Business</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/entertainment">Entertainment</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/general">General</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/health">Health</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/science">Science</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/sports">Sports</Link></li>
            <li className= {`nav-link ${this.props.active}`}><Link className='nav-link' to="/technology">Technology</Link></li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    )
  }
}

export default NavBar