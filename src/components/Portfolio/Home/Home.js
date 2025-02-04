import React, { useState } from 'react';
import eduImg from "../../../images/education-diplay.jpeg";
import profileImg from "../../../images/profile_img.jpeg";
import webDevImg from "../../../images/webDev_display.jpeg";
import mobileDevImg from "../../../images/mobile_display.jpeg";
import otherImg from "../../../images/other_display.jpeg";
import bdresume from "../../../files/resume_Hansh_Raj_Sharma.pdf";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import "./Home.css";

const Home = () => {
    const displays = [
        {
            img: eduImg,
            title: "Education",
            desc: "\nSchool:\nNational Institute of Technology, Raipur\n\n Degree:\nBachlor of Technology\n\nMajor:\nMining Engineering",
            href: "/portfolio#skill"
        },
        {
            img: webDevImg,
            title: "Web Development Projects",
            desc: "Checkout the full stack web development projects that I have written in frameworks like React/Redux, Express, Node and databases like MongoDB, Firebase, etc.",
            href: "/portfolio#webprj"
        },
        {
            img: mobileDevImg,
            title: "Basic Projects",
            desc: "Checkout the development project that I have written in JavaScript.",
            href: "/portfolio#mobileprj"
        },
        {
            img: otherImg,
            title: "Machine Learning Projects",
            desc: "\n\n\n\nHere are some Machine learning projects, like customer behavior segmentation using KMeans clustering algorithm, Startups profitability prediction",
            href: "/portfolio#otherprj"
        }
    ]


    const [opt, setOpt] = useState(0);
    const [animate, setAnimate] = useState("0");


    const navBefore = () => {
        setAnimate("1")
        if (opt===0) {
            setOpt(displays.length-1)
        } else {
            setOpt(opt-1)
        }
    }

    const navNext = () => {
        setAnimate("1")
        if(opt===displays.length-1) {
            setOpt(0);
        } else {
            setOpt(opt+1);
        }
    }

    const click = (idx) => {
        setOpt(idx);
        setAnimate("1");
    }

    return (
        <div id="home" className="homeContainer">
            <div className="leftHomeContainer">
                <div className="leftContentContainer">
                    <div className="nameContainer">
                        <p className="subText top">Welcome to</p>
                        <p className="homeName">Hansh Raj Sharma<span style={{fontSize: "15px", color: "lightgray"}}> 's</span></p>
                        <p className="subText bottom">Portfolio</p>
                    </div>
                    <div className="connectContainer">
                        <img className="connectProfileImg" src={profileImg} alt="" />
                        <div className="connectInfo">
                            <div className="email">
                                <strong>email:</strong><a href="mailto:hanshrajsharmamax360@gmail.com" className="myemail">hanshrajsharmamax360@gmail.com</a>
                            </div>
                            <div className="media">
                                <a href="https://www.linkedin.com/in/hansh-raj-sharma-239854190/"><LinkedInIcon className="mediaIcon linkedIn" /></a>
                                <a href="https://github.com/Hansh-1484519"><GitHubIcon className="mediaIcon github" /></a>
                                <a className="text resume" href={bdresume}>View Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        I am a Bachlor of Technology student in National Institute of Technology Raipur.
                        I am passionate about software engineering and Machine learning.
                        I am a good team player and am familiar with software development lifecycle and agile methode of working.
                    </div>
                </div>
            </div>
            <div className="rightHomeContainer">
                <div className="rightContentContainer">
                    <img className="image" src={displays[opt].img} alt="education display" />
                    <div className="content">
                        <p className="displayTitle" animate={animate} onAnimationEnd={() => setAnimate("0")} >{displays[opt].title}</p>
                        <p className="displayDesc" animate={animate} onAnimationEnd={() => setAnimate("0")} >
                            {
                                displays[opt].desc.split("\n").map((line, idx) => (
                                    <p key={idx} className="displayDescLine" >{line}<br/></p>
                                ))
                            }
                        </p>
                    </div>
                    <a className="ref" href={displays[opt].href}>View more</a>
                    <div>
                        <NavigateBeforeIcon className="navIcon left" onClick={navBefore} />
                        <NavigateNextIcon className="navIcon right" onClick={navNext} />
                    </div>
                    <div className="bottomNav">
                        {
                            displays.map((_, idx) => (
                                opt===idx ? (
                                    <svg onClick={() => click(idx)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                                ) : (
                                    <svg onClick={() => click(idx)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
