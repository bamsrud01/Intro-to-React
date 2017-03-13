function Application(props) {
  //  All react components must be contained in a single element
  //  React components in JSX look like HTML, but are not.  It is compiled into JavaScript
  //  Use className instead of class, as class is reserved for OOP in JavaScript
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            Barrett Amsrud
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 15 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="player-name">
            Andrew Carlson
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 10 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  Define required prop types
Application.propTypes = {
  //  Can make a prop required, like this:
  //  title: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
};

//  Default values of properties
Application.defaultProps = {
  title: "Scoreboard",
};

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container'));
