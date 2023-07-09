import React from "react";


export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="marquee" id="mrq1">
      <ul class="marquee__content">
        <li>CHAT APP</li>
        <li id="bubble">💬</li>
        <li>CHAT APP</li>
        <li id="bubble">💬</li>
      </ul>
      <ul class="marquee__content" aria-hidden="true">
        <li>CHAT APP</li>
        <li id="bubble">💬</li>
        <li>CHAT APP</li>
        <li id="bubble">💬</li>
      </ul>
    </div>
      </div>
    );
  }
}