import Header from "../component/Header";
export default function AboutMe(){
    
    return <>
    <Header props="aboutMe"/>
    <div style={{ fontSize: '20px' }}>
        <table style={{ color: "#696969", width: "50%", margin: "auto", textAlign: "center" }}>
        
            <h4>Greetings, tech enthusiasts and curious minds,</h4>
            <br />
            <h4>
            Hello, I'm Law Yat Ming, a Year 3 Computer Science student at The Chinese University of Hong Kong. From an early age, I've been captivated by the power of technology and its ability to transform the way we live and work. As I delved deeper into the world of programming and software development, I discovered the endless possibilities it offers to create innovative solutions that can make a meaningful impact.
            <br /><br />
My journey in computer science has been a thrilling adventure, filled with challenges that have honed my problem-solving skills and ignited my creativity. I am drawn to the dynamic nature of software development, where every line of code represents an opportunity to bring ideas to life and shape the future.
<br /><br />
As I look ahead, my goal is to become a software developer who not only writes code but also crafts elegant and efficient solutions that enhance the way we interact with technology. I am driven by the desire to contribute to cutting-edge projects, collaborate with diverse teams, and continuously expand my knowledge to stay at the forefront of technological advancements.
            <br /><br />
I am excited about the endless possibilities that lie ahead and am eager to embark on this journey to make a meaningful impact through software development.
</h4><br /> 
            <h4>Sincerely,</h4>
            <h4>Law Yat Ming</h4>
        </table>
        
        <br />
{/* 
        <p>This is the "beat" I design! It just so good!!</p>
        <video style={{
                width: '50vw', // 50% of the viewport width
                height: '50vh', // 25% of the viewport height
            }}
        src={demBeat}
        type="video/mp4"
        controls>
        </video>
        <p style={{ color: '#808080' }}>These pictures are token when I was child! So cute right?</p>
        <image>
        <img src={child1}
            style={{
                width: '20vw', // 50% of the viewport width
                height: '50vh', // 25% of the viewport height
            }} ></img>
            <p></p>
        <img src={child2}
            style={{
                width: '20vw', // 50% of the viewport width
                height: '50vh', // 25% of the viewport height
                transform: "rotate(270deg)"
            }} ></img>
        <p></p>
        <img src={child3}
            style={{
                width: '20vw', // 50% of the viewport width
                height: '50vh', // 25% of the viewport height
                transform: "rotate(270deg)"
            }} >
        </img>
        </image> */}
    </div>
    <div></div>
    </>
}
