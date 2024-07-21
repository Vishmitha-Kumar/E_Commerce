import React from "react";
import Navb from "./Navb";
import { UncontrolledCarousel,Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Home.css';
import Offer from '../Images/Offer.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const items = [

  {

    src: "https://www.wonderchef.com/cdn/shop/collections/f9e1b096b400200d93012c53dc272f40_f58fd6ac-2485-4eeb-8621-9d31843ef45d_1600x.png?v=1585723477",


    key: '1'

  },

  {

    src: "https://marketplace.canva.com/EAEjmjyYpho/1/0/1600w/canva-red-%26-white-fresh-fruit-shop-etsy-cover-fDaJMKt8u2c.jpg",

   

    key: '2'

  },

  {

    src: "https://jsdagro.com/assets/images/category_image/637eb1075f30d1.jpg",

    

    key: '3'

  }

];

function Home(){
  return(
    <>
      <Navb/>
      <UncontrolledCarousel items={items} />
      <div className="cards">
        <h4 style={{margin:'50px',fontWeight:'bolder',fontStyle:"initial"}}>More Popular</h4>
      <Container>
  <Row >
    <Col md={3}>
    <div class="card">
  <div class="content">
    <div class="front">
      <img src="https://static.wixstatic.com/media/c837a6_54f3e8f5b6ed4a6a92a3e7e72c45c6c0~mv2.png/v1/fill/w_338,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_99478112_2.png" style={{marginTop:'21px'}}/>
   
    </div>
      
   
  </div>
</div>
<Button color="primary"  style={{width:'50%',borderRadius:'20px',marginLeft:'20%'}}>Vegetables</Button>
</Col>
<Col md={3}>
    <div class="card">
  <div class="content">
    <div class="front">
      <img src="https://static.wixstatic.com/media/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.jpg"/>
   
    </div>
      
   
  </div>
</div>
<Button color="primary"  style={{width:'50%',borderRadius:'20px',marginLeft:'20%'}}>Fruits</Button>
</Col>
    <Col md={3}>
    <div class="card">
  <div class="content">
    <div class="front">
      <img src="https://static.wixstatic.com/media/c837a6_abb1edf28a6a491bbe4c32716989b044~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_abb1edf28a6a491bbe4c32716989b044~mv2.jpg"/>
   
    </div>
      
   
  </div>
</div>
<Button color="primary"  style={{width:'50%',borderRadius:'20px',marginLeft:'20%'}}>Meat</Button>
</Col>
    <Col md={3}>
    <div class="card">
  <div class="content">
    <div class="front">
      <img src="https://static.wixstatic.com/media/c837a6_f5efa954aaab4579816a29703d8ab59f~mv2.png/v1/fill/w_354,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_136358678.png" style={{marginTop:'29px'}}/>
   
    </div>
      
   
  </div>
</div>
<Button color="primary"  style={{width:'50%',borderRadius:'20px',marginLeft:'20%'}}>Dairy & Eggs</Button>
</Col>
  </Row>
</Container>
</div>
  <div>
    <Container>
      <h4 style={{ margin: '50px', fontWeight: 'bolder', fontStyle: 'initial' }}>Start your cart</h4>

      <ul>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Banana Bunch</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.30</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Whole Milk Gallon</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.80</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Natural Large White Egg</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.40</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_1fde242af834408c814fdbec3a1c7bd0~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_1fde242af834408c814fdbec3a1c7bd0~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Whole Wheat Bread</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.45</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Cucumber</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>1kg--Price: Rs.45</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Tomatoes</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>1kg--Price: Rs.85</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </Container>
    </div>
    <div>
      <img src="https://infoemsolutions.com/jana/3.jpg"  width='100%'/>
    </div>
    <div>
    <Container>
      <h4 style={{ margin: '50px', fontWeight: 'bolder', fontStyle: 'initial' }}>Shop Fresh Finds</h4>

      <ul>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Hash Avocados</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>1kg--Price: Rs.130</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Whole Milk Gallon</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.80</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Natural Large White Egg</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.40</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_1fde242af834408c814fdbec3a1c7bd0~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_1fde242af834408c814fdbec3a1c7bd0~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Whole Wheat Bread</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>Price: Rs.45</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Cucumber</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>1kg--Price: Rs.45</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="booking" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg/v1/fill/w_257,h_257,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg)' }}>
          <div className="book-container">
            <div className="content">
              <button className="btn">Add to cart</button>
            </div>
          </div>
          <div className="informations-container">
            <h2 className="titlebook">Tomatoes</h2>
            <p className="price" />
            <div className="more-information">
              <div className="info-and-date-container">
                <div className="box info">
                  <p>1kg--Price: Rs.85</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </Container>
    </div>
    </>
  );
}
export default Home;