function Nav (){
  function about(){
    document.querySelector('#about').style="display: block";
    document.querySelector('#projects').style="display: none";
  }
  function projects(){
    document.querySelector('#about').style="display: none";
    document.querySelector('#projects').style="display: block";
  }
  return(
    <div className="nav-sec">
      <li><button onClick={about}>About</button></li>
      <li><button onClick={projects}>Projects</button></li>
      <li><button>Resume</button></li>
      <li><button>Contact</button></li>
    </div>
  )
}

export default Nav;