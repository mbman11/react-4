import Projects from "./Projects";


function ProjectsContainer(){
  return(
    <div id="proj-container">
      <Projects />
      <div className="edu-div">
        <h1>Education</h1>
        {/* <img src="vite.svg"></img> */}
        <img className="uxBadge" src="./utah badge.png"></img>
        <p>Starting with a UX/UI Bootcamp. I freelanced then realized I could advance my skills. I took a Full Stack Bootcamp. Now were here.</p>
      </div>
    </div>
  )
}

export default ProjectsContainer