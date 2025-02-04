import React from 'react';
import brainIcon from '../../../images/brain_icon.png';
import bkgImage from "../../../images/background_image.png";
import html from "../../../images/badge/html.png";
import css from "../../../images/badge/css.png";
import java from "../../../images/badge/java.png";
import javascript from "../../../images/badge/javascript.png";
import typescript from "../../../images/badge/typescript.png";
import python from "../../../images/badge/python.png";
// import c from "../../images/badge/c";
import sql from "../../../images/badge/database.png";
import react from "../../../images/badge/react.png";
import node from "../../../images/badge/node.png";
import express from "../../../images/badge/express.svg";
import sqlite from "../../../images/badge/sqlite.png";
import mongodb from "../../../images/badge/mongodb.png";
import postgresql from "../../../images/badge/postgresql.png";
import firebase from "../../../images/badge/firebase.png";
import androidstudio from "../../../images/badge/androidstudio.png";
import figma from "../../../images/badge/figma.png";
import lucidchart from "../../../images/badge/lucidchart.png";
import numpy from "../../../images/badge/numpy.svg";
import dnn from "../../../images/badge/dnn.png";
import cpp from "../../../images/badge/cpp.png";
import "./Skill.css";

const Skill = () => {
    const languages = [
        {
            title: "Programming Language",
            list: [
                {name: "HTML", badge: html, nameColor: "orange"},
                {name: "CSS", badge: css},
                {name: "JavaScript", badge: javascript, nameColor: "#d9c548"},
                {name: "TypeScript", badge: typescript},
                {name: "Python", badge: python},
                {name: "C++", badge: cpp, badgeColor: "lightgray", nameColor: "#555"},
                {name: "Node.js", badge: java, badgeColor: "lightgray", nameColor: "#ff6363"},
                {name: "SQL", badge: sql, badgeColor: "lightgray"},
            ],
        },
        {
            title: "Spoken Language",
            list: [
                {name: "English", textColor: "black"},
                {name: "Hindi", textColor: "black"},
            ]
        } 
    ]

    const toolsFrameworks = [
        {
            title: "Web Development",
            list : [
                {name: "JavaScript", badge: javascript, nameColor: "#4fd6cf"},
                {name: "React", badge: react, nameColor: "#ff6363"},
                {name: "Node", badge: node, badgeColor: "lightgray"},
                {name: "Express", badge: express, badgeColor: "beige", nameColor: "#52a854"},
            ],
        },
        {
            title: "Database",
            list: [
                {name: "SQLite", badge: sqlite, badgeColor: "lightgray"},
                {name: "MongoDB", badge: mongodb, nameColor: "#52a854"},
                {name: "PostgreSQL", badge: postgresql},
                {name: "Firebase", badge: firebase, nameColor: "orange"},
            ]
        },
        {
            title: "Mobile Development",
            list: [
                {name: "-", badge: androidstudio}
            ],
        },
        {
            title: "UI/UX Design",
            list: [
                {name: "Figma", badge: figma, badgeColor: "lightgray", nameColor: "purple"},
                {name: "Lucidchart", badge: lucidchart, badgeColor: "lightgray", nameColor: "orange"},
            ]
        }
    ]

    const others = [
        {
            title: "Project Management Method",
            list: [
                {name: "Agile", textColor: "black"},
                {name: "Scrum", textColor: "black"},
                {name: "-", textColor: "black"},
            ],
        },
        {
            title: "Machine Learning",
            list: [
                {name: "supervised learning techniques", badge: sql, badgeColor: "lightgray", nameColor: "#cf5600"},
                {name: "Unsupervised learning techniques", badge: numpy},
                {name: "-", badge: dnn, badgeColor: "lightgray", nameColor: "#00c8ff"}
            ],
        },
        {
            title: "Relevant Coursework",
            list: [
                {name: "SDLC", textColor: "black"},
                {name: "Machine Learning", textColor: "black"},
                {name: "Data Structures and Algorithm", textColor: "black"},
                {name: "Database Management", textColor: "black"},
                {name: "Web Technology", textColor: "black"},
                {name: "Calculus", textColor: "black"},
                {name: "Differential Equations", textColor: "black"},
            ]
        }
    ]


    return (
        <div id="skill" className="skillContainer">
            <div className="headerContainer">
                <div className="header">
                    <img className="headerIcon" src={brainIcon} alt="" />
                    <p className="headerTitle" >Skill</p>
                </div>
                <div className="divider"></div>
                <div className="contentContainer">
                     <img className="backgroundImg" src={bkgImage} alt="" /> 
                     <div className="contentSkill">
                         <div className="content__left">
                            <div className="colTitle">LANGUAGES</div>
                            {
                                languages.map((lanType, idx) => (
                                    <>
                                        <p key={idx} className="colSubTitle">{lanType.title}</p>
                                        {
                                            lanType.list.map((entry, i) => (
                                                <div className="badge">
                                                    {
                                                        entry.badge && <img className="skillbadge" style={entry.badgeColor && {backgroundColor: entry.badgeColor}} src={entry.badge && entry.badge} alt="" />
                                                    }
                                                    <p key={i} style={entry.textColor ? {backgroundColor: "transparent", color: entry.textColor} : {backgroundColor: entry.nameColor}} className="skillEntry">{entry.name}</p>
                                                </div>
                                            ))
                                        }<br></br>
                                    </>
                                ))
                            }
                         </div>
                         <div className="content__mid">
                            <div className="colTitle">TOOLS/FRAMEWORKS</div>
                            {
                                toolsFrameworks.map((subType, idx) => (
                                    <>
                                        <p key={idx} className="colSubTitle">{subType.title}</p>
                                        {
                                            subType.list.map((entry, i) => (
                                                <div className="badge">
                                                    {
                                                        entry.badge && <img className="skillbadge" style={entry.badgeColor && {backgroundColor: entry.badgeColor}} src={entry.badge && entry.badge} alt="" />
                                                    }
                                                    <p key={i} style={entry.textColor ? {backgroundColor: "transparent", color: entry.textColor} : {backgroundColor: entry.nameColor}} className="skillEntry">{entry.name}</p>
                                                </div>
                                            ))
                                        }<br></br>
                                    </>
                                ))
                            }
                         </div>
                         <div className="content__right">
                            <div className="colTitle">OTHERS</div>
                            {
                                others.map((subType, idx) => (
                                    <>
                                        <p key={idx} className="colSubTitle">{subType.title}</p>
                                        {
                                            subType.list.map((entry, i) => (
                                                <div className="badge">
                                                    {
                                                        entry.badge && <img className="skillbadge" style={entry.badgeColor && {backgroundColor: entry.badgeColor}} src={entry.badge && entry.badge} alt="" />
                                                    }
                                                    <p key={i} style={entry.textColor ? {backgroundColor: "transparent", color: entry.textColor} : {backgroundColor: entry.nameColor}} className="skillEntry">{entry.name}</p>
                                                </div>
                                            ))
                                        }<br></br>
                                    </>
                                ))
                            }
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
