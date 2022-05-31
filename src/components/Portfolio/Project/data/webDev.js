import fgtb_desktopDemo from "../../../../images/project/fgtb_desktopDemo.gif";
import fgtb_mobileDemo from "../../../../images/project/fgtb_mobileDemo.gif";
import awswebDemo from "../../../../images/project/awsweb.gif";

export const wbprjData = [
    {
        id: 1,
        name: "React_blog",
        github: "https://github.com/Hansh-1484519/react_blog_site_UI",
        website: "",
        desc: "This is Full Stack MERN CRUD Project that allows users to share blog posts. It enables feature like posting and updating daily posts with pictures, texts, and tags as well as exploration of other's posts.",
        desktopGif: fgtb_desktopDemo,
        mobileGif: "",
        features: [
            "Login/Signup",
            "Upload images",
            "Sharing images/texts/tags",
            "Updating previously shared posts",
            "Author may see the number of post (only visible to the author who post it)",
            "Save personal images/texts/tags (will not be shared in Home)",
            "Posts Grid",
        ],
        techs: [
            "JavaScript",
            "React",
            "material-ui",
            "react-router-dom",
            "react-redux",
            "jwt-decode",
            "jsonwebtoken",
            "bcryptjs",
            "mongoose",
            "express",
        ]
    },
    {
        id: 2,
        name: "smart_notes",
        github: "https://hansh-1484519.github.io/smart_notes/",
        website: "https://hansh-1484519.github.io/smart_notes/",
        desc: "It's a cool note taking app. It has full CRUD functionality to create a note, to modify the notes at any sessions. It uses only local storage to do all these task.",
        desktopGif: "",
        mobileGif: "",
        features: [
            "Notes Creation",
            "Notes Updation",
            "Local Storage for notes saving",
            "Notes Deletion",
        ],
        techs: [
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },
    {
        id: 3,
        name: "Awesome-website",
        github: "https://hansh-1484519.github.io/Awesome_Projects/#",
        website: "",
        desc: "Learning the code, by doing and figuring out challenges, solving problems is the main part of your programming journey. Just do it !! and so this simple webpage is designed to practice Html and css skills",
        desktopGif: awswebDemo,
        mobileGif: "",
        features: [
            "Responsive layout",
            "Card design",
            "Single page layout",
            "Simplistic design",
        ],
        techs: [
            "JavaScript",
            "HTML",
            "CSS"
        ]
    }
]