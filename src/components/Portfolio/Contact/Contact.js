import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import bdresume from "../../../files/resume_Hansh_Raj_Sharma.pdf";

const Contact = () => {
    return (
        <div id="contact" style={{backgroundColor: "#f5f5f5", width: "100%", display: "flex", flexDirection: "column", marginTop: "90px"}}>
            <div className="headerContainer">
                <div className="header" style={{marginTop: "-30px", marginBottom: "30px"}}>
                    <p className="headerTitle" >Contact</p>
                    <p> New </p>
                </div>
                {/* <div className="divider" style={{zIndex: "100"}}></div> */}
            </div>
            <div className="connectInfo" style={{alignSelf: "center"}}>
                <div className="email">
                <strong>email:</strong><a href="mailto:hanshrajsharmamax360@gmail.com" className="myemail">hanshrajsharmamax360@gmail.com</a>
                </div>
                <div className="media">
                    <a href="https://www.linkedin.com/in/hansh-raj-sharma-239854190/"><LinkedInIcon className="mediaIcon linkedIn" /></a>
                    <a href="https://github.com/Hansh-1484519"><GitHubIcon className="mediaIcon github" /></a>
                    <a className="text resume" href={bdresume}>View Resume</a>
                </div>
            </div>
            <footer>
                <p style={{fontWeight: 600, fontFamily: "'Quattrocento', serif", marginBottom: "-3px", width: "100%"}}>© 2022 Hansh Raj Sharma</p>
            </footer>
        </div>
    )
}

export default Contact;
