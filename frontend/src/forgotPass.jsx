import MB from './assets/Group 70.png';
import logoH from './assets/Group 89.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import logo from './assets/logo.png';
import mail from './assets/mail.png';
import './index.css';


function ForgotPassPage() {

    return(
        <div className="unscrollable">
            <img className="background" src={background_d} />
            <img className="logo1 unselectable click" src={logo} />
            <div>
                <div className="TopBar">
                    <img className="logoHome click" src={logoH}/>
                    <div className="TBR click underline">Recipes</div>
                    <div className="TBAR click underline">Add Recipe</div>
                    <div className="LB click">Login</div>
                    <div className="TBRE click underline">Register</div>
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