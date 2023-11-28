import Card from "./Card";

const data = [
  {
    name: "Audible Atomsphere",
    description: 'Generate a playlist based on the weather in your area',
    imgFile: './audibleAtmos.png',
    link: 'https://provardjake.github.io/Audible-Atmosphere/'
  },
  {
    name: "RE Law Lookup",
    description: 'Look up real estate laws with keywords!',
    imgFile: './lawLookup.png',
    link: 'https://re-law-lookup-production-6926.up.railway.app/'
  },
  {
    name: "Movie Maestro",
    description: 'Find Personalized Movie Recommendations',
    imgFile: './movie.webp'
  }
  ,{
    name: "Coming Soon",
    description: 'Under development',
    imgFile: './utah badge.png'
  }
]



function Projects() {
  return (
    <div className="card-container">

    {
      data.map((item)=> <Card name={item.name} description={item.description} imgFile={item.imgFile} link={item.link}/>)
    }
    
      {/* <Card name="Audible Atomsphere" description="Generate a playlist based on the weather in your area!"/>
      <Card name="RE Law Lookup" description="Look up real estate laws with keywords!"/>
      <Card name="Movie Maestros" description="Movie Suggestions based on your likes"/>
      <Card name="Unknown" description="Under Development"/> */}
    </div>
  )
}

export default Projects;