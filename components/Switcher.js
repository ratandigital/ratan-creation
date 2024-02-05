import React from 'react'

export default function Switcher() {
  return (
    <>
      <div id="switcher" className="">
    <div className="content-switcher">
      <h4>COLOR SWITCHER</h4>
      <ul>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('purple');"
            title="purple"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/purple.png" alt="purple" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('red');"
            title="red"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/red.png" alt="red" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('blueviolet');"
            title="blueviolet"
            className="color"
          >
            <img
              src="../../assets/img/styleswitcher/blueviolet.png"
              alt="blueviolet"
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('blue');"
            title="blue"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/blue.png" alt="blue" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('goldenrod');"
            title="goldenrod"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/goldenrod.png" alt="goldenrod" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('magenta');"
            title="magenta"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/magenta.png" alt="magenta" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('yellowgreen');"
            title="yellowgreen"
            className="color"
          >
            <img
              src="../../assets/img/styleswitcher/yellowgreen.png"
              alt="yellowgreen"
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('orange');"
            title="orange"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/orange.png" alt="orange" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('green');"
            title="green"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/green.png" alt="green" />
          </a>
        </li>
        <li>
          <a
            href="#"
            onclick="setActiveStyleSheet('yellow');"
            title="yellow"
            className="color"
          >
            <img src="../../assets/img/styleswitcher/yellow.png" alt="yellow" />
          </a>
        </li>
      </ul>
      <h4>TRANSITION DIRECTION</h4>
      <div className="flex justify-between transition-direction">
        <div id="cornertopleft">
          <div className="arrow cornertopleft" />
        </div>
        <div className="active" id="top">
          <div className="arrow top" />
        </div>
        <div id="cornertopright">
          <div className="arrow cornertopright" />
        </div>
      </div>
      <div className="flex justify-between transition-direction">
        <div id="left">
          <div className="arrow left" />
        </div>
        <div id="right">
          <div className="arrow right" />
        </div>
      </div>
      <div className="flex justify-between transition-direction">
        <div id="cornerbottomleft">
          <div className="arrow cornerbottomleft" />
        </div>
        <div id="bottom">
          <div className="arrow bottom" />
        </div>
        <div id="cornerbottomright">
          <div className="arrow cornerbottomright" />
        </div>
      </div>
      <span>Navigate between sections to see the effect.</span>
      <div id="hideSwitcher">×</div>
    </div>
  </div>
  <div id="showSwitcher" className="styleSecondColor">
    <i className="fa fa-cog fa-spin" />
  </div>
    </>
  )
}
