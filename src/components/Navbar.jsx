import {useState} from 'react'
import Logo from './Logo'
import NavItems from './NavItems'
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import Buttons from './Buttons';

const Navbar = () => {
  
  const [mobileMenu, setMobileMenu] = useState(false);  

  function toggleNavbar(){
    setMobileMenu(!mobileMenu);
  }


  return (
    <nav className = "sticky top-0 z-100 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className = " px-4 mx-auto relative text-sm space-x-12">
            <div className = "flex justify-between items-center">
                <div className = "flex items-center flex-shrink-0">
                    <Logo/>
                </div>
                <div className = "hidden lg:flex items-center justify-center gap-60">
                    <NavItems mobile = {false}/>
                    <Buttons/>
                </div>
                <div className = "lg:hidden md:flex flex-col justify-end">
                    <button onClick = {toggleNavbar}>
                        {mobileMenu ?  <IonIcon icon={closeOutline} className="text-2xl" /> :
                            <IonIcon icon={menuOutline} className="text-2xl" />}
                    </button>
                </div>
            </div>
            {mobileMenu && (
                <div className = "fixed right-0 z-50 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden space-y-4">
                    <NavItems mobile = {true}/>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar