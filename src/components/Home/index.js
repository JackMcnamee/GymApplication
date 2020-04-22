// import React from 'react';
// import { Link } from 'react-router-dom';
// import render from 'react-dom';
// import Carousel from 'react-bootstrap/Carousel'
// import '../../index.css';

// // Here is the home page of our application

// // const Home = () => (
// //   <div id="inner">
// //     <h1>Welcome to our Gym App!</h1>
// //     <h2>Here you can view our Fitness Classes Schedule,
// //       book a Personal Training Session and 
// //       visit our Store</h2>
// //   </div>
// // );

// const Home = () => {
//   const [index, setIndex] = React.useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="fitnessClass.jpg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="personalTrainer.jpg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="store.jpg"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
// render(<Home />);
// //export default ControlledCarousel;

// export default Home;

import React, { Component } from 'react';  
import Carousel from 'react-bootstrap/Carousel';  
import { HOME } from '../../constants/routes';

export class Home extends Component {  
  render() {  
    return (  
      <div>  
        <div class='container-fluid' >  
          <div className="row title" style={{ marginBottom: "10px" }} >  
            <div class="col-lg-12" id="inner" style={{ backgroundColor: "lightblue", fontSize: '20px' }}>  
            Welcome to our Gym App!
            </div> 
            <div class="col-sm-12" id="inner" style={{ backgroundColor: "lightblue" }}>  
            Here you can view our Fitness Classes Schedule,
            book a Personal Training Session and 
            visit our Store
            </div> 
          </div>  
        </div>  
        <div className='container-fluid' >  
          <Carousel>  
            <Carousel.Item style={{'height':"700px"}} >
              <img style={{'height':"700px"}}  
                className="d-block w-100"  
                src={'personalTrainer.jpg'}  
                /> 
              <Carousel.Caption>  
                <h3>Personal Training</h3>  
              </Carousel.Caption>  
             </Carousel.Item  >  
              <Carousel.Item style={{'height':"700px"}}>  
                <img style={{'height':"700px"}}  
                  className="d-block w-100"  
                  src={'proteinBars.jpeg'}    />  
                <Carousel.Caption>  
                  <h3>Store</h3>  
                </Carousel.Caption>  
              </Carousel.Item>  
              <Carousel.Item style={{'height':"700px"}}>  
                <img style={{'height':"700px"}}  
                className="d-block w-100"  
                  src={'fitnessClass.jpeg'}   />  
                <Carousel.Caption>  
                  <h3>Fitness Classes</h3>  
                </Carousel.Caption>  
            </Carousel.Item>  
          </Carousel>  
        </div>  
      </div>  
    )  
  }  
}  
  
export default Home;  