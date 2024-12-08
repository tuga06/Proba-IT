import logoH from './assets/Group 89.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import './index.css';


function RetetaPageL() {

    return(
        <div>
            <img className="background" src={background_d} />
            <div className="MP">
                <div className="TopBar">
                    <img className="logoHome click" src={logoH}/>
                    <div className="TBR click underline">Recipes</div>
                    <div className="TBAR click underline">Add Recipe</div>
                    <div className="LB click">Login</div>
                    <div className="TBRE click underline">Register</div>
                </div>
                <div className="hamburger">
                </div>
            </div>
        </div>
    )

}

export default RetetaPageL;