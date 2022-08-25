import './App.css';
import TopNavbar from './Layout/TopNavbar/TopNavbar';
import HomePage from './Pages/HomePage/HomePage';
import  Img1  from './Utility/Images/img1.jpg'
import  Img2  from './Utility/Images/img2.jpg'
import  Img3  from './Utility/Images/img3.png'


function App() {

  return (
    <div className="App">
      <TopNavbar />
      <HomePage />
      <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Img1} className="d-block " alt="..." width='600px' height="600px" />
            </div>
            <div className="carousel-item">
              <img src={Img2} className="d-block " alt="..." width='600px' height="600px" />
            </div>
            <div className="carousel-item">
              <img src={Img3} className="d-block" alt="..." width='100px' height="600px" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    </div>
  );
}

export default App;

