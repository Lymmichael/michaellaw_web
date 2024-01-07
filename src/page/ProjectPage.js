import Header from "../component/Header";
import michaelweb from "../image/影像27-12-2023 下午5.53.jpg";
import readily from "../image/影像27-12-2023 下午6.18.jpg";
import wah from "../image/影像27-12-2023 下午6.29.jpg";
import AVT from "../image/影像27-12-2023 下午6.11 2.jpg"
import csci3170pro from "../image/影像27-12-2023 下午6.51.jpg";
import stockpro from "../image/影像5-1-2024 下午11.06.jpg"
import stockpro1 from "../image/影像5-1-2024 下午11.30.jpg"
export default function ProjectPage(){
    return <div>
            <Header props="project"/>
            <table  style={{color:"#696969"}}>
                <div style={{color:"#ffffff"}}>
                    <tr>
                        <div>
                            <h2 style={{color:"#f9532d"}}>Michael personal website: Build by utilizing React.js:</h2>
                            <img src={michaelweb}
                                style={{
                                    width: '70vw', // 50% of the viewport width
                                    height: '70vh', // 25% of the viewport height
                                }}
                            ></img>
                            <p >A personal project for a website made of describing myself. </p>
                        </div>
                        <br />
                        </tr>
                    <tr>
                        <h2 style={{color:"#f9532d"}}>Readily: </h2>
                        <img src={readily}
                            style={{
                                width: '70vw', // 50% of the viewport width
                                height: '70vh', // 25% of the viewport height
                            }}>
                        </img>
                            <p>Reaily is a portal to generate reading comprehension exercises according to any articles in one click.
                            {"\n"}With more information:</p> 
                            <a  href={"https://www.readily-app.com/"}>https://www.readily-app.com/</a>
                            <p> I mainly handled frontend part of the project.</p>
                        <br />
                    </tr>
                    <tr>
                        <h2 style={{color:"#f9532d"}}>Website「華佗日誌」: </h2>
                            <img src={wah}
                                style={{
                                    width: '70vw', // 50% of the viewport width
                                    height: '70vh', // 25% of the viewport height
                                    }}>
                                </img>
                                <p> Using React Typescript and Cypress to complete the  frontend part and all the testing tasks for a website which is for Chinese medicine practitioners to store data of the patients and output prescription medical proofs.
                                {"\n"}With more information: </p>
                                <a href="https://wator-diary.com/#home">https://wator-diary.com/#home</a>
                                <p> I mainly handled frontend part and all the testing part of the project.</p>
                        <br />
                            </tr>
                            <tr>
                                    <h2 style={{color:"#f9532d"}}>AVT DESIGSN internal accounting website: </h2>
                                    <img src={AVT}
                                        style={{
                                            width: '70vw', // 50% of the viewport width
                                            height: '70vh', // 25% of the viewport height
                                        }}>
                                        </img>
                                        <p> Utilized .NET C#, Vue.js, and SQL Server to contribute to the development of the internal accounting website at AVT DESIGNS by implementing new features and resolving website issues.</p>
                        <br />
                            </tr>
                </div>
                <tr>
                    <h2 style={{color:"#f9532d"}}>Ecommerce-Analytics Website:</h2>
                    <p>Using Python to build a website for allocating the cheapest and the most accurate product in HKTV Mall by Web Scrapping.</p>
                    <br />
                </tr>
                <tr>
                    <h2 style={{color:"#f9532d"}}>Salesman’s data system: </h2>
                    <img src={csci3170pro}
                            style={{
                                width: '70vw', // 50% of the viewport width
                                height: '70vh', // 25% of the viewport height
                                }}>
                            </img>
                    <p>Using JBDC and MySQL build a system for recording all transaction details for the salespersons. </p>
                    <p>It provides different versions for different type of users that can allow them to handle data in different ways</p>
                    <br />
                </tr>
                <tr>
                    <h2 style={{color:"#f9532d"}}>Stock searching machine</h2>
                    <img src={stockpro}
                            style={{
                                width: '70vw', // 50% of the viewport width
                                height: '70vh', // 25% of the viewport height
                                }}>
                            </img>
                        <img src={stockpro1}
                            style={{
                                width: '70vw', // 50% of the viewport width
                                height: '70vh', // 25% of the viewport height
                                }}>
                            </img>
                    <p>Using Python to call APIs to reach different functions for searching stocks that meet my requirements. It will be mainly used by me as a tool and help me do analysis for making financial decisions</p>
                    <p>It is a non-complete version and I am planing to add some functions that are about scanning stocks or Crypto that meet the specific trend for short term investment.</p>
                </tr>
            </table>
            <br></br>
        </div>
}