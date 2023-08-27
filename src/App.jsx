import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center">
              <h2> ZealYug Footer </h2>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer-03">
        <div class="row mx-4">
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-4 mb-md-0 mb-4">
                <h2 class="footer-heading">Explore</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-1 d-block">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Find Opportunities
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Show Skills / Talent
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Post Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Post Instant Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Post Internships
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Post Shadowing
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Post Competitions
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Jobs in Delhi NCR
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Jobs in Delhi
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-4 mb-md-0 mb-4">
                <h2 class="footer-heading">Company</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-1 d-block">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Community Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Jackets
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Coats
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 mb-md-0 mb-4">
                <h2 class="footer-heading">Products</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-1 d-block">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" class="py-1 d-block">
                      Updates
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-4">
            <div class="row justify-content-end">
              <div class="col-md-12 col-lg-11 mb-md-0 mb-4">
                <h2 class="footer-heading">Subscribe to our Newsletter</h2>
                <form action="#" class="subscribe-form">
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      placeholder="Enter email address"
                    />
                  </div>
                  {/* rounded button */}
                  <button type="submit" class="btn mt-2 bg-light rounded-pill ">
                    Subscribe
                  </button>
                </form>

                <h2 class="footer-heading mt-4 my-2 py-1">
                  <i class="fa-solid fa-location-dot"></i> NH-19, Bhogal,
                  Jangpura, Delhi
                </h2>
                <h2 class="footer-heading my-2 py-1">
                  <a href="mailto:">
                    <i class="fa-solid fa-envelope"></i> zealyug.hr@gmail.com
                  </a>
                </h2>

                <h2 class="footer-heading mt-4">
                  Developed in India with love
                </h2>

                <h2 class="footer-heading mt-4">Follow Us</h2>
                <ul class="ftco-footer-social d-flex flex-row-reverse p-0">
                  <li class="">
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                  <li class="">
                    <i class="fa-brands fa-youtube"></i>
                  </li>
                  <li class="">
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                  <li class="">
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 pt-4 border-top mx-3">
          <div class="col-md-6 col-lg-8">
            <p class="copyright">Copyright @ 2023</p>
          </div>
          <div class="col-md-6 col-lg-4 text-md-right">
            <p class="mb-0 list-unstyled">All rights reserved by ZealYug</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
