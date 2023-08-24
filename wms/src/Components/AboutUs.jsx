import React from 'react'
import './aboutus.css';
import img1 from './member_1.png';
import img2 from './member_2.png';
import img3 from './member_3.png';
import img4 from './member_4.png';

function AboutUs() {
  return (
    <>
    <div class="wrapper">
    <h1>Our Team</h1>
    <div class="our_team">
        <div class="team_member">
          <div class="member_img">
          <img src={img1} alt="img1" />
            <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Mayank Sani</h3>
          <span>Full Stack Developer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
        </div>
        <div class="team_member">
           <div class="member_img">
           <img src={img2} alt="img2" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Ajit Chavan</h3>
          <span>Front-End Developer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maiores temporibus, architecto optio asperiores mollitia pariatur error, quaerat voluptatibus minima eos quo nostrum, maxime necessitatibus.</p>
      </div>
        <div class="team_member">
           <div class="member_img">
           <img src={img3} alt="img3" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Aditya Bisen</h3>
          <span>Full Stack Developer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>
        <div class="team_member">
           <div class="member_img">
           <img src={img4} alt="img4" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Mayank Rinder</h3>
          <span>DevOps</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>  
      <div class="team_member">
           <div class="member_img">
           <img src={img4} alt="img4" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Abhay Patil</h3>
          <span>DevOps</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>  
    </div>
</div>	
    
    
    
    </>
  )
}

export default AboutUs