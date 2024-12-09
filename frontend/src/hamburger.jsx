import { useEffect, useState } from 'react';
import hamburgerIM from './assets/navbar button.png';
import './index.css';

function Hamburger() {
    const [openSidebar, setOpenSB] = useState(false);
    useEffect(() => {
        const Resize = () => {
            if (openSidebar) {
                setOpenSB(false);
            }
        };

        window.addEventListener('resize', Resize);

        return () => {
            window.removeEventListener('resize', Resize);
        };
    }, [openSidebar]);
    const SideBar = () => {
        return (
        <div className='w-[100%] h-[179vh] flex flex-row absolute'>
            <div className='w-2/5 z-[20] bg-white/[0.7] h-full backdrop-blur-sm flex flex-col gap-[3vh]'>
                <div className='text-center flex flex-col gap-[1vh] items-center justify-center'>
                    <br className='unselectable' />
                    <a href='/' className='unselectable cursor-pointer w-full hover:bg-[#e2ffeb]'>Home</a>
                    <a href='/retete-NL' className='unselectable cursor-pointer w-full hover:bg-[#e2ffeb]'>Recipes</a>
                    <a href='/add-recipe' className='unselectable cursor-pointer w-full hover:bg-[#e2ffeb]'>Add recipes</a>
                </div>
                <div className='text-center flex flex-col gap-[1vh] items-center justify-center'>
                    <a href='/profile' className='unselectable cursor-pointer w-[40%] border border-[#00236D] rounded-md hover:bg-[#e2ffeb] text-center'>Profile</a>
                    <div className='unselectable cursor-pointer w-full hover:bg-[#e2ffeb]'>Logout</div>
                </div>
                <div className='text-center flex flex-col gap-[1vh] items-center justify-center'>
                    <a href='/register' className='unselectable cursor-pointer w-full hover:bg-[#e2ffeb]'>Register</a>
                    <a href='/login' className='unselectable cursor-pointer w-[40%] border border-[#00236D] rounded-md hover:bg-[#e2ffeb] text-center'>Login</a>
                </div>
            </div>
            <div onClick={() => setOpenSB(false)} className='w-3/5 z-[20] bg-white/[0.3] h-full backdrop-blur-sm'></div>
        </div>
        )
    }
    return(
        <div>
            <img onClick={() => setOpenSB((prev) => !prev)} className="hamburgerCSS mt-[2vh] ml-[2vw] cursor-pointer" src={hamburgerIM}/>
            {
                openSidebar && <SideBar/>
            }
        </div>
    )

}

export default Hamburger;