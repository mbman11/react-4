import Card from "./card";

function Projects() {
  return (
    <div className="card-container">
      <Card name="Audible Atomsphere" description="Generate a playlist based on the weather in your area!"/>
      <Card name="RE Law Lookup" description="Look up real estate laws with keywords!"/>
      <Card name="Movie Maestros" description="Movie Suggestions based on your likes"/>
      <Card name="Unknown" description="Under Development"/>
    </div>
  )
}

export default Projects;