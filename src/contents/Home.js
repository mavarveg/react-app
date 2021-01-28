import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1>Manuel <mark>Vargas Vega</mark></h1>
            <ReactTypingEffect className="typingeffect" text={['A Full Stack Developer','MERN','Analyst']} speed={100} eraseDelay={900}/>
            <div className="hr_line glass"><div className="hr_inner"></div></div>
            <img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="Docker" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" />
<img align="left" alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    