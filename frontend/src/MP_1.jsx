import insta from './assets/bi_instagram.png';
import youtube from './assets/Group 10.png';
import wave from './assets/Group 69.png';
import logoH from './assets/Group 89.png';
import fb from './assets/ic_baseline-facebook.png';
import logo from './assets/logo.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import pizza from './assets/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life 1.png';
import twitch from './assets/Vector.png';
import './index.css';


function MP1() {

    return(
        <div>
            <img class="background" src={background_d} />
            <div class="MP">
                <div class="TopBar">
                    <img class="logoHome click" src={logoH}/>
                    <div class="TBR click underline">Recipes</div>
                    <div class="TBAR click underline">Add Recipe</div>
                    <div class="LB click">Login</div>
                    <div class="TBRE click underline">Register</div>
                </div>
                <div class="hamburger"></div>
                <img class="logo" src={logo} />
                <div class="CR">
                    <div class="TRR">Top rated recipes
                        <div class="RBAL">
                            <div class="RB FB1">
                                <img class='pizza' src={pizza}/>
                                <div class="GL"></div>
                                <div class="Post">TEST</div>
                            </div>
                            <div class="RB">
                                <img class='pizza' src={pizza}/>
                                <div class="GL"></div>
                                <div class="Post">TEST</div>
                            </div>
                            <div class="RB FB3">
                                <img class='pizza' src={pizza}/>
                                <div class="GL"></div>
                                <div class="Post">TEST</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ContUs">
                    <div class="titleCU">Contact us</div>
                    <div class="formularCU">
                        <div class="formularDate">
                            <textarea row="1" class="textCU" placeholder='First Name'></textarea>
                            <textarea row="1" class="textCU" placeholder='Last Name'></textarea>
                            <textarea row="1" class="textCU" placeholder='Email'></textarea>
                            <textarea class="formularMT textCU" placeholder='Message'></textarea>
                        </div>
                        <textarea class="formularM textCU" placeholder='Message'></textarea>
                    </div>
                    <div class="submitCU click">Submit</div>
                </div>
                <img class="socials" src={wave} />
                <div class="socialsD">
                    <img class="imgS" src={insta} />
                    <img class="imgS" src={fb} />
                    <img class="imgS" src={youtube} />
                    <img class="imgS" src={twitch} />
                </div>
            </div>
        </div>
    )

}

export default MP1;