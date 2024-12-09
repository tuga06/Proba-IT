import MB from './assets/Group 70.png';
import logoH from './assets/Group 89.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import logo from './assets/logo.png';
import mail from './assets/mail.png';
import Hamburger from './hamburger';
import './index.css';

function ForgotPassPage() {

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
                            <img className="imgBack" src={mail}/>
                            <input className="inputField" placeholder='E-mail'></input>
                        </div>
                        <div className="linieAlb"/>
                    </div>
                    <div className="BL">Send</div>
                </div>
                <br className='unselectable' />
                <br className='unselectable' />
                <br className='unselectable' />
                <img className="imgMB unselectable" src={MB}/>
            </div>
        </div>
    )

}

export default ForgotPassPage;