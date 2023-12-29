import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faGlobe,
  faPerson,
  faMagnifyingGlass,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
import './container.css';
export default function Box() {
  return (
    <div>
      <div className='box'>
        <div className='box-child'>
          <div className='icons'>
            <FontAwesomeIcon icon={faPerson} size='lg' />
          </div>
          <div className='box-child-2'>
            <h2>COLLABORATIVE ENVIOURMENT</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla quasi labore,
            suscipit inventore quo, ut impedit consequatur id velit esse aliquid maxime vitae
            veritatis, sit debitis delectus ex iure?
          </div>
        </div>
        <div className='box-child'>
          <div className='icons'>
            <FontAwesomeIcon icon={faCompass} size='lg' />
          </div>
          <div className='box-child-2'>
            <h2>UNIQUE OPPURTUNITY FOR DEVELOPEMENT</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla quasi labore,
            suscipit inventore quo, ut impedit consequatur id velit esse aliquid maxime vitae
            veritatis,?
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='box-child'>
          <div className='icons'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' />
          </div>
          <div className='box-child-2'>
            <h2>OPPURTUNITY TO LEARN FROM EXPERTS</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla quasi labore,
            suscipit inventore quo, ut impedit consequatur id velit esse aliquid maxime vitae
            veritatis, sit debitis delectus ex iure?
          </div>
        </div>
        <div className='box-child'>
          <div className='icons'>
            <FontAwesomeIcon icon={faGlobe} size='lg' />
          </div>
          <div className='box-child-2'>
            <h2>GATHERING FOR CYBER SECURITY EVENTS</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla quasi labore,
            suscipit inventore quo, ut impedit consequatur id velit esse aliquid maxime vitae
            veritatis, sit debitis delectus ex iure?
          </div>
        </div>
      </div>
    </div>
  );
}
