import MB from './assets/Group 70.png';
import logoH from './assets/Group 89.png';
import logo from './assets/logo.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import agrafa from './assets/Vector (1).png';
import Hamburger from './hamburger';
import './index.css';

function ADP() {

    return(
        <div className="unscrollable">
            <img className="background1" src={background_d} />
            <Hamburger/>
            <img className="logo1 unselectable click" src={logo} />
            <div>
                <div className="TopBar">
                    <img className="logoHome click" src={logoH}/>
                    <div className="TBR click Hunderline">Recipes</div>
                    <div className="TBAR click Hunderline">Add Recipe</div>
                    <div className="LB click">Login</div>
                    <div className="TBRE click Hunderline">Register</div>
                </div>
                <div className="boxDef">
                    <div className="LD">
                        <div className="impartire">
                            <input className="inputField" placeholder='Recipe name:'></input>
                        </div>
                        <div className="linieAlb"/>
                        <div className="impartire">
                            <input className="inputField" placeholder='Description:'></input>
                        </div>
                        <div className="linieAlb"/>
                    </div>
                    <div className='UP'><img className='imgBack' src={agrafa}/>Upload photo</div>
                    <div className="BL">Add recipe</div>
                </div>
                <br />
                <img className="imgMB unselectable" src={MB}/>
            </div>
        </div>
    )

}

export default ADP;