import "./Resume.css";


const Resume = () => {

  const resumeFile = '/Resume.pdf'; 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Aderemi_resume.pdf';
    link.click();
  };

  return (
    <div>
      <button className="resume-Button" onClick={handleDownload}>Resume</button>
    </div>
  );
};
 
export default Resume;