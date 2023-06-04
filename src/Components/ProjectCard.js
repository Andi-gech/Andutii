import { FaEye } from "react-icons/fa";
import "../App.css";

function ProjectCard({ name, images, description, link }) {
  return (
    <div
      className="ProjectCard"
      style={{ backgroundImage: `url(${images})`, backgroundSize: "cover" }}
    >
      <div className="blackText">
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={link} target="_blank">
          <button>
            {" "}
            View{" "}
            <FaEye
              style={{
                marginBottom: -2,
              }}
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
