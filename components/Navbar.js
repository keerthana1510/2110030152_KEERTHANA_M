import React, { Component } from 'react'
import  {Link} from "react-router-dom";
export class Navbar extends Component {
  render() {
    let {toggleMode ,mode} = this.props
    return (
    <div>
         <nav className={`navbar k navbar-expand-lg navbar-${mode}`} style={{color : mode ==='dark' ? 'white' : 'black', backgroundColor : mode ==='dark' ? '#8899ac' : '#BFBFBF'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/business">NewFast</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/business">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    {/* <li>
                        <select class="form-select form-select-lg mx-5" aria-label=".form-select-sm example"  onClick={this.props.handleCategory}>
                          <option value="business">business</option>
                          <option value="entertainment">entertainment</option>
                          <option value="general">general</option>
                          <option value="health">health</option>
                          <option value="science">science</option>
                          <option value="sports">sports</option>
                          <option value="technology">technology</option>
                        </select>
                    </li> */}
                    <li>
                        <div className="dropdown mx-3  mb-2 "  >
                            <button className="btn " style={{color : mode ==='dark' ? 'white' : 'black'}} type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                              Category <span style={{fontSize: 20}}>⌄</span>
                            </button>
                            
                            
                            <ul className="dropdown-menu">
                              <li><Link className="dropdown-item"  to="/business">Business</Link></li>
                              <li><Link className="dropdown-item"  to="/entertainment">Entertainment</Link></li>
                              <li><Link className="dropdown-item"  to="/general">General</Link></li>
                              <li><Link className="dropdown-item"  to="/health">Health</Link></li>
                              <li><Link className="dropdown-item"  to="/science">Science</Link></li>
                              <li><Link className="dropdown-item"  to="/sports">Sports</Link></li>
                              <li><Link className="dropdown-item"  to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </li>

                </ul>
                
               
                </div>
            </div>
            
            <div className="form-check form-switch mx-5">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode === 'dark' ? 'Day' : 'Night'}</label>
            </div>
        </nav>
    </div>
    )
  }
}

export default Navbar
