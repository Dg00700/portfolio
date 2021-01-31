import React from "react";
import { SvgIcon, Typography } from "@material-ui/core";
import "./Skill.scss";
import { Element } from "react-scroll";

import skillList from "../../utils/skill-list";
import python from '../../utils/images/icons8-python-96.png';
import java from '../../utils/images/icons8-java-96.png';
import javascript from '../../utils/images/icons8-javascript-96.png';
import mysql from '../../utils/images/icons8-mysql-logo-100.png';
import react from '../../utils/images/icons8-react-native-96.png';
import html from '../../utils/images/icons8-html-5-96.png';
import css from '../../utils/images/icons8-css-filetype-100.png';
import git from '../../utils/images/icons8-git-100.png';

export default function Skill({ skill }) {
  return (
    <div id="skills">
                <h1 id="skill-main"> Skills</h1>

                <div className="skill-col">
                    <div className="skill-row">
                        <img src={html} alt="html" />
                        <h4>HTML</h4>
                    </div>

                    <div className="skill-row">
                        <img src={css} alt="css" />
                        <h4>CSS</h4>
                    </div>

                    <div className="skill-row">
                        <img src={javascript} alt="javascript" />
                        <h4>Javascript</h4>
                    </div>

                    <div className="skill-row">
                        <img src={java} alt="java" />
                        <h4>Java</h4>
                    </div>

                    <div className="skill-row">
                        <img src={python} alt="python" />
                        <h4>Python</h4>
                    </div>

                    <div className="skill-row">
                        <img src={mysql} alt="mysql" />
                        <h4>SQL</h4>
                    </div>

                    <div className="skill-row">
                        <img src={react} alt="react" />
                        <h4>React</h4>
                    </div>

                    <div className="skill-row">
                    <img src={git} alt="git" />
                    <h4>Git</h4>
                </div>
                </div>


            </div>


  );
}


// import React from "react";
// import { SvgIcon, Typography } from "@material-ui/core";
// import "./Skill.css";
// import { Element } from "react-scroll";

// import skillList from "../../utils/skill-list";

// export default function Skill({ skill }) {
//   return (
//     <React.Fragment>
//       <Typography
//         variant="h2"
//         display="block"
//         align="center"
//         style={{
//           margin: "1rem",
//           fontSize: "1.6rem",
//           textTransform: "uppercase",
//           fontFamily: '"Bungee", cursive'
//         }}
//       >
//         <Element name="skill">Skills</Element>
//       </Typography>
//       <div className="skill-container">
//         {skillList.map((skill, i) => (
//           <div className="skill-img" key={i}>
//             <SvgIcon
//               titleAccess={skill.name}
//               style={{ width: "auto", height: "100%" }}
//               className="svg-icon"
//               viewBox="0 0 24 24"
//               color="primary"
//             >
//               <path d={skill.svgPath} />
//             </SvgIcon>
//           </div>
//         ))}
//       </div>
//     </React.Fragment>
//   );
// }
