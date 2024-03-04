import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../assets/Home.css"
function Home() {
    return (
        <>
            <header className="showcase bg-blue-500 text-white">
               
                <div className="showcase-content text-center py-16">
                    <Heading as="h1" fontSize="4xl" mb="4">YOU ARE THE FUTURE!</Heading>
                    <Text fontSize="lg" mb="8">Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.</Text>
                    <Link to="/roadmap"><Button  colorScheme="blue" size="lg">Explore Future Possibilities!!<i className="fas fa-chevron-right btn-icon"></i></Button></Link>
                </div>
            </header>

            <section className="features">
        <div className="container">
            <h2>Features</h2>
            <div className="feature-item ">
                <div className="feature-content">
                    <h3>Personalized Learning Paths</h3>
                    <p>Create your personalized learning path tailored to your strengths, interests, and goals. <br/> FutureMap offers a variety of courses and resources to cater to your individual needs.</p>
                </div>
                <img src="https://th.bing.com/th/id/OIP.CmkDqFYM1oOB05k7VCxu_gHaEo?rs=1&pid=ImgDetMain" alt="Feature 1"/>
            </div>
            <div className="feature-item">
                <div className="feature-content">
                    <h3>Expert Guidance and Mentorship</h3>
                    <p>Receive guidance and mentorship from experienced educators and industry professionals. <br/> Our team is dedicated to supporting you throughout your academic journey.</p>
                </div>
                <img src="https://gentum.co.ke/wp-content/uploads/2021/05/Mentorship-services-1-1024x571.jpg" alt="Feature 2"/>
            </div>
            <div className="feature-item">
                <div className="feature-content">
                    <h3>Interactive Learning Resources</h3>
                    <p>Engage with interactive learning materials including videos, quizzes, and simulations. <br/> Enhance your understanding and retention of course concepts through hands-on practice.</p>
                </div>
                <img src="https://www.infinitypro.asia/wp-content/uploads/2022/08/School-Webinar-Banner-02.jpg" alt="Feature 3"/>
            </div>
        </div>
        <h3 className="middleHead">“Experience a dynamic learning environment with FutureMap, offering a wide range of interactive resources and expert support to help you achieve your academic goals.”</h3>
        <div className="card">
            <div className="card-content">
                <div className="text-content">
                    <h2>Your Roadmap to Success</h2>
                    <p>FutureMap is your ultimate companion in the journey towards academic excellence. <br/> With personalized learning paths, expert guidance, and interactive resources, FutureMap empowers students to reach their full potential and succeed in their academic endeavors.</p>
                </div>
                <div className="image-content">
                    <img src="https://plantingscience.org/app/site/media/newroadmapimages/Student%20Communicate%20Online%20smaller.jpeg" alt="Card Image"/>
                </div>
            </div>
        </div>
    </section>

        </>
    );
}

export default Home;




{/* <title></title>
</head>
<body>
  <header className="showcase">
    <div className="showcase-top">
      <img src="img/logo.png" alt="Future RoadMap" />
      <a href="#" className="btn btn-rounded">About Us</a>
    </div>
    <div className="showcase-content">
      <h1>YOU ARE THE FUTURE!</h1>
      <p style="font-style: italic;font-size: medium;">Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.</p>
      <a href="#" className="btn btn-xl"
        >Explore Future Possibilities!!<i className="fas fa-chevron-right btn-icon"></i
      ></a>
    </div>
  </header>



  <section className="tab-content">
    <div className="container">
      <!-- Tab Content 1 -->
      <div id="tab-1-content" className="tab-content-item show">
        <div className="tab-1-content-inner">
          <div>
            <p className="text-lg" style="font-style: italic;">
              If you can think , You can make it happen !
            </p>
            <a href="#" className="btn btn-lg">Our Developers</a>
          </div>
          <img src="img/tab-content-1.png" alt="" />
        </div>
      </div>

      <!-- Tab Content 2 -->
      <div id="tab-2-content" className="tab-content-item">
        <div className="tab-2-content-top">
          <p className="text-lg">
            Watch TV shows and movies anytime, anywhere - personalized for
            you.
          </p>
          <a href="#" className="btn btn-lg">Watch Free for 30 days</a>
        </div>
        <div className="tab-2-content-bottom">
          <div>
            <img src="img/tab-content-2-1.png" alt="" />
            <p className="text-md">Watch on your TV</p>
            <p className="text-dark">
              Smart TVs, PlayStation, Xbox, Chromecase, Apple TV, Blu-ray
              players and more.
            </p>
          </div>

          <div>
            <img src="img/tab-content-2-2.png" alt="" />
            <p className="text-md">Watch instantly or download for later</p>
            <p className="text-dark">
              Available on phone and tablet, wherever you go
            </p>
          </div>

          <div>
            <img src="img/tab-content-2-3.png" alt="" />
            <p className="text-md">Use any computer</p>
            <p className="text-dark">
              Watch right on Netflix.com
            </p>
          </div>
        </div>
      </div>

      <!-- Tab Content 3 -->

    </div>
  </section>

  <footer className="footer">
    <p>All Rights Reserved</p>

  </footer>
  <script src="js/main.js"></script>
</body>
</html> */}