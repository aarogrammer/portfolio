<template>
    <section class="portfolio">
        <div class="container">
            <div class="row">
             <router-view></router-view>
                <div class="col-lg-12 text-center">
                    <h2>Recent projects</h2>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="row">
              <div class="col-sm-4 portfolio-item">
                  <router-link to="/projects/bearandmeerkat">
                      <img src="https://static.aaron-welsh.co.uk/assets/img/bandm.png" width="900" height="650" class="img-responsive" alt="The Bear &amp; The Meerkat" />
                  </router-link>
                  <div class="overlay">
                      <router-link to="/projects/bearandmeerkat">
                            <h3>The Bear & The Meerkat</h3>
                      </router-link>
                  </div>
              </div>

              <div class="col-sm-4 portfolio-item">
                  <router-link to="/projects/360marine">
                      <img src="https://static.aaron-welsh.co.uk/assets/img/360marine.png" width="900" height="650" class="img-responsive" alt="360Marine">
                  </router-link>
                  <div class="overlay">
                        <router-link to="/projects/360marine">
                            <h3>360Marine</h3>
                        </router-link>
                  </div>
              </div>

              <div class="col-sm-4 portfolio-item">
                  <router-link to="/projects/responsiveness">
                      <img src="https://static.aaron-welsh.co.uk/assets/img/phone.png" width="900" height="650" class="img-responsive" alt="Responsiveness">
                  </router-link>
                  <div class="overlay">
                        <router-link to="/projects/responsiveness">
                            <h3>Responsiveness</h3>
                        </router-link>
                  </div>
              </div>

                <div class="col-sm-4 portfolio-item">
                    <router-link to="/projects/elcees">
                        <img src="https://static.aaron-welsh.co.uk/assets/img/elc.png" width="900" height="650" class="img-responsive" alt="ElCee's">
                    </router-link>
                    <div class="overlay">
                        <router-link to="/projects/elcees">
                            <h3>Elcee's</h3>
                        </router-link>
                    </div>
                </div>

                <div class="col-sm-4 portfolio-item">
                    <router-link to="/projects/jordan">
                        <img src="https://static.aaron-welsh.co.uk/assets/img/jordan.png" width="900" height="650" class="img-responsive" alt="Jordan">
                    </router-link>
                    <div class="overlay">
                        <router-link to="/projects/jordan">
                            <h3>Jordan's portfolio</h3>
                        </router-link>
                    </div>
                </div>

                <div class="col-sm-4 portfolio-item">
                    <router-link to="/projects/dsd">
                        <img src="https://static.aaron-welsh.co.uk/assets/img/dsd.png" width="900" height="650" class="img-responsive" alt="DSD">
                    </router-link>
                    <div class="overlay">
                        <router-link to="/projects/dsd">
                            <h3>DSD Scotland</h3>
                        </router-link>
                    </div>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <router-link to="/projects/cms">
                        <img src="https://static.aaron-welsh.co.uk/assets/img/cms.png" width="900" height="650" class="img-responsive" alt="CMS">
                    </router-link>
                    <div class="overlay">
                        <router-link to="/projects/cms">
                            <h3>Control Management System</h3>
                        </router-link>
                    </div>
                </div>

                <div class="col-sm-4 portfolio-item" onClick="alert('Sorry, I haven\'t finished this page yet! Here is another project I have done though!')">
                    <router-link to="/projects/bearandmeerkat">
                        <img src="https://static.aaron-welsh.co.uk/assets/img/scottishmusic.png" width="900" height="650" class="img-responsive" alt="Scottish Music">
                    </router-link>
                    <div class="overlay">
                        <router-link to="/projects/bearandmeerkat">
                            <h3>Scottish Music</h3>
                        </router-link>
                    </div>
                </div>
                <div class="col-sm-4 portfolio-item">
                    <h4 class="last-item">
                        <router-link to="/contact">Let's make something awesome!?</router-link>
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>