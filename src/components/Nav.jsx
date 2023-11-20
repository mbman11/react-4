function Nav (){
  function about(){
    document.querySelector('#about').style="display: block";
    document.querySelector('#proj-container').style="display: block";
    document.querySelector('#contact').style="display: block";
    document.querySelector('#resume').style="display: block";
  }
  function projects(){
    document.querySelector('#about').style="display: none";
    document.querySelector('#contact').style="display: none";
    document.querySelector('#resume').style="display: none";
    document.querySelector('#proj-container').style="display: block";
  }
  function contact(){
    document.querySelector('#about').style="display: none";
    document.querySelector('#proj-container').style="display: none";
    document.querySelector('#resume').style="display: none";
    document.querySelector('#contact').style="display: block";
  }
  function resume(){
    document.querySelector('#about').style="display: none";
    document.querySelector('#proj-container').style="display: none";
    document.querySelector('#contact').style="display: none";
    document.querySelector('#resume').style="display: block";
  }

  return(
    <div className="nav-sec">
      <li><button onClick={about}>About</button></li>
      <li><button onClick={projects}>Projects</button></li>
      <li><button onClick={resume}>Resume</button></li>
      <li><button onClick={contact}>Contact</button></li>
    </div>
  )
}

export default Nav;