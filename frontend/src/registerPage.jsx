import MB from './assets/Group 70.png';
import logoH from './assets/Group 89.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import lock from './assets/_x34_78_x2C__Lock_x2C__Password_x2C__Password_Lock_x2C__Secure_Password_1_.png';
import logo from './assets/logo.png';
import mail from './assets/mail.png';
import person from './assets/person.png';
import phone from './assets/phone.png';
import Hamburger from './hamburger';
import './index.css';


function RegisterPage() {

    return(
        <div className="unscrollable">
            <img className="background1" src={background_d} />
            <Hamburger/>
            <img className="logo1 unselectable click" src={logo} />
            <div>
                <div className="TopBar">
                    <img onClick={() => {window.location.href="/"}} className="logoHome click" src={logoH}/>
                    <a href='/retete-NL' className="TBR click Hunderline">Recipes</a>
                    <a href='/add-recipe' className="TBAR click Hunderline">Add Recipe</a>
                    <a href='/login' className="LB click">Login</a>
                    <a href='/register' className="TBRE click Hunderline">Register</a>
                </div>
                <div className="boxDef">
                    <div className="boxTitle">Hai, fă foamea cu noi!</div>
                    <div className="LD">
                        <div className="impartire">
                            <img className="imgBack" src={person}/>
                            <input className="inputField" placeholder='Full name'></input>
                        </div>
                        <div className="linieAlb"/>
                        <div className="impartire">
                            <img className="imgBack" src={phone}/>
                            <input className="inputField" placeholder='Telephone'></input>
                        </div>
                        <div className="linieAlb"/>
                        <div className="impartire">
                            <img className="imgBack" src={mail}/>
                            <input className="inputField" placeholder='E-mail'></input>
                        </div>
                        <div className="linieAlb"/>
                        <div className="impartire">
                            <img className="imgBack" src={lock}/>
                            <input className="inputField" placeholder='Password' type="password"></input>
                        </div>
                        <div className="linieAlb"/>
                        <div className="impartire">
                            <img className="imgBack" src={lock}/>
                            <input className="inputField" placeholder='Confirm Password' type="password"></input>
                        </div>
                        <div className="linieAlb"/>
                    </div>
                    <div className="BL">Sign up</div>
                </div>
                <img className="imgMB unselectable" src={MB}/>
            </div>
        </div>
    )

}

export default RegisterPage;