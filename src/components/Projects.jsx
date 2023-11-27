import Card from "./card";

const data = [
  {
    name: "Audible Atomsphere",
    description: 'Generate a playlist based on the weather in your area',
  },
  {
    name: "RE Law Lookup",
    description: 'Look up real estate laws with keywords!',
  },
  {
    name: "Movie Maestro",
    description: 'Find Personalized Movie Recommendations Easily',
  }
  ,{
    name: "Coming Soon",
    description: 'Under development',
  }
]



function Projects() {
  return (
    <div className="card-container">

    {
      data.map((item)=> <Card name={item.name} description={item.description}/>)
    }
    
      {/* <Card name="Audible Atomsphere" description="Generate a playlist based on the weather in your area!"/>
      <Card name="RE Law Lookup" description="Look up real estate laws with keywords!"/>
      <Card name="Movie Maestros" description="Movie Suggestions based on your likes"/>
      <Card name="Unknown" description="Under Development"/> */}
    </div>
  )
}

export default Projects;