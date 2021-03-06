import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="port_out port1 glass"><a href="http://ascatur.com"><img src={project1} className="po1"></img></a></div>
            <div class="port_out port2 glass"><a href="http://administrativo.ascatur.com/Account/Login"><img src={project2} className="po1"></img></a></div>
            <div class="port_out port3 glass"><a href="https://github.com/mavarveg/To-do-list"><img src={project3} className="po1"></img></a></div>
            <div class="port_out port4 glass"><a href="https://mavarveg.github.io/react-gifexpertapp/"><img src={project4} className="po1"></img></a></div>
            </div>
            )
        }
    }
    
export default Portfolio
    