import Option from "./Option";

import "../css/OptionList.css";

const options = [
  { id: 1, name: "Color", icon: "format_color_fill" },
  { id: 2, name: "Language", icon: "translate" },
  { id: 3, name: "Close", icon: "close" },
];

function OptionList() {
  return (
    <div className="option_list">
      {options.map((option) => (
        <Option option={option} key={option.id} />
      ))}
    </div>
  );
}

export default OptionList;
