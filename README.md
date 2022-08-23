<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>Netflix pawan – Watch TV Shows Online, Watch Movies Online</title>
    <link rel = "icon" href = "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"  type = "image/x-icon">
    <link rel="stylesheet" href="Netflix.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="Netflix.js"> </script>
   

</head>
<body onload='document.form1.text1.focus()'>
    <div class="card-img-overlay" id="id1">
        <div class="container-fluid cover-img">
            <nav class="navbar navbar-expand-lg ">
                <img src="/images/netflix-logo.PNG" alt="logo" class="logo" >
                <div class="nav-links"id="navLinks" >
                    <ul>
                        <li class="nav-item dropdown">
                            <div class="dropdown" >
                                <button type="button" class="btn btn--outline-secondary dropdown-toggle"            data-bs-toggle="dropdown" id="lang-selector">
                                    <i class="bi bi-globe"></i>
                                    English
                                </button>
                                <ul class="dropdown-menu " id="dropdown-menu1 " >
                                  <li><a class="dropdown-item" id="en1" href="#" >English</a></li>
                                  <li><a class="dropdown-item" id="hn1" href="#">Hindi</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="signup1"><a href="" class="btn btn-rounded" id="signup">Sign in</a></li>
                    </ul>
                </div>
            </nav>
            <div class="card-body">
                <h1 class="card-title">Unlimited movies, TV shows and more.</h1>
                <h2 class="card-text" id="subtitle1">Watch anywhere. Cancel anytime.</h2>
                <h3 class="card-text" id="subtitle2">Ready to watch? Enter your email to create or restart your membership.</h3>
                <form action="" method="get" name="form1" class="form-group1">
                    <div class="form-group">      
                        <input type="email" name="text1" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email address" value="" required>
                        <button class="btn btn-primary" id="get-started" type="submit" value="submit" onclick="ValidateEmail(document.form1.text1)">Get Started <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>
                    <p id="myDIV" style="color: red;">Email is required</p>
                </form>
            </div>
        </div>
        <div class="animation-card section-1" >
            <div class="animation-card-container">
                <div class="animation-card-text">
                    <h1 class="animation-card-title" id="card-title1">Enjoy on your TV.</h1>
                    <h2 class="animation-card-subtitle" id="card-text1">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </div>
                <div class="img-container">
                    <div class="animation-container">
                        <img class="animation-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Card image">
                        <div class="animation-card-animation"><video class="animation-card-video"  autoplay playsinline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-pixel" style="position:absolute"></div>
        </div>
        <div class="animation-card section-2"  >
            <div class="animation-card-container">
                <div class="animation-card-text">
                    <h1 class="animation-card-title" id="card-title1">Download your shows to watch offline.</h1>
                    <h2 class="animation-card-subtitle" id="card-text1">Save your favourites easily and always have something to watch.</h2>
                </div>
                <div class="img-container">
                    <div class="animation-container">
                        <img class="animation-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Card image">
                        
                            <div class="animation-card-animation1 img">
                            <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png">
                            <div class="img-text">
                                <div class="img-text1">
                                    Stranger Things
                                </div>
                                <div class="img-text2">
                                    Downloading...
                                </div>
                            </div>
                            <div class="img-animation"></div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="center-pixel" style="position:absolute"></div>
        </div>
        <div class="animation-card section-3" >
            <div class="animation-card-container">
                <div class="animation-card-text">
                    <h1 class="animation-card-title" id="card-title1">Watch everywhere.</h1>
                    <h2 class="animation-card-subtitle" id="card-text1">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div class="img-container">
                    <div class="animation-container">
                        <img class="animation-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png">
                        <div class="animation-card-animation"><video class="animation-card-video"  autoplay playsinline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-pixel" style="position:absolute"></div>
        </div>
        <div class="animation-card section-4" >
            <div class="animation-card-container">
                <div class="animation-card-text">
                    <h1 class="animation-card-title" id="card-title1">Create profiles for children.</h1>
                    <h2 class="animation-card-subtitle" id="card-text1">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </div>
                <div class="img-container">
                    <div class="animation-container">
                        <img class="animation-card-img" src="https://occ-0-3783-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="children-profile">
                        <div class="animation-card-animation"><video class="animation-card-video"  autoplay playsinline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-pixel" style="position:absolute"></div>
        </div>
        <section class="faq-card" style="background-color: black;">
         <div class="animation-card faq-part" style="background-color:black ;" >
            <h1 class="faq-heading">
                Frequently Asked Questions

            </h1>
            <div class="accordion accordion-flush" id="faq-list-part"  >
                <div class="accordion-item faq-item" >
                  <h2 class="accordion-header faq-question" id="flush-headingOne" >
                    <div type="button" class="faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">  
                        What is Netflix?
                        <i class="bi bi-plus" style="color:white; float: right; font-size: 3rem;"></i>
                    </div> 
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#faq-list-part" >
                    <div class="accordion-body faq-answer">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br> <br>
                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week! </p></div>
                  </div>
                </div>
                <div class="accordion-item faq-item">
                  <h2 class="accordion-header faq-question" id="flush-headingTwo">
                    <div type="button" class="faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">  
                        How much does Netflix cost?
                        <i class="bi bi-plus" style="color:white; float: right;font-size: 3rem;"></i>
                    </div>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#faq-list-part">
                    <div class="accordion-body faq-answer">
                        <p>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item faq-item">
                  <h2 class="accordion-header faq-question" id="flush-headingThree">
                   <div type="button" class="faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">  
                    Where can I watch?
                    <i class="bi bi-plus" style="color:white; float: right; font-size: 3rem;"></i>
                    </div>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#faq-list-part">
                    <div class="accordion-body faq-answer">
                        <p>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br> <br>
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item faq-item">
                    <h2 class="accordion-header faq-question" id="flush-headingFour">
                     <div type="button" class="faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">  
                      How do I cancel?
                      <i class="bi bi-plus" style="color:white; float: right;font-size: 3rem;"></i>
                      </div>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#faq-list-part">
                      <div class="accordion-body faq-answer">
                          <p>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                          </p>
                      </div>
                    </div>
                  </div>
                <div class="accordion-item faq-item">
                    <h2 class="accordion-header faq-question" id="flush-headingFive">
                     <div type="button" class="faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">  
                        What can I watch on Netflix?
                        <i class="bi bi-plus" style="color:white; float: right;font-size: 3rem;"></i>
                      </div>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#faq-list-part">
                      <div class="accordion-body faq-answer">
                          <p>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                          </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item faq-item">
                    <h2 class="accordion-header faq-question" id="flush-headingSix" >
                     <div type="button" class="faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" >  
                        Is Netflix good for kids?
                        <i class="bi bi-plus" style="color:white; font-size: 3rem; float: right;"></i>
                      </div>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#faq-list-part">
                      <div class="accordion-body faq-answer">
                          <p>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                            <br>
                            <br>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                          </p>
                      </div>
                    </div>
                  </div>
                  
                    <br>
                    <br>
                    <br>
                    <br>
                    <h3 class="card-text" id="subtitle2">
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>
                    <form action="" method="get" class="form-group1">
                        <div class="form-group">
                                                
                      <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email address" value="" required>
                     <button class="btn btn-primary" id="get-started" type="submit" value="submit" onclick="ValidateEmail1(document.form1.text1)">Get Started <i class="bi bi-chevron-right"></i> </button>
                      </div>
                      <p id="myDIV1" style="color: red;">Email is required</p>
                      </form>
                     
                </div>
            </div>
        </section>
        <div class="animation-card footer-card">
            <div class="container link-part">
                <div class="info-heading">
                    <p style="color: #737373;text-align: left; ">Questions? Call 
                    <a href="" class="helpline-no." >000-123-456-789 </a></p>
                </div>
            <section class="link">
                
               
                <div class="sub-links">
                    
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Way To Watch</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Cookie Preference</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Speed Test</a></li>
                    <li><a href="#">Legal Notices</a></li>
                    <li><a href="#">Only On Netflix</a></li>
                 </ul>
                 
                </div>
                <div class="dropdown" style="float: left; color: #737373;" >
                    <button type="button" class="btn btn--outline-secondary dropdown-toggle" data-bs-toggle="dropdown" id="btn1">
                        <i class="bi bi-globe"style=" color: #737373;">
                    
                        </i>
                        English
                    </button>
                    <ul class="dropdown-menu " id="dropdown-menu1 " >
                      <li><a class="dropdown-item" id="en1" href="#" >English</a></li>
                      <li><a class="dropdown-item" id="hn1" href="#">Hindi</a></li>                     
                    </ul>
                </div>
              </section>
              <br>
              <br>
              <!-- END OF LINKS -->
          
              <!-- FOOTER -->
              <footer>
                <p style="float: left; color: #737373;">Netflix clone@pawanchoudhary</p>
                
              </footer>
            </div>
              

        </div>
    </div>
    
    
   
   
    
</body>
</html>
