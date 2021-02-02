import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Manuel<mark className="mark2">VArgas Vega</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10">Systems Engineer with 9+ years of experience in software development 
            with high levels of productivity, scalability, and maintainability. Good skills in agile practices, 
            Scrum, Empathy, Collective properties, Initiative to hangout with the team, Research, proactive and a team player.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>UNED</h4>
            <p className="p1">Degree Web Application Development</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2016 - 2018</p>
            <h4>UCR</h4>
            <p className="p1"> Bachellor Degree in Bussiness Computer’s Science</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2008 - 2011</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">ReactJs</div>
            <div class="sk s5 glass">NodeJs</div>
            <div class="sk s6 glass">Scrum</div>
            <div class="sk glass">Typescript</div>
            <div class="sk s2 glass">Docker</div>
            </div>
            )
        }
    }
    
export default About
    