import "../App.css";

function Balls({ name }) {
  return (
    <div className="Balls" style={{ backgroundImage: `url(${name})` }}></div>
  );
}

export default Balls;
