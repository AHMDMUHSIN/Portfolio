import React from 'react'
import './index.scss'
import './swiper.css'
import { FaInstagram } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";


const Index = () => {
  







  return (
    <div>
        <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">AHMD</a>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item ">
                        <a href="#home" className="nav__link">
                            <i className='bx bx-home'></i>
                        </a>
                    </li>

                    <li className="nav__item ">
                        <a href="#about" className="nav__link">
                            <i className='bx bx-user'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className='bx bx-book'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#work" className="nav__link">
                            <i className='bx bx-briefcase-alt-2'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className='bx bx-message-square-dots'></i>
                        </a>
                    </li>
                </ul>
            </div>

           
            {/* <i className='bx bx-moon change-theme change-theme-button' id="theme-button"></i> */}

        </nav>
    </header>

    {/* <!--=============== MAIN ===============--> */}
    <main className="main">
        {/* <!--=============== HOME ===============--> */}
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                   
                    <h1 className="home__name">AHAMMED MUHSIN</h1>
                    
                    <h3 className="home__education">Mern Stack Developer</h3>

                    <div className="home__button">
                        <a download="" href="" className="button button--ghost">
                            Download CV
                        </a>

                        <a href="#about" className="button">About</a>
                    </div>
                </div>

            

                <div className="home__handle">
                    <img src="../IMG_2124_3-removebg-preview-removebg-preview.png" alt="" className="home__img"/>
                </div>

                <div className="home__social">
                    <a href="#" target="_blank" className="home__social-link">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="https://github.com/AHMDMUHSIN" target="_blank" className="home__social-link" >
                        <i className='bx bxl-github'></i>
                    </a>
                    {/* <a href="#" target="_blank" className="home__social-link">
                        <i className='bx bxl-dribbble'></i>
                    </a> */}
                </div>

                <a href="#about" className="home__scroll">
                    <i className='bx bx-mouse home__scroll-icon'></i>
                    <span className="home__scroll-name">Scroll Down</span>
                </a>
            </div>
        </section>

      


        {/* <!--=============== ABOUT ===============--> */}
        <section className="about section" id="about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img src="assets/img/about.jpg" alt="" className="about__img"/>

                <div className="about__data">
                    <div className="about__info">
                        <div className="about__box">
                            <i className='bx bx-award about__icon'></i>
                            <h3 className="about__title">Experience</h3>
                            <span className="about__subtitle">6 month internship</span>
                        </div>
                        <div className="about__box">
                            <i className='bx bx-briefcase-alt about__icon'></i>
                            <h3 className="about__title">Completed</h3>
                            <span className="about__subtitle">10+ Projects</span>
                        </div>
                        <div className="about__box">
                            {/* <i className='bx bx-support about__icon'></i> */}
                            <FaUsers className='about__icon'/>
                            <h3 className="about__title">Clients</h3>
                            <span className="about__subtitle">10+ Happy Clients</span>
                        </div>
                    </div>

                    <p className="about__description">
                        
A MERN stack developer specializes in web development using MongoDB, Express.js, React.js, and Node.js technologies, seamlessly integrating the entire stack to build dynamic and efficient full-stack applications. With expertise in both front-end and back-end development, MERN stack developers create robust, scalable, and responsive web solutions.
                    </p>

                    <a href="#contact" className="button about__button-contact">Contact Me</a>
                </div>
            </div>
        </section>

        {/* <!--=============== SKILLS ===============--> */}
        <section className="skills section" id="skills">
            <span className="section__subtitle">My Abilities</span>
            <h2 className="section__title">My Experience</h2>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">Frontend Development</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">CSS/SCSS</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">Backend Development</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Node JS</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                            {/* <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div> */}

                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">MySQL</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                        <div className="skills__group">
                            {/* <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div> */}

                            {/* <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div> */}

                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">Mongo DB</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
      </section>

        {/* <!--=============== SERVICES ===============--> */}
        <section className="services section">
            <span className="section__subtitle">My Services</span>
            <h2 className="section__title">What I Offer</h2>

            <div className="services__container container grid">
                <div className="services__card">
                    <div className="serv">
                        <h3 className="services__title">Product <br/> Designing</h3>

                        <span className="services__button">
                            See More <i className='bx bx-right-arrow services__icon'></i>
                        </span>
                    </div>


                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className='bx bx-x services__modal-close'></i>

                            <h3 className="services__modal-title">Product Designing</h3>

                            <p className="services__modal-description">
                                I design and develop the consumer products with creative ability and
                                hands-on approach which stisfies the customers' and markets' needs and trends.
                            </p>

                            <ul className="services__modal-list">
                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I develop the user interfaces.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        Web Page design and development.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I create the UX element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        Create modern 3-D experiences.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__card">
                    <h3 className="services__title">UI/UX <br/> Designing</h3>

                    <span className="services__button">
                        See More <i className='bx bx-right-arrow services__icon'></i>
                    </span>

                    <div className="services__modal" >
                        <div className="services__modal-content">
                            <i className='bx bx-x services__modal-close'></i>

                            <h3 className="services__modal-title">UI/UX Designing</h3>

                            <p className="services__modal-description">
                                I design and develop the consumer products with creative ability and
                                hands-on approach which stisfies the customers' and markets' needs and trends.
                            </p>

                            <ul className="services__modal-list">
                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I develop the user interfaces.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        Web Page design and development.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I create the UX element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        Create modern 3-D experiences.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__card">
                    <h3 className="services__title">Visual <br/> Designing</h3>

                    <span className="services__button">
                        See More <i className='bx bx-right-arrow services__icon'></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className='bx bx-x services__modal-close'></i>

                            <h3 className="services__modal-title">Visual Designing</h3>

                            <p className="services__modal-description">
                                I design and develop the consumer products with creative ability and
                                hands-on approach which stisfies the customers' and markets' needs and trends.
                            </p>

                            <ul className="services__modal-list">
                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I develop the user interfaces.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        Web Page design and development.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I create the UX element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-item">
                                    <i className='bx bx-check-circle'></i>
                                    <p className="services__modal-info">
                                        Create modern 3-D experiences.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!--=============== WORK ===============--> */}
        <section className="work section" id="work">
            {/* <span className="section__subtitle">My Portfolio</span> */}
            <h2 className="section__title">Projects</h2>

            {/* <div className="work__filters">
                <span className="work__item active-work" data-filter='all'>All</span>
                <span className=" work__item" data-filter='.web'>Web</span>
                <span className=" work__item" data-filter='.movil'>Movil</span>
                <span className=" work__item" data-filter='.design'>Design</span>
            </div> */}

            <div className="work__container ">
                <div className="work__card mix web">
                    <img src="../Screenshot 2024-01-15 at 12.58.05 PM.jpeg" alt="" className="work__img"/>

                    <h3 className="work__title">E-Commerce Application </h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow work__icon'></i>
                    </a>
                </div>

                <div className="work__card mix movil">
                    <img src="../../../public/Screenshot 2024-01-15 at 2.25.26 PM.png" alt="" className="work__img"/>

                    <h3 className="work__title">College Management Website</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow work__icon'></i>
                    </a>
                </div>

                <div className="work__card mix design">
                    <img src="../../../public/Screenshot 2024-01-15 at 2.34.16 PM.png" alt="" className="work__img"/>

                    <h3 className="work__title">Portfolio</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow work__icon'></i>
                    </a>
                </div>

                

            </div>
        </section>

        {/* <!--=============== TESTIMONIALS ===============--> */}
        {/* <section className="testimonial section">
            <span className="section__subtitle">My clients say</span>
            <h2 className="section__title">Testimonials</h2>

            <div className="testimonial__container container swiper">
                <div className="swiper-wrapper">
                    <div className="testimonial__card swiper-slide">
                        <img src="assets/img/testimonial1.png" alt="" className="testimonial__img"/>

                        <h3 className="testimonial__name">Jhon Doe</h3>
                        <p className="testimonial__description">
                            A really good job, all aspects of the project were done well.
                            Very creative and thoughtful. I was very impressed and would recommend this to anyone.
                        </p>
                    </div>

                    <div className="testimonial__card swiper-slide">
                        <img src="assets/img/testimonial2.png" alt="" className="testimonial__img"/>

                        <h3 className="testimonial__name">Ada Hill</h3>
                        <p className="testimonial__description">
                            A really good job, all aspects of the project were done well.
                            Very creative and thoughtful. I was very impressed and would recommend this to anyone.
                        </p>
                    </div>

                    <div className="testimonial__card swiper-slide">
                        <img src="assets/img/testimonial3.png" alt="" className="testimonial__img"/>

                        <h3 className="testimonial__name">Jessica Park</h3>
                        <p className="testimonial__description">
                            A really good job, all aspects of the project were done well.
                            Very creative and thoughtful. I was very impressed and would recommend this to anyone.
                        </p>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </section> */}

        {/* <!--=============== CONTACT ===============--> */}
        <section className="contact section" id="contact">
            <sapn className="section__subtitle">Get in touch</sapn>
            <h3 className="section__title">Contact Me</h3>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title contact__title-info">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className='bx bx-mail-send contact__card-icon'></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">zanmuhsin11@gmail.com</span>

                            <a href="mailto:zanmuhsin11@gmail.com" target="_blank" className="contact__button">
                                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className='bx bxl-whatsapp contact__card-icon'></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">7025446512</span>

                            <a href="https://api.whatsapp.com/send?phone=+919645924260&text=Hey there!" target="_blank"
                                className="contact__button">
                                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            
                            <FaInstagram  className='contact__card-icon'/>
                            <h3 className="contact__card-title">instagram</h3>
                            <span className="contact__card-data"></span>

                            <a href="https://www.instagram.com/muhsin_zan/?next=%2F" target="_blank" className="contact__button">
                                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title contact__title-form">Write Me your Message</h3>

                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            <label for="" className="contact__form-tag">Name</label>
                            <input type="text" placeholder="Enter name" className="contact__form-input"/>
                        </div>

                        <div className="contact__form-div">
                            <label for="" className="contact__form-tag">Mail</label>
                            <input type="text" placeholder="Enter email" className="contact__form-input"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label for="" className="contact__form-tag">Message</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Write your Message"
                                className="contact__form-input "></textarea>
                        </div>


                        <button className="button">
                            Send Message
                        </button>
                    </form>

                </div>
</div>
        </section>
    </main>

    {/* <!--=============== FOOTER ===============--> */}
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">AHMD</h1>

            <ul className="footer__list">

                <li className="footer__item">
                    <a href="#" className="footer__link">Home</a>
                </li>
                <li className="footer__item">
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li className="footer__item">
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li className="footer__item">
                    <a href="#work" className="footer__link">Work</a>
                </li>
                <li className="footer__item">
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <ul className="footer__social">
                <li className="footer__social-item">
                    <a href="#" target="_blank" className="footer__social-link">
                        <i className='bx bxl-facebook footer__social-icon'></i>
                    </a>
                </li>
                {/* <li className="footer__social-item">
                    <a href="#" target="_blank" className="footer__social-link">
                        <i className='bx bxl-twitter footer__social-icon'></i>
                    </a>
                </li> */}
                <li className="footer__social-item">
                    <a href="#" target="_blank" className="footer__social-link">
                        <i className='bx bxl-linkedin footer__social-icon'></i>
                    </a>
                </li>
                <li className="footer__social-item">
                    <a href="#" target="_blank" className="footer__social-link">
                        <i className='bx bxl-instagram footer__social-icon'></i>
                    </a>
                </li>
            </ul>

            <span className="footer__copy">
                &#169; 2024 AHMD. All rights reserved.
            </span>
        </div>
    </footer>


    </div>
  )
}

export default Index
