import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './header.css'
function Header(){
    return (
        <header className="Apppp-header">
                  
                <div className='body'>
                <section className='contain'>
                  <div className='top-card banner-msg-box form_container msg'>
                    <div className='top-Header'>
                       Let's fight with Hunger!
                    </div>
                    <div className='top-middle'>
                      "If you can't feed a hundred people, then feed just one" <br></br>
                      <div>  - Mother Teresa</div> 
                    </div>
                  </div>
                  <div className="slide" >
                  <Carousel className="slide"  controls={true} keyboard={true} touch={true} interval={3000}>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://www.hindustantimes.com/ht-img/img/2023/10/12/1600x900/IMAGE_1668412117_1697120343435_1697120360867.webp"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-900 home-im"
                            src="https://media.istockphoto.com/id/490399368/photo/group-of-african-black-children-holding-rice-malnutrition-starvation-hunger.jpg?s=612x612&w=0&k=20&c=gJgB17FdZtNKGnqpmjseeiekAZIbbmZODFWnrFth8UA="
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-900 home-im"
                            src="https://media.istockphoto.com/id/1060352544/photo/donate-food-to-hungry-people-concept-of-poverty-and-hunger.jpg?s=170667a&w=0&k=20&c=ZVzRbryeyvivpG5QCf34ipGjwqqbeTzZR2uPRi8Fca0="
                            alt="Third slide"
                          />
                        </Carousel.Item>
                  </Carousel>
                  </div>
                  </section>

                </div>
              </header>

    )
    
}
export default Header;