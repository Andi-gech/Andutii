import "../App.css";
import prof1 from "../Assets/user-image-.png";

function FeedbackCards({ name, message }) {
  return (
    <div className="FeedbackCards">
      <img src={prof1} />
      <div className="Textcard">
        <p className="username">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default FeedbackCards;
