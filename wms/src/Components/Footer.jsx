import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  var link1 = "www.wmswiki.com";
  var link2 = "www.wmstypes.com";
  var link3 = "www.wmsImages.com";
  return (
    <>
     
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Wms</h6>
            <p class="text-justify">
              <span>+91-9359277751</span><br></br>
              <span>Pune, Maharashtra</span><br></br>
              <span>411008 Panchvati,Pashan India</span>
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <ul class="footer-links">
              <li>+91-9359277751</li>
              <li>+91-7742651990</li>
              <li>+91-7057858581</li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <li><Link to="https://en.wikipedia.org/wiki/Warehouse_management_system">{link1}</Link></li>
              <li><Link to="https://www.shipcalm.com/blog/warehouse-types/">{link2}</Link></li>
              <li><Link to="https://www.shutterstock.com/search/warehouse-management-system">{link3}</Link></li>
            </ul>
          </div>
        </div>
    
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy;{new Date().getFullYear()} All Rights Reserved by  
         <a href="#">Wms</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    
    </>
    
  )
}

export default Footer