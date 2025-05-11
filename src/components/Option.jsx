import "../css/Option.css";

function OptionClick(name) {
    alert(`You clicked: ${name}`)
}

function Option({ option }) {
  return (
    <div className="option" onClick={() => OptionClick(option.name)}>
      <span className="material-icons-sharp">{option.icon}</span>
    </div>
  );
}

export default Option;
