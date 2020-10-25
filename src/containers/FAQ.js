import React, { Component } from 'react';
import "./Home.css";

export default function Render() {
  return (
    <div className="Home">
      <div className="lander">
        <h2>About / FAQ</h2>
        <div>What is this site made using?</div>
        <p>react-bootstrap, react-router-dom hashRouter, and gh-pages for deployment.</p>
        <div>What editor do you use?</div>
        <p>VS Code with vscodevim.</p>
        <div>What are you currently working on?</div>
        <p>Styling for the site and Musicscroll.js : Infinite scroll but with music that plays forward and reverse.</p>
        <div>What are you going to blog about?</div>
        <p>Baby steps for incorporating functional programming practices into C# .NET codebases.</p>
        <div>Why don't you have more stuff?</div>
        <p>I've historically undervalued frontend development work. I have been working to remedy that mistake but I only have small bits of time to work on this site on weekends.</p>
        </div>
    </div>
  );
}