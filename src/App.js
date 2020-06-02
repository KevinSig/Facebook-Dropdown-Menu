import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chev.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={">"}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={">"}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;






// import React, { useState } from "react";
// import { CSSTransition } from "react-transition-group";

// import { ReactComponent as BellIcon } from "./icons/bell.svg";
// // import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
// import { ReactComponent as PlusIcon } from "./icons/plus.svg";
// import { ReactComponent as Message } from "./icons/messenger.svg";
// import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
// import { ReactComponent as CaretIcon } from "./icons/caret.svg";
// import { ReactComponent as CogIcon } from "./icons/cog.svg";
// import { ReactComponent as ChevIcon } from "./icons/chevron.svg";

// function App() {
//   const [specialColor, setSpecialColor] = useState(null)

//   return (
//     <Navbar>
//       <NavItem setSpecialColor={setSpecialColor} icon={<PlusIcon style ={{fill: specialColor}} />} />
//       <NavItem setSpecialColor={setSpecialColor} icon={<BellIcon style ={{fill: specialColor}} />} />
//       <NavItem setSpecialColor={setSpecialColor} icon={<Message style ={{fill: specialColor}} />} />

//       <NavItem setSpecialColor={setSpecialColor} icon={<CaretIcon style ={{fill: specialColor}}/>} >
//         <DropDownMenu />
//       </NavItem>
//     </Navbar>
//   );
// }

// function Navbar(props) {

//   return (
//     <div className="navbar">
//       <ul className="navbar-nav">{props.children}</ul>
//     </div>
//   );
// }

// function NavItem(props) {
//   const [open, setOpen] = useState(false);


//   return (
//     <li className="nav-item">
//       <a href="#" className="icon-button" onClick={() => {
//         setOpen(!open)
//         if (!open && props.setSpecialColor){
//           props.setSpecialColor('red')
//         } 
//         else props.setSpecialColor(null)
//         }} >
//         {props.icon}
//       </a>
//       {open ? props.children : null}   
//     </li>
//   );
// }

// function DropDownMenu() {
//   const [menu, setMenu] = useState("main");
//   const [menuHeight, setMenuHeight] = useState(null)

//   function calcHeight(el){
//     const height= el.offsetHeight
//     setMenuHeight(height)
//   }

   
//   function DropDownItem(props) {
//     return (
//       <a href="#" className="menu-item" onClick={()=>props.goToMenu && setMenu(props.goToMenu)}>
//         <span className="icon-button">{props.leftIcon}</span>

//         {props.children}
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   }

//   return (
//     <div className="dropdown" style={{height: menuHeight}}>

//       <CSSTransition
//         in={menu === "main"}
//         unmountOnExit
//         timeout={500}
//         classNames="menu-primary"
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropDownItem> My Profile</DropDownItem>
//           <DropDownItem 
//           leftIcon={<CogIcon />} 
//           rightIcon={<ChevIcon />}
//           goToMenu="settings"
//           >
//             Settings
//           </DropDownItem>
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={menu === "settings"}
//         unmountOnExit
//         timeout={500}
//         classNames="menu-secondary"
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <DropDownItem leftIcon={<ArrowIcon/>} goToMenu="main" />
//           <DropDownItem>Settings</DropDownItem>
//           <DropDownItem>Testing</DropDownItem>
//           <DropDownItem>Item2</DropDownItem>
//           <DropDownItem>Item3</DropDownItem>
//           <DropDownItem>Item4</DropDownItem>
//           <DropDownItem>Item5</DropDownItem>
//           <DropDownItem>Item6</DropDownItem>
//         </div> 
//       </CSSTransition>
//     </div>
//   );
// }

// export default App;
