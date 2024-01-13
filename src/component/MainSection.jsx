import React, { useState } from 'react'
import WordInput from './WordInput';
import Paragraph from './Paragraph';


const MainSection = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="main-body">
            <div className="input-tabs-and-fieldsvariant3">
              <div className="horizontal-tabsword-input">
                <div className={isActive ? 'tab-button-base1': 'tab-button-base'} 
                         onClick={toggleClass} >
                  <div className="text">Word Input</div>
                </div>

                <div className={isActive ? 'tab-button-base': 'tab-button-base1'} 
                    onClick={toggleClass} >
                  <div className="text">Paragraph</div>
                </div>
              </div>
            </div>
            {
              isActive? <Paragraph /> :<WordInput />
            }
          </div>
    </>
  )
}

export default MainSection


   