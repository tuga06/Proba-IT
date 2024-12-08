import logoH from './assets/Group 89.png';
import background_d from './assets/Mesa de trabajo 1 1.png';
import './index.css';


function RetetaPageNL() {

    return(
        <div>
            <img className="background" src={background_d} />
            <div>
                <div className="TopBar">
                    <img className="logoHome click" src={logoH}/>
                    <div className="TBR click Hunderline">Recipes</div>
                    <div className="TBAR click Hunderline">Add Recipe</div>
                    <div className="LB click">Login</div>
                    <div className="TBRE click Hunderline">Register</div>
                </div>
                <div className="hamburger">
                </div>
                <div className='retetaSel'>
                    <input placeholder='Search' className='retetaSearch'></input>
                    <img className='lupa' src={lupa}/>
                </div>
                <div className='dropDownuri'>
                    <Filter/>
                    <Sort/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )

}

export default RetetaPageNL;