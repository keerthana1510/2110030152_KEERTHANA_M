import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {

  apiKey = "cb4fcd5968e3418a91912565a6563bf4" ;
  constructor() {
    super();
    this.state = {
      mode: "light",
      progress :0
    };
  }

  toggleMode = () => {
    if (this.state.mode === "dark") {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    } else {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#192734";
    }
  };


setProgress = (progress) => {
  this.setState({
    progress :progress
  })
}

  render() {
    return (
      <div>
        <Router>
          <Navbar toggleMode={this.toggleMode} mode={this.state.mode} />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress ={this.setProgress}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                  mode={this.state.mode}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
