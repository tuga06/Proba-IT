import insta from './assets/bi_instagram.png';
import youtube from './assets/Group 10.png';
import wave from './assets/Group 69.png';
import MB from './assets/Group 70.png';
import logoH from './assets/Group 89.png';
import fb from './assets/ic_baseline-facebook.png';
import logo from './assets/logo.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import pizza from './assets/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life 1.png';
import twitch from './assets/Vector.png';
import Hamburger from './hamburger';
import './index.css';


function MP1() {
    return(
        <div>
            <img className="background" src={background_d} />
            <div className='MP'>
                <div className="TopBar">
                    <img className="logoHome click" src={logoH}/>
                    <div className="TBR click Hunderline">Recipes</div>
                    <div className="TBAR click Hunderline">Add Recipe</div>
                    <div className="LB click">Login</div>
                    <div className="TBRE click Hunderline">Register</div>
                </div>
                <Hamburger/>
                <img className="logo" src={logo} />
                <div className="CR">
                    <div className="TRR">Top rated recipes
                        <div className="RBAL">
                            <div className="RB FB1">
                                <img className='pizza' src={pizza}/>
                                <div className="GL"></div>
                                <div className="Post">TEST</div>
                            </div>
                            <div className="RB">
                                <img className='pizza' src={pizza}/>
                                <div className="GL"></div>
                                <div className="Post">TEST</div>
                            </div>
                            <div className="RB FB3">
                                <img className='pizza' src={pizza}/>
                                <div className="GL"></div>
                                <div className="Post">TEST</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ContUs">
                    <div className="titleCU">Contact us</div>
                    <div className="formularCU">
                        <div className="formularDate">
                            <textarea row="1" className="textCU" placeholder='First Name'></textarea>
                            <textarea row="1" className="textCU" placeholder='Last Name'></textarea>
                            <textarea row="1" className="textCU" placeholder='Email'></textarea>
                            <textarea className="formularMT textCU" placeholder='Message'></textarea>
                        </div>
                        <textarea className="formularM textCU" placeholder='Message'></textarea>
                    </div>
                    <div className="submitCU click">Submit</div>
                </div>
                <img className="socials" src={wave} />
                <div className="socialsD">
                    <img className="imgS" src={insta} />
                    <img className="imgS" src={fb} />
                    <img className="imgS" src={youtube} />
                    <img className="imgS" src={twitch} />
                </div>
                <img className="imgMB" src={MB}/>
            </div>
        </div>
    )

}

export default MP1;