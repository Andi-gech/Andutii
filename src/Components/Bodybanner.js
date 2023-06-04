import "../App.css";
import logo from "../Assets/pic5.png";
import prof1 from "../Assets/pic1.jpg";
import react from "../Assets/react.jpg";
import js from "../Assets/js.png";
import css from "../Assets/css.png";
import html from "../Assets/html.jpg";
import git from "../Assets/git.jpg";
import django from "../Assets/django.jpg";
import c from "../Assets/c.jpg";
import online from "../Assets/online.png";
import game from "../Assets/gamingdashboard.png";
import mobileapp from "../Assets/mobileapp.png";
import Ecomerce from "../Assets/ecommmerce.png";
import code from "../Assets/code.png";
import { delay, motion } from "framer-motion";
import Balls from "./Balls";
import ProjectCard from "./ProjectCard";
import FeedbackCards from "./feedbackcards";
import { useRef, useState } from "react";
import { Line, Circle } from "rc-progress";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaShare,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

function Bodybanner() {
  const [message, setmessage] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 724px)" });

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
  if (!isTabletOrMobile) {
    return (
      <div className="Bodybanner">
        <div className="bodytop">
          <motion.div
            transition={{
              duration: 5,
            }}
            whileInView={{ rotate: [0, 200, 0] }}
            className="backgroundcolor"
          ></motion.div>
          <motion.div
            transition={{
              duration: 5,
            }}
            whileInView={{ rotate: [0, 100, 0] }}
            className="backgroundcolors"
          ></motion.div>
          <motion.div
            whileInView={{ rotate: [0, -400, 0] }}
            transition={{
              duration: 5,
            }}
            className="backgroundcolorf"
          ></motion.div>
          <div className="Image">
            <img src={logo} />
          </div>
          <div className="NameDescription">
            <h1>ANDUALEM GETACHEW</h1>
            <h2>
              <Typewriter
                id="type"
                options={{
                  loop: true,
                  delay: 190,
                  deleteSpeed: 100,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("<span id='type'>Fullstack Developer</span>")

                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("<span id='type'>Web-Design </span>")
                    .pauseFor(3000)
                    .start();
                }}
              />
            </h2>
            <a href="https://download1487.mediafire.com/jnh1wgihixkgO1DxJOrdRQZGWfSsrddws3EW7KjLJEWgWpOAGx36As_BpvC7VkKE4TRv8UYL9LxJddlaCpVyjIAjPEmp0huiP-nx305bIzALWu2CjlqHvmAvRUSkdWv1JaP-WakAaJR2IuSVyL4fFh9ZO6vAU2e-3YUA8TackiM9CW0/fc00i6uqqwtltwx/Resume.pdf">
              <button>Download Cv</button>
            </a>
          </div>
        </div>
        <div className="skillrotate"></div>
        <div className="Skills">
          <div className="Text">
            <h1>Skills</h1>
          </div>
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
        <div className="skillrotates"></div>
        <motion.div
          className="ActiveHour"
          style={{ backgroundImage: `url(${prof1})` }}
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="blackcover">
            <h1>DREAM IT WISH IT DO IT!!</h1>
          </div>
        </motion.div>
        <div className="story">
          <h2>About-Me</h2>
          <div className="storypics">
            <div className="storys">
              <img src={code} />
            </div>
            <div className="Storytext">
              <p>
                Hi Again i am Andi Computer Sience Enginering student at defence
                Enginnering college and also software enginnering student Alx
                online class.and taken several courses at Corsera Meta Backend
                development. I am Honest And Reliable ,known with my clean code
              </p>
              <p>Thank you for visiting my portfolio</p>
            </div>
          </div>
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
          <div className="Card-Lists">
            <motion.div
              className="pccard"
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
        <div class="contactus">
          <h2>Contact-ME</h2>
          <div className="Socialmedia">
            <div className="SocialmediacardsList" style={{ width: 500 }}>
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
}

export default Bodybanner;
