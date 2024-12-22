import { useState, useEffect } from "react";
import SkillBar from "./Skillbar";


function Home() {

  const roles = ["a Data Analyst", "a Web Developer", "a Designer", "a Freelancer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  function switchRole() {
    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  }

  useEffect(function setupInterval() {
    const interval = setInterval(switchRole, 2000); 

    return function cleanupInterval() {
      clearInterval(interval);
    };
  }, );
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Hi, I am Aderemi</h1>
        </div>
        <br />
        <div className="content1">
          <h1>I am {roles[currentRoleIndex]}</h1>
        </div>
      </section>
      <SkillBar />
    </>
  );
}

export default Home;
