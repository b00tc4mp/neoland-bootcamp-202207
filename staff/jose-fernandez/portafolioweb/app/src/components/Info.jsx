import './Info.css'
// import IconButton from './Buttons/IconButton'


function Info() {
    return <div className="container Info">
        <section className="container-section about container">
            <div className="img-about">
                <img className='img-about' src="https://i.postimg.cc/m27mLkT4/machupicchu.jpg" alt="" />
            </div>
            <div className="portrait-title">
                <h2>José María Fernández Paredes</h2>
                <h3>Informatic Engineer</h3>
                <h3><a href="https://www.javascript.com/">JavaScript</a></h3>
            </div>
            <ul className='network-icon' aria-hidden="true">
                <li><a href="mailto:yoferpa5@gmail.com"><img className='network-icon--img gmail' src="https://i.postimg.cc/gct42SSH/gmail.png" alt="" /></a></li>
                <li><a href="https://github.com/yoferpatlv"><img className='network-icon--img github' src="https://i.postimg.cc/SRcWdd4J/github-1.png" alt="" /></a></li>
                <li><a href="https://www.instagram.com/jose_chaka/"><img className='network-icon--img instagram' src="https://i.postimg.cc/xjGnrm6Q/instagram-1.png" alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/jos%C3%A9-maria-fern%C3%A1ndez-paredes-551042135/"><img className='network-icon--img linkedin' src="https://i.postimg.cc/fRX2Vcpq/linkedin.png" alt="" /></a></li>
                <li><a href="https://drive.google.com/file/d/1aeZzLuVYKh7uv1DJOr2GmS1yCgu4vA5O/view?usp=sharing"><img className='network-icon--img cv' src="https://i.postimg.cc/pVC4YJ0m/cv-1.png" alt="" /></a></li>
            </ul>
        </section>

        <section className="container-section exp container">
            <div className="info-exp">
                <h1>Biography</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing lit.Nam voluptatem saepe cumque eius, eligendi sunt nesciunt! Incidunt tempore, pariatur libero dolorem reiciendis ipsa, explicabo laborum iusto ducimus quo repellendus architecto.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing lit.Nam voluptatem saepe cumque eius, eligendi sunt nesciunt! Incidunt tempore, pariatur libero dolorem reiciendis ipsa, explicabo laborum iusto ducimus quo repellendus architecto.
                </p>
                <p>My interests lie in solving problems related to large-scale distributed web development and application development.</p>
                <div className='info-exp--details'>
                    <div className="interests">
                        <h3>Interests</h3>
                        <ul className='ul-interests'>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        <ul className='ul-education'>
                            <li>
                                <div className='container-education'>
                                    <img className='network-icon--img graduation' src="https://i.postimg.cc/TPBjJY1P/graduate-cap.png" alt="" />
                                    <div className="description">
                                        <p className='course'>Further Education</p>
                                        <p className='institution'>IE PNP JLR</p>
                                    </div>
                                </div>
                                <div className='container-education'>
                                    <img className='network-icon--img graduation' src="https://i.postimg.cc/TPBjJY1P/graduate-cap.png" alt="" />
                                    <div className="description">
                                        <p className='course'>Further Education</p>
                                        <p className='institution'>IE PNP JLR</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>

                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>
       
        <section className="container-section skills ">
            <div className="container-skills">
                <div className="item--skills one">
                    <h1>Skills</h1>
                </div>
                <div className="item--skills two">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills three">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills four">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills five">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills six">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills seven">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
            </div>

        </section>
        {/* change experience */}
        <section className="container-section experience ">
            <div className="container-experience">
                <div className="item--skills one">
                    <h1>Experience</h1>
                </div>
                <div className="item--skills two">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                <div className="item--skills three">
                    <div className="featurette-icon">
                        <img className='featurette-icon--img' src="https://i.postimg.cc/Kj3ZZ6RH/js.png" alt="" />
                    </div>
                    <h3>JavaScript</h3>
                    <p>Express.js, React.js</p>
                </div>
                
            </div>

        </section>

    </div>
}
export default Info