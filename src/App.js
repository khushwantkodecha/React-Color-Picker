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
    document.getElementById(text).innerText = "Copied!";
    setTimeout(function() {
      document.getElementById(text).innerText = text;
    }, 300);
  };
  render() {
    return (
      <React.Fragment>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>

          <label class="logo" style={{ fontFamily: "Alegreya Sans SC" }}>
            UI Color Uthao
          </label>
          <label class="copy" style={{ fontFamily: "Alegreya Sans SC", padding: "0 300px" }}>
            Click To Copy Color
          </label>

          <ul>
            <li style={{ fontFamily: "Alegreya Sans SC" }}>
              <a href="http://khushwantkodecha.github.io/" target="_blank" style={{ textDecoration: "none" }}>
                About Developer
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid" style={{ marginTop: 100 }}>
          <h3 style={{ fontFamily: "Allan", color: "red" }}>
            <i>Rocking Red</i>
          </h3>
        </div>
        <div className="container-fluid mt-3">
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
              <p className="text-white" id="#B83227">
                #B83227
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#D63031" }}
              onClick={e => this.copyText("#D63031")}
            >
              <p className="text-white" id="#D63031">
                #D63031
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E84342" }}
              onClick={e => this.copyText("#E84342")}
            >
              <p className="text-white" id="#E84342">
                #E84342
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FF3031" }}
              onClick={e => this.copyText("#FF3031")}
            >
              <p className="text-white" id="#FF3031">
                #FF3031
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#BA2F16" }}
              onClick={e => this.copyText("#BA2F16")}
            >
              <p className="text-white" id="#BA2F16">
                #BA2F16
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#EC4849" }}
              onClick={e => this.copyText("#EC4849")}
            >
              <p className="text-white" id="#EC4849">
                #EC4849
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FF3E4D" }}
              onClick={e => this.copyText("#FF3E4D")}
            >
              <p className="text-white" id="#FF3E4D">
                #FF3E4D
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E71C23" }}
              onClick={e => this.copyText("#E71C23")}
            >
              <p className="text-white" id="#E71C23">
                #E71C23
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#EA425C" }}
              onClick={e => this.copyText("#EA425C")}
            >
              <p className="text-white" id="#EA425C">
                #EA425C
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E8290B" }}
              onClick={e => this.copyText("#E8290B")}
            >
              <p className="text-white" id="#E8290B">
                #E8290B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#AE1438" }}
              onClick={e => this.copyText("#AE1438")}
            >
              <p className="text-white" id="#AE1438">
                #AE1438
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E83350" }}
              onClick={e => this.copyText("#E83350")}
            >
              <p className="text-white" id="#E83350">
                #E83350
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FF4848" }}
              onClick={e => this.copyText("#FF4848")}
            >
              <p className="text-white" id="#FF4848">
                #FF4848
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FF362E" }}
              onClick={e => this.copyText("#FF362E")}
            >
              <p className="text-white" id="#FF362E">
                #FF362E
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#EB3449" }}
              onClick={e => this.copyText("#EB3449")}
            >
              <p className="text-white" id="#EB3449">
                #EB3449
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FF1C36" }}
              onClick={e => this.copyText("#FF1C36")}
            >
              <p className="text-white" id="#FF1C36">
                #FF1C36
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#C4061C" }}
              onClick={e => this.copyText("#C4061C")}
            >
              <p className="text-white" id="#C4061C">
                #C4061C
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <h3 style={{ fontFamily: "Allan", color: "blue" }}>
            <i>Beautiful Blue</i>
          </h3>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#3498DB" }}
              onClick={e => this.copyText("#3498DB")}
            >
              <p className="text-white" id="#3498DB">
                #3498DB
              </p>
            </div>
            <div
              className="col-2 center"
              onClick={e => this.copyText("#2475B0")}
              style={{ backgroundColor: "#2475B0" }}
            >
              <p className="text-white" id="#2475B0">
                #2475B0
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#74B9FF" }}
              onClick={e => this.copyText("#74B9FF")}
            >
              <p className="text-white" id="#74B9FF">
                #74B9FF
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0A79DF" }}
              onClick={e => this.copyText("#0A79DF")}
            >
              <p className="text-white" id="#0A79DF">
                #0A79DF
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#4834DF" }}
              onClick={e => this.copyText("#4834DF")}
            >
              <p className="text-white" id="#4834DF">
                #4834DF
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#30336B" }}
              onClick={e => this.copyText("#30336B")}
            >
              <p className="text-white" id="#30336B">
                #30336B
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#487EB0" }}
              onClick={e => this.copyText("#487EB0")}
            >
              <p className="text-white" id="#487EB0">
                #487EB0
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#192A56" }}
              onClick={e => this.copyText("#192A56")}
            >
              <p className="text-white" id="#192A56">
                #192A56
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#6A89CC" }}
              onClick={e => this.copyText("#6A89CC")}
            >
              <p className="text-white" id="#6A89CC">
                #6A89CC
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0A3D62" }}
              onClick={e => this.copyText("#0A3D62")}
            >
              <p className="text-white" id="#0A3D62">
                #0A3D62
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#4BCFFA" }}
              onClick={e => this.copyText("#4BCFFA")}
            >
              <p className="text-white" id="#4BCFFA">
                #4BCFFA
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0ABDE3" }}
              onClick={e => this.copyText("#0ABDE3")}
            >
              <p className="text-white" id="#0ABDE3">
                #0ABDE3
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#25CCF7" }}
              onClick={e => this.copyText("#25CCF7")}
            >
              <p className="text-white" id="#25CCF7">
                #25CCF7
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#67E6DC" }}
              onClick={e => this.copyText("#67E6DC")}
            >
              <p className="text-white" id="#67E6DC">
                #67E6DC
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#3C40C6" }}
              onClick={e => this.copyText("#3C40C6")}
            >
              <p className="text-white" id="#3C40C6">
                #3C40C6
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#9094E8" }}
              onClick={e => this.copyText("#9094E8")}
            >
              <p className="text-white" id="#9094E8">
                #9094E8
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#140CA8" }}
              onClick={e => this.copyText("#140CA8")}
            >
              <p className="text-white" id="#140CA8">
                #140CA8
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0A1859" }}
              onClick={e => this.copyText("#0A1859")}
            >
              <p className="text-white" id="#0A1859">
                #0A1859
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <h3 style={{ fontFamily: "Allan", color: "green" }}>
            <i>Golf Green</i>
          </h3>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#2ECC72" }}
              onClick={e => this.copyText("#2ECC72")}
            >
              <p className="text-white" id="#2ECC72">
                #2ECC72
              </p>
            </div>
            <div
              className="col-2 center"
              onClick={e => this.copyText("#26ae60")}
              style={{ backgroundColor: "#26ae60" }}
            >
              <p className="text-white" id="#26ae60">
                #26ae60
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#6AB04C" }}
              onClick={e => this.copyText("#6AB04C")}
            >
              <p className="text-white" id="#6AB04C">
                #6AB04C
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#badc57" }}
              onClick={e => this.copyText("#badc57")}
            >
              <p className="text-white" id="#badc57">
                #badc57
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#43BE31" }}
              onClick={e => this.copyText("#43BE31")}
            >
              <p className="text-white" id="#43BE31">
                #43BE31
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#6AB04A" }}
              onClick={e => this.copyText("#6AB04A")}
            >
              <p className="text-white" id="#6AB04A">
                #6AB04A
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#45CE30" }}
              onClick={e => this.copyText("#45CE30")}
            >
              <p className="text-white" id="#45CE30">
                #45CE30
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#10A881" }}
              onClick={e => this.copyText("#10A881")}
            >
              <p className="text-white" id="#10A881">
                #10A881
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#1BCA9B" }}
              onClick={e => this.copyText("#1BCA9B")}
            >
              <p className="text-white" id="#1BCA9B">
                #1BCA9B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#7CEC9F" }}
              onClick={e => this.copyText("#7CEC9F")}
            >
              <p className="text-white" id="#7CEC9F">
                #7CEC9F
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#019031" }}
              onClick={e => this.copyText("#019031")}
            >
              <p className="text-white" id="#019031">
                #019031
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#A3CB37" }}
              onClick={e => this.copyText("#A3CB37")}
            >
              <p className="text-white" id="#A3CB37">
                #A3CB37
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#75DA8B" }}
              onClick={e => this.copyText("#75DA8B")}
            >
              <p className="text-white" id="#75DA8B">
                #75DA8B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#53E0BC" }}
              onClick={e => this.copyText("#53E0BC")}
            >
              <p className="text-white" id="#53E0BC">
                #53E0BC
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#218F76" }}
              onClick={e => this.copyText("#218F76")}
            >
              <p className="text-white" id="#218F76">
                #218F76
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0AFF2E" }}
              onClick={e => this.copyText("#0AFF2E")}
            >
              <p className="text-white" id="#0AFF2E">
                #0AFF2E
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#19A62E" }}
              onClick={e => this.copyText("#19A62E")}
            >
              <p className="text-white" id="#19A62E">
                #19A62E
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#057515" }}
              onClick={e => this.copyText("#057515")}
            >
              <p className="text-white" id="#057515">
                #057515
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <h3 style={{ fontFamily: "Allan", color: "#d6d256" }}>
            <i>Fresh Yellow</i>
          </h3>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#EEC213" }}
              onClick={e => this.copyText("#EEC213")}
            >
              <p className="text-white" id="#EEC213">
                #EEC213
              </p>
            </div>
            <div
              className="col-2 center"
              onClick={e => this.copyText("#F5C469")}
              style={{ backgroundColor: "#F5C469" }}
            >
              <p className="text-white" id="#F5C469">
                #F5C469
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F4C724" }}
              onClick={e => this.copyText("#F4C724")}
            >
              <p className="text-white" id="#F4C724">
                #F4C724
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F0DF87" }}
              onClick={e => this.copyText("#F0DF87")}
            >
              <p className="text-white" id="#F0DF87">
                #F0DF87
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#DFAF2B" }}
              onClick={e => this.copyText("#DFAF2B")}
            >
              <p className="text-white" id="#DFAF2B">
                #DFAF2B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FAC42F" }}
              onClick={e => this.copyText("#FAC42F")}
            >
              <p className="text-white" id="#FAC42F">
                #FAC42F
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F3B63A" }}
              onClick={e => this.copyText("#F3B63A")}
            >
              <p className="text-white" id="#F3B63A">
                #F3B63A
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FBD28B" }}
              onClick={e => this.copyText("#FBD28B")}
            >
              <p className="text-white" id="#FBD28B">
                #FBD28B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F3B431" }}
              onClick={e => this.copyText("#F3B431")}
            >
              <p className="text-white" id="#F3B431">
                #F3B431
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FAD02E" }}
              onClick={e => this.copyText("#FAD02E")}
            >
              <p className="text-white" id="#FAD02E">
                #FAD02E
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E5B143" }}
              onClick={e => this.copyText("#E5B143")}
            >
              <p className="text-white" id="#E5B143">
                #E5B143
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F3CC79" }}
              onClick={e => this.copyText("#F3CC79")}
            >
              <p className="text-white" id="#F3CC79">
                #F3CC79
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F9DDA4" }}
              onClick={e => this.copyText("#F9DDA4")}
            >
              <p className="text-white" id="#F9DDA4">
                #F9DDA4
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#FFF222" }}
              onClick={e => this.copyText("#FFF222")}
            >
              <p className="text-white" id="#FFF222">
                #FFF222
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#E1DA00" }}
              onClick={e => this.copyText("#E1DA00")}
            >
              <p className="text-white" id="#E1DA00">
                #E1DA00
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0AFF2F" }}
              onClick={e => this.copyText("#0AFF2F")}
            >
              <p id="#0AFF2F" className="text-white">
                #0AFF2F
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F2DE2C" }}
              onClick={e => this.copyText("#F2DE2C")}
            >
              <p className="text-white" id="#F2DE2C">
                #F2DE2C
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#f7ED2D" }}
              onClick={e => this.copyText("#f7ED2D")}
            >
              <p className="text-white" id="#f7ED2D">
                #f7ED2D
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <h3 style={{ fontFamily: "Allan", color: "#535C68" }}>
            <i>Old Grey</i>
          </h3>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#7B8788" }}
              onClick={e => this.copyText("#7B8788")}
            >
              <p className="text-white" id="#7B8788">
                #7B8788
              </p>
            </div>
            <div
              className="col-2 center"
              onClick={e => this.copyText("#99AAAB")}
              style={{ backgroundColor: "#99AAAB" }}
            >
              <p className="text-white" id="#99AAAB">
                #99AAAB
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#2C3335" }}
              onClick={e => this.copyText("#2C3335")}
            >
              <p className="text-white" id="#2C3335">
                #2C3335
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#616C6F" }}
              onClick={e => this.copyText("#616C6F")}
            >
              <p className="text-white" id="#616C6F">
                #616C6F
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#DAE0E2" }}
              onClick={e => this.copyText("#DAE0E2")}
            >
              <p className="text-white" id="#DAE0E2">
                #DAE0E2
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#535C68" }}
              onClick={e => this.copyText("#535C68")}
            >
              <p className="text-white" id="#535C68">
                #535C68
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#333945" }}
              onClick={e => this.copyText("#333945")}
            >
              <p className="text-white" id="#333945">
                #333945
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#2F363F" }}
              onClick={e => this.copyText("#2F363F")}
            >
              <p className="text-white" id="#2F363F">
                #2F363F
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#586776" }}
              onClick={e => this.copyText("#586776")}
            >
              <p className="text-white" id="#586776">
                #586776
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#8395A7" }}
              onClick={e => this.copyText("#8395A7")}
            >
              <p className="text-white" id="#8395A7">
                #8395A7
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#A4B0BD" }}
              onClick={e => this.copyText("#A4B0BD")}
            >
              <p className="text-white" id="#A4B0BD">
                #A4B0BD
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#43464A" }}
              onClick={e => this.copyText("#43464A")}
            >
              <p className="text-white" id="#43464A">
                #43464A
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#777E8B" }}
              onClick={e => this.copyText("#777E8B")}
            >
              <p className="text-white" id="#777E8B">
                #777E8B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#758AA2" }}
              onClick={e => this.copyText("#758AA2")}
            >
              <p className="text-white" id="#758AA2">
                #758AA2
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#4C4B4C" }}
              onClick={e => this.copyText("#4C4B4C")}
            >
              <p className="text-white" id="#4C4B4C">
                #4C4B4C
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#47535E" }}
              onClick={e => this.copyText("#47535E")}
            >
              <p className="text-white" id="#47535E">
                #47535E
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#4C4B4B" }}
              onClick={e => this.copyText("#4C4B4B")}
            >
              <p className="text-white" id="#4C4B4B">
                #4C4B4B
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#515152" }}
              onClick={e => this.copyText("#515152")}
            >
              <p className="text-white" id="#515152">
                #515152
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <h3 style={{ fontFamily: "Allan", color: "#BB2CD9" }}>
            <i>Might Be Great</i>
          </h3>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#EAF0F1" }}
              onClick={e => this.copyText("#EAF0F1")}
            >
              <p className="text-black" id="#EAF0F1">
                #EAF0F1
              </p>
            </div>
            <div
              className="col-2 center"
              onClick={e => this.copyText("#E74292")}
              style={{ backgroundColor: "#E74292" }}
            >
              <p className="text-white" id="#E74292">
                #E74292
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#74B9FE" }}
              onClick={e => this.copyText("#74B9FE")}
            >
              <p className="text-white" id="#74B9FE">
                #74B9FE
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#01CBC6" }}
              onClick={e => this.copyText("#01CBC6")}
            >
              <p className="text-white" id="#01CBC6">
                #01CBC6
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#BB2CD9" }}
              onClick={e => this.copyText("#BB2CD9")}
            >
              <p className="text-white" id="#BB2CD9">
                #BB2CD9
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#8B78E6" }}
              onClick={e => this.copyText("#8B78E6")}
            >
              <p className="text-white" id="#8B78E6">
                #8B78E6
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 center"
              style={{ backgroundColor: "#00CCCD" }}
              onClick={e => this.copyText("#00CCCD")}
            >
              <p className="text-white" id="#00CCCD">
                #00CCCD
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#1287A5" }}
              onClick={e => this.copyText("#1287A5")}
            >
              <p className="text-white" id="#1287A5">
                #1287A5
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#EA7773" }}
              onClick={e => this.copyText("#EA7773")}
            >
              <p className="text-white" id="#EA7773">
                #EA7773
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#2B2B52" }}
              onClick={e => this.copyText("#2B2B52")}
            >
              <p className="text-white" id="#2B2B52">
                #2B2B52
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#F5BCBA" }}
              onClick={e => this.copyText("#F5BCBA")}
            >
              <p className="text-white" id="#F5BCBA">
                #F5BCBA
              </p>
            </div>
            <div
              className="col-2 center"
              style={{ backgroundColor: "#0A0A24" }}
              onClick={e => this.copyText("#0A0A24")}
            >
              <p className="text-white" id="#0A0A24">
                #0A0A24
              </p>
            </div>
          </div>
        </div>
        <div className="navbar fixed-bottom navbar-light btm">
          <label style={{ fontFamily: "Alegreya Sans SC", paddingLeft : "43%", width: "100%" }}>
            Great colors for great designs!
          </label>
        </div>
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default App;
