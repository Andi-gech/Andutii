import "../App.css";
import prof1 from "../Assets/pic5.png";
import prof2 from "../Assets/pic2.jpg";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaShare,
  FaShareAltSquare,
  FaSun,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { delay, motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import TypewriterComponent from "typewriter-effect";
import code from "../Assets/code.png";
import Balls from "./Balls";
import { Line } from "rc-progress";
import online from "../Assets/online.png";
import game from "../Assets/gamingdashboard.png";
import mobileapp from "../Assets/mobileapp.png";
import Ecomerce from "../Assets/ecommmerce.png";
import react from "../Assets/react.jpg";
import js from "../Assets/js.png";
import css from "../Assets/css.png";
import html from "../Assets/html.jpg";
import git from "../Assets/git.jpg";
import django from "../Assets/django.jpg";
import c from "../Assets/c.jpg";
import ProjectCard from "./ProjectCard";
import FeedbackCards from "./feedbackcards";
function MobileBody() {
  const [message, setmessage] = useState("");

  const [data, setdata] = useState([
    {
      name: "Andi",
      message:
        "   Your portfolio exudes professionalism and expertise. The exceptional quality of your work and polished presentation leave a lasting impression.",
    },
    {
      name: "baya",
      message: " Your portfolio exudes professionalism and expertise",
    },
    {
      name: "baya",
      message: " Your portfolio exudes professionalism and expertise",
    },
  ]);
  const Handlesubmit = () => {
    setdata([...data, { name: "unkown", message: message }]);
  };
  return (
    <div className="MobileBody" onLoadStart={() => console.log("start")}>
      <motion.div
        whileInView={{ rotate: [0, 200, 0] }}
        transition={{
          duration: 5,
        }}
        className="mobilebackgroundcolor"
      ></motion.div>
      <motion.div
        transition={{
          duration: 5,
        }}
        whileInView={{ rotate: [0, 100, 0] }}
        className="mobilebackgroundcolors"
      ></motion.div>
      <motion.div
        transition={{
          duration: 5,
        }}
        whileInView={{ rotate: [0, -400, 0] }}
        className="mobilebackgroundcolorf"
      ></motion.div>
      <div className="MobileBodyImage">
        <img src={prof1} />
      </div>
      <div className="text-name">
        <h1>ANDUALEM GETACHEW</h1>
        <h2>
          <Typewriter
            id="typemobiles"
            options={{
              loop: true,
              delay: 190,
              deleteSpeed: 100,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString("<span id='typemobiles'>Fullstack Dev</span>")

                .pauseFor(3000)
                .deleteAll()
                .typeString("<span id='typemobilesorange'>Web-Design </span>")
                .pauseFor(3000)
                .deleteAll()
                .typeString("<span id='typemobilespink'>Mobile-app dev</span>")
                .pauseFor(3000)
                .start();
            }}
          />
        </h2>

        <a href="https://download1487.mediafire.com/jnh1wgihixkgO1DxJOrdRQZGWfSsrddws3EW7KjLJEWgWpOAGx36As_BpvC7VkKE4TRv8UYL9LxJddlaCpVyjIAjPEmp0huiP-nx305bIzALWu2CjlqHvmAvRUSkdWv1JaP-WakAaJR2IuSVyL4fFh9ZO6vAU2e-3YUA8TackiM9CW0/fc00i6uqqwtltwx/Resume.pdf">
          <button>Download Cv</button>
        </a>
      </div>
      <div className="Mobileskill"></div>
      <div className="Mobileskillcontent">
        <h2>Skills</h2>
        <div className="BAllslist">
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
              drag
              dragConstraints={{
                left: 50,
                right: 50,
                top: 50,
                bottom: 50,
              }}
            >
              <Balls name={css} />
            </motion.div>
            <Line
              id="line"
              percent={50}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
            >
              <Balls name={c} />
            </motion.div>
            <Line
              id="line"
              percent={60}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
            >
              <Balls name={html} />
            </motion.div>
            <Line
              id="line"
              percent={90}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
            >
              <Balls name={django} />
            </motion.div>
            <Line
              id="line"
              percent={70}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
            >
              <Balls name={js} />
            </motion.div>
            <Line
              id="line"
              percent={50}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
            >
              <Balls name={react} />
            </motion.div>
            <Line
              id="line"
              percent={50}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
          <div className="ballwithpercent">
            <motion.div
              className="ballbutton"
              whileInView={{ rotate: [0, 200, 0] }}
            >
              <Balls name={git} />
            </motion.div>
            <Line
              id="line"
              percent={60}
              strokeWidth={1}
              trailColor="rgba(0, 0, 0, 0.13)"
              strokeColor="black"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="ActiveHourmobile"
        style={{
          backgroundImage: `url(${prof2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

          marginTop: 30,
        }}
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="blackcovermobile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>
            DREAM IT WISH IT
            <br /> DO IT!!
          </p>
        </div>
      </motion.div>
      <div className="topimage">
        <img src={code} />
      </div>
      <div className="mobileaboutme">
        <h2>About Me</h2>
        <p>
          {" "}
          Hi Again i am Andi Computer Sience Enginering student at defence
          Enginnering college and also software enginnering student Alx online
          class.and taken several courses at Corsera Meta Backend development. I
          am Honest And Reliable ,known with my clean code
        </p>
        <p>Thank you For visiting my website</p>
      </div>
      <div className="Projects">
        <div className="Text">
          <h1>Project</h1>
        </div>
        <div className="cardlist">
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2 }}
          >
            <ProjectCard
              name={"Gamming Dashboard"}
              images={game}
              description={"only front end design using react"}
              link={"https://gamersbook.pages.dev/"}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <ProjectCard
              name={"Online Learning web"}
              images={online}
              description={
                "The online learning app built with React and Django is a robust and user-friendly platform designed to provide educational content and facilitate online learning experiences"
              }
              link={"https://qene-app.pages.dev"}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <ProjectCard
              name={"Ecomerce web"}
              images={Ecomerce}
              description={
                "The eCommerce app built with React and Django is a powerful and modern web application designed to facilitate online buying and selling of goods"
              }
              link={"https://ecomerceapp.pages.dev/"}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <ProjectCard
              name={"Orthodox-Mezmur"}
              images={mobileapp}
              description={
                "Orthodox Mezmurs is a captivating church song app tailored specifically for Orthodox Christian congregations, developed using React Native"
              }
              link={"https://www.Github.com"}
            />
          </motion.div>
        </div>
      </div>
      <div className="Userfeedback">
        <div>
          <h1>Userfeedback</h1>
        </div>
      </div>
      {data?.map((dataiem, index) => (
        <div className="mobileCard-Lists" key={index}>
          <motion.div
            className="mobilecard"
            whileInView={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 1, delay: index / 10 }}
          >
            <FeedbackCards name={dataiem.name} message={dataiem.message} />
          </motion.div>
        </div>
      ))}

      <div className="Share_Your_Thought">
        <div className="share">
          <textarea
            style={{ width: 300 }}
            placeholder="Write your review here..."
            rows={6}
            cols={43}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button type="submit" onClick={Handlesubmit}>
            <FaShare />
          </button>
        </div>
      </div>
      <div className="contactus">
        <h2>Contact-ME</h2>
        <div className="Socialmedia">
          <div className="SocialmediacardsList">
            <div className="Socialcard">
              <a href="https://www.facebook.com/anduti724" target="_blank">
                <FaFacebook size={30} />
              </a>
            </div>
            <div className="Socialcard">
              <a href="https://www.tiktok.com/@andutii1" target="_blank">
                <FaTiktok size={30} />
              </a>
            </div>
            <div className="Socialcard">
              <a href="https://github.com/Andi-gech" target="_blank">
                <FaGithub size={30} />
              </a>
            </div>
            <div className="Socialcard">
              <a href="https://www.instagram.com/anduti724/">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBody;
