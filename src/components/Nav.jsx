function Nav (){
  // function home(){
  //   document.querySelector('#about').style="display: block";
  //   document.querySelector('#proj-container').style="display: block";
  //   document.querySelector('#contact').style="display: block";
  //   document.querySelector('#resume').style="display: block";
  // }
  function about(){
    document.querySelector('#about').style="display: flex";
    document.querySelector('#proj-container').style="display: block";
    document.querySelector('#contact').style="display: block";
    document.querySelector('#resume').style="display: flex";
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
    document.querySelector('#contact').style="display: flex";
  }
  function resume(){
    document.querySelector('#about').style="display: none";
    document.querySelector('#proj-container').style="display: none";
    document.querySelector('#contact').style="display: none";
    document.querySelector('#resume').style="display: flex";
  }

  return(
    <div className="nav-sec">
          <li><a onClick={about}>Home</a></li>
      {/* <li><a onClick={about}>About</a></li> */}
      <li><a onClick={projects}>Projects</a></li>
      <li><a onClick={resume}>Resume</a></li>
      <li><a onClick={contact}>Contact</a></li>
    </div>
  )
}

export default Nav;