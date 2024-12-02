import React from 'react';
import './App.css';

function Job() {
  return (

    <section>
      <section className="pagetop">
        <section className="inner clear"></section>
        <section className="aboutcom clear"></section>
        <img src={"/hr.png"} />

      </section>

      <section className="newjobpost">
        <div className="inner"></div>
        
        <h1 className="h1">
          62.000 Bewerber suchen nach Arbeit
        </h1>
        
        <h2 className="h2">
          Ein internationales Netzwerk erfahrener Sourcing-Partner nutzt TalentSure, um qualifizierten Fachkräften ihren Traum zu erfüllen.
        </h2>
        
        <button 
          className="bigbutton right"
          onClick={() => console.log("Post your Job clicked")}
        >
          Post your Jobs
        </button>
      </section>
      <section className="numjobs">
    
        <div className="column">
          <span className="h1">Our Impact</span><br />
          <span className="h2">Jeden Tag neue Bewerber und Stellen</span>
        </div>
        <div className="column">
          <span className="number">1.885</span>
          <span className="text">STELLEN</span>
        </div>
        <div className="column">
          <span className="number">62.817</span>
          <span className="text">BEWERBER</span>
        </div>
    
      </section>
    </section>
  );
}

export default Job;


