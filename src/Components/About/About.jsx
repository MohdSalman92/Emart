import React from 'react'
// import './About.css';
export const About = () => {
  return (
    <>
    <div className="about-container py-3 ">
    <h1 className='text-center'>About Us</h1>
    <hr />
    <div className="div1 row m-3">
      <div className="col-md-6 p-3">
        <img src="./Assets/team.jpg" alt="team" width="100%" />
      </div>
      <div className="col-md-6 p-3">
        <h1>Our Team</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo fugit consequuntur. Illo voluptatibus architecto ullam quo molestias labore assumenda, nemo maxime amet commodi perferendis.</p>
        <button className="btn btn-primary mt-5">More</button>
      </div>
    </div>

    <div className="div2 row m-3">
      <div className="col-md-6 p-3">
        <h1>Security is our prime goal</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo fugit consequuntur. Illo voluptatibus architecto ullam quo molestias labore assumenda.</p>
        <button className="btn btn-primary mt-5">More</button>
      </div>
      <div className="col-md-6 p-3">
        <img src="./Assets/pocket.jpg" alt="team" width="100%" />
      </div>
    </div>

    <div className="div3 row m-3">
    <div className="col-md-6 p-3">
      <video src="./Assets/globe.mp4" alt="video" controls autoPlay width="100%"></video>
      </div>
      <div className="col-md-6 p-3">
        <h1>We are available in 10+ countries</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo fugit consequuntur. Illo voluptatibus architecto ullam quo molestias labore assumenda.</p>
        <button className="btn btn-primary mt-5">More</button>
      </div>
      
    </div>

    </div>
    </>
  )
}
