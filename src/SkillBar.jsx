
import "./SkillBar.css";

const SkillBar = () => {
  const programmingSkills = [
    { name: "Html", level: 95 },
    { name: "CSS", level: 75 },
    { name: "React", level: 90 },
    { name: "Vue", level: 87 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 82 },
    { name: "TypeScript", level: 80 },
    { name: "MySQL", level: 80 }
  ];

  const dataAnalysisSkills = [
    { name: "Power Query", level: 85 },
    { name: "Pivot Table", level: 90 },
    { name: "Power Pivot", level: 80 },
    { name: "Excel", level: 92 },
    { name: "MySQL", level: 80 }
  ];

  return (
    <div className="skills-container">
      <h2>Skills Overview</h2>
      <div className="skills-grid">
        <div className="skills-section">
          <h3>Programming Skills</h3>
          {programmingSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
        <div className="skills-section">
          <h3>Data Analysis Skills</h3>
          {dataAnalysisSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
