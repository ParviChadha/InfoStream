import React from "react";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";
import "./style.css";

export const SearchScreen = () => {
  return (
    <div className="search-screen">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="info-stream"> InfoStream</div>
          <div className="home-topics-about-us">Home&nbsp;&nbsp; Topics&nbsp;&nbsp;&nbsp;&nbsp;About Us</div>
          <SearchBar className="search-bar-instance" clearIcon={false} mic={false} state="default" topbar={false} />
        </div>
        <div className="overlap-group">
          <div className="rectangle-2" />
          <div className="group">
            <div className="overlap-2">
              <div className="rectangle-3" />
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
        <div className="text-wrapper-5">Results 1-20 of 100:</div>
        <img className="img" alt="Rectangle" src="rectangle-4.svg" />
        <div className="group-2">
          <div className="overlap-3">
            <div className="rectangle-3" />
            <div className="text-wrapper-2">Title</div>
            <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Article Pic</div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="rectangle-3" />
              <div className="text-wrapper-2">Title</div>
              <div className="text-wrapper-3">blurb kjwkjekwjekjwelkwjelkwqjeklwjeklwj</div>
              <div className="group-3">
                <div className="overlap-group-2">
                  <div className="text-wrapper-6">Article Pic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination className="pagination-instance" />
      </div>
    </div>
  );
};
