import React from 'react'
import RegisterForm from './Register/RegisterForm'

const navLinks = [
    { url: '/about-us', name: 'About Us' },
    { url: '/projects', name: 'Projects' },
    { url: '/services', name: 'Services' },
    { url: '/contact-us', name: 'Contact Us' },
  ];
  
  export default class SidePanel extends React.Component {  
    
    render() {
      return (      
        <div>
        
          <div className={this.props.style}>               
           <h1 onClick={this.props.onClick}>X</h1>
           <RegisterForm />
          </div>
        </div>
      );
    }
  }
  