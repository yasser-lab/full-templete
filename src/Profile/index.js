import React, { Component }  from 'react'
import './style.css'
class  Profile extends Component {
  render(){
    return(
      <div class="profile_skills">
      <div class="container">
          <div class="profile">
              <h2 class="profile-title"><span>My </span>Profile</h2>
              <ul class="profile-list">
                  <li class="profile-item">
                      <span>Name</span>
                      Yasser einar
                  </li>
                  <li class="profile-item">
                      <span>Birthday</span>
                      31/8/1997
                  </li>
                  <li class="profile-item">
                      <span>Address</span>
                      Cairo Egypt
                  </li>
                  <li class="profile-item">
                      <span>Phone</span>
                      010 6917 5833
                  </li>
                  <li class="profile-item">
                      <span>Email</span>
                      yassereinr@gmail.com
                  </li>
                  <li class="profile-item">
                      <span>Website</span>
                      <span class="web">www.google.com</span>
                  </li>
              </ul>
          </div>
          
          <div class="skills">
              <h2 class="skills-title">Some <span>skills</span></h2>
              <p class="skills-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </p>
              <div class="bar">
                  <span class="title">Bootstrap</span>
                  <span class="perc">100%</span>
                  <div class="parent">
                      <span class="sp1"></span>
                  </div>
              </div>
              
              <div class="bar">
                  <span class="title">CSS3</span>
                  <span class="perc">90%</span>
                  <div class="parent">
                      <span class="sp2"></span>
                  </div>
              </div>
              
              <div class="bar">
                  <span class="title">Photoshop</span>
                  <span class="perc">80%</span>
                  <div class="parent">
                      <span class="sp3"></span>
                  </div>
              </div>
          </div>
          
      </div>
  </div>
    )
}
}
export default Profile;
