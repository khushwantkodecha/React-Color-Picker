import React, { Component } from "react";
import "./App.css";

class App extends Component {
  copyText = text => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  render() {
    return (
      <React.Fragment>
        <div className="continer-fluid">
          <nav
            class="navbar navbar-expand-md navbar-light"
            style={{ backgroundColor: "#c1c1c1", height: 90, fontFamily: "Trattatello" }}
          >
            <a class="navbar-brand">UI Color Uthao</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav" style={{ marginLeft: "36%", marginTop: "0.5%" }}>
                Click to copy color
              </div>
              <div class="navbar-nav ml-auto">
                <a href="http://khushwantkodecha.github.io/" target="_blank" class="nav-item nav-link">
                  About Developer
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-fluid mt-3">
          <h3 id="color-haed">Rocking Red</h3>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E44236" }}
              onClick={e => this.copyText("#E44236")}
            >
              <p className="text-white" id="#E44236">
                #E44236
              </p>
            </div>
            <div
              className="col-2 center"
              onClick={e => this.copyText("#B83227")}
              style={{ backgroundColor: "#B83227" }}
            >
              <p className="text-white">#B83227</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#D63031" }}>
              <p className="text-white">#D63031</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#E84342" }}>
              <p className="text-white">#E84342</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#FF3031" }}>
              <p className="text-white">#FF3031</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#BA2F16" }}>
              <p className="text-white">#BA2F16</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 center" style={{ backgroundColor: "#EC4849" }}>
              <p className="text-white">#EC4849</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#FF3E4D" }}>
              <p className="text-white">#FF3E4D</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#D63031" }}>
              <p className="text-white">#D63031</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#E84342" }}>
              <p className="text-white">#E84342</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#FF3031" }}>
              <p className="text-white">#FF3031</p>
            </div>
            <div className="col-2 center" style={{ backgroundColor: "#BA2F16" }}>
              <p className="text-white">#BA2F16</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
