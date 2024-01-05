
import MichaelClickHandler from "../component/michaelClick";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MichaelButton from "../component/MichaelButton";
import Header from "../component/Header";
import SkillChart from "../component/skillchart";

export default function ResumePage(){
    
    const containerStyle = {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
      };

      const tableStyle = {
        width: "100%", // Adjust the width as needed
        margin: "auto",
        textAlign: "center"
      };
    
      const rightFont ={
        textAlign: "right"
      }

      const leftFont={  
        textAlign:"left"
      }

      const middleFont={
        textAlign:"center",
        // color:"#c4c6cc"
      }
      const navigate=useNavigate();
      function onClickMichaelHandler(){
        navigate("/");
      }

    return <> 
    <Header props="resume" />
    <div style={{...containerStyle,color:"#696969"}}>
        <p style={{...middleFont,fontSize:"1.5rem",color:"#ffffff"}} className="font-size:1.5rem">Michael's Resume </p>
        <br />
        <h3 style={middleFont}>EDUCATION</h3>
       
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <td style={leftFont}>B.Sc of Computer Science</td>
                    <td style={rightFont}>2021-present</td>
                </tr>
                <tr style={leftFont}>CUHK</tr>
                <tr>
                    <td style={leftFont}>Cheung Sha Wan Catholic Secondary School</td>
                    <td style={rightFont}>2014-2020</td>
                </tr>
            </tbody>
        </table>
        <br />
        <h3 style={middleFont}>Working Experience</h3>
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <th style={leftFont}>China Merchants Securities International Company Limited(招商證券)</th>
                </tr>
                <tr>
                    <td style={leftFont}>Full Stack Developer, Fintech Intern </td>
                    <td style={rightFont}>Jan 2024-Present</td>
                </tr>
                <tr>
                <td style={leftFont}>-	Building on frontend investment component by using react.js</td>
                </tr>
                <tr>
                <td style={leftFont}>-	Utilized SQL server to manage stock price</td>
                </tr>
                <tr>
                <td style={leftFont}>-	Utilized .Net and C# to handle the connection of frontend and backend</td>
                </tr>
                
            </tbody>
        </table>
        <br />
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <th style={leftFont}>Freelance</th>
                </tr>
                <tr>
                    <td style={leftFont}>Part Time Software engineer </td>
                    <td style={rightFont}>Oct 2023-Present</td>
                </tr>
                <tr>
                <td style={leftFont}>-	build up websites for two engineering companies by using react.js</td>
                </tr>
                <tr>
                <td style={leftFont}>-	Communite with the employers of the companies and disscuss about the components of the pages</td>
                </tr>
                
            </tbody>
        </table>
        <br />
        <table style={tableStyle}>
        <tbody>
            <tr>
                <th style={leftFont}>Fortune Information Technology Ltd </th>
            </tr>
            <tr>
                <td style={leftFont}>Part Time Software Programmer </td>
                <td style={rightFont}>Oct 2023-Dec 2023</td>
            </tr>
            <tr>
            <td style={leftFont}>-	Completed backend tasks utilizing SQL</td>
            </tr>
            <tr>
            <td style={leftFont}>-	Completed Flamework tasks by using C# </td>
            </tr>
            <tr>
            <td style={leftFont}>-	Completed frontend tasks by using Vue.js.</td>
            </tr>
        </tbody>
        </table>
        <br />
        <table style={tableStyle}>
        <tbody>
            <tr>
                <th style={leftFont}>Century Lab Innovation Ltd                                                  						 </th>
            </tr>
            <tr>
                <td style={leftFont}>Software Engineer Intern </td>
                <td style={{...rightFont,color:""}}>Jun 2023-Aug 2023</td>
            </tr>
            <tr>
            <td style={leftFont}>-	Developed frontend of three web projects using React.js.</td>
            </tr>
            <tr>
            <td style={leftFont}>-	Performed comprehensive testing using Cypress </td>
            </tr>
            <tr>
            <td style={leftFont}>-	Completed backend tasks utilizing Serverless Stack (sst)</td>
            </tr>
        </tbody>
        </table>
        <br />
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <th style={leftFont}>
                    The Jockey Club Community Care    
                    </th>
                </tr>
                <tr>
                <td style={leftFont}>STEM tutor </td>
                <td style={rightFont}>Aug 2022-Sep 2022</td>
                </tr>
                <tr>
                    <td style={leftFont}>
                        -	Taught secondary students C programming and 3D printing to create items for people in need.
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <h3 style={middleFont}>Skills</h3>
        
        {/* <table >
            <tr>
                <td>React.js | </td>
                <td>Typescript | </td>
                <td>SQL |</td>
                <td>Cypress |</td>
                <td>Node.js | </td>
                <td>vue.js |</td>
                <td>python |</td>
                <td>C |</td>
                <td>C# |</td>
                <td>.NET |</td>
                <td>Java |</td>
                <td>Serverless Stack(sst) |</td>
                <td>C++ </td>
            </tr>
        </table> */}
            <SkillChart />
        <h3 style={middleFont}>Course Highlight</h3>
        
        <div>
            <table style={tableStyle}>
                <tr>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3100/">Software Engineering</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3180/">Principles of Programming Lang</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3250/">Computers and Society</a></td>
                </tr><tr>
                    <td><a href="https://www.se.cuhk.edu.hk/programmes/undergraduate-programmes/seem3490-information-systems-management/">Information Systems Management</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3130/">Formal Lang & Automata Theory</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3150/">Intro to Operating Systems</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3160/">Design & Analysis of Algo</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3170/">Intro to Database Systems</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/ceng3420/">Computer Organization & Design</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci2100/">Data Structures</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci1130/">Intro to Computing Using Java</a></td>
                    <td><a href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/engg2020/">Digital Logic and Systems</a></td>
                </tr>
            </table>
        </div>
        <br></br>
    </div>
    </>
}