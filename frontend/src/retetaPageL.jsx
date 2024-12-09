import logoH from './assets/Group 89.png';
import logo from './assets/logo.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import lupa from './assets/Vector (3).png';
import Hamburger from './hamburger';
import './index.css';
import { Filter, Sort } from './PopUps';
import CardReteta from './retetaCard';


function RetetaPageL() {

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
                <div className='retetaSel'>
                    <input placeholder='Search' className='retetaSearch'></input>
                    <img className='lupa' src={lupa}/>
                </div>
                <div className='dropDownuri'>
                    <Filter/>
                    <Sort/>
                </div>
                <div className='items-center justify-center flex flex-wrap absolute mt-[40vh] ml-[10%] w-[82%] md:gap-12 gap-4'>
                    <CardReteta />
                    <CardReteta />
                    <CardReteta />
                    <CardReteta />
                    <CardReteta />
                    <CardReteta />
                    <CardReteta />
                    <CardReteta />
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )

}

export default RetetaPageL;