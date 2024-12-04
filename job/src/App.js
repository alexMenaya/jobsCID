import React, {useState,useEffect} from 'react';
import './App.css';

function Job() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {

      // get jobs from the backend
      fetch('/api/jobs')
          .then((res) => res.json())
          .then((data) => setJobs(data))
  }, []);

  return (

    <section>

      <section className="pagetop">
        <div className="inner clear"></div>
        <img src={"/hr.png"}/>

      </section>

      <section className="newjobpost">
        <div className="inner"></div>
        
        <h1 className="h1">
          62.000 Bewerber suchen nach Arbeit
        </h1>
        
        <h2 className="h2">
          Ein internationales Netzwerk erfahrener Sourcing-Partner nutzt TalentSure,<br/> 
           um qualifizierten Fachkräften ihren Traum zu erfüllen.
        </h2>
        
        <button 
          className="bigbutton right"
          onClick={('')}
        >
          Post your Jobs TalentSure
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

