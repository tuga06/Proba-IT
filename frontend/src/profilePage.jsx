import bucatar from './assets/1Asset 1 1.png';
import MB from './assets/Group 70.png';
import logoH from './assets/Group 89.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import logo from './assets/logo.png';
import Hamburger from './hamburger';
import './index.css';

function ProfilePage() {

    return(
        <div>
            <img className="background1" src={background_d} />
            <div>
                <div className="TopBar">
                    <img className="logoHome click" src={logoH}/>
                    <div className="TBR click Hunderline">Recipes</div>
                    <div className="TBAR click Hunderline">Add Recipe</div>
                    <div className="TBRE click Hunderline profileFix">Profile</div>
                </div>
                <Hamburger/>
                <img className="logo1 unselectable click" src={logo} />
                <div className="PPage">
                    <div className="boxPPALL">
                        <div className="boxPP1">
                            <div className="LD">
                                <img className="imgBucatar unselectable" src={bucatar}/>
                                <div className="ProfilNume">Gogu Bucatar</div>
                                <div className="linieAlb"/>
                            </div>
                        </div>
                        <div className="boxPP2">
                            <div className="LD">
                                <div className="inputField">E-mail:</div>
                                <div className="linieAlb"/>
                                <div className="inputField">Telephone:</div>
                                <div className="linieAlb"/>
                                <div className="inputField">College group:</div>
                                <div className="linieAlb"/>
                            </div>
                        </div>
                    </div>
                    <div className='BL BLF'>Add a recipe</div>
                </div>
                <img className="imgMB" src={MB}/>
            </div>
        </div>
    )

}

export default ProfilePage;