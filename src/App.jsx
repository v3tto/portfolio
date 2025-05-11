import OptionList from "./components/OptionList";
import SectionList from "./components/SectionList";
import Footer from "./components/Footer";

import "material-icons/iconfont/sharp.css";
import "./css/App.css";

function App() {
  return (
    <div className="display">
      <div className="display_border">
        <OptionList/>
        <SectionList/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
