//import { useState } from "react";
import "./App.css";
//import { SearchBar } from "./SearchBar";
import "./style.css";

function App() {
    //const [count, setCount] = useState(0);

    return (
        <div className="home-screen">
      <div className="overlap">
        <div className="rectangle" />
        <div className="info-stream"> InfoStream</div>
        <div className="home-topics-about-us">Home&nbsp;&nbsp; Topics&nbsp;&nbsp;&nbsp;&nbsp;About Us</div>
        {/* <SearchBar className="search-bar-instance" clearIcon={false} mic={false} state="default" topbar={false} />  */}
      </div>
      <div className="overlap-group">
        <div className="div" />
        <div className="group">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Title</div>
            <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Article Pic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-wrapper-5">Top News:</div>
      <img className="img" alt="Rectangle" src="rectangle-4.svg" />
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-2">Title</div>
          <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Article Pic</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-3">
        <div className="group-2">
          <div className="overlap-4">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Title</div>
            <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Article Pic</div>
              </div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Title</div>
              <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
              <div className="group-4">
                <div className="overlap-group-2">
                  <div className="text-wrapper-6">Article Pic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-4">
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Title</div>
            <div className="text-wrapper-3">blurb jednkejdnkwejdnkjwe</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Article Pic</div>
              </div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Title</div>
              <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
              <div className="group-4">
                <div className="overlap-group-2">
                  <div className="text-wrapper-6">Article Pic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default App;
