import React, {useState} from "react"
// import { NavLink } from "react-router-dom"
import Topic from "../Navbar/Topic";
import Notes from "./Notes";
import Comment from "./Comment";
import './NavbarTwo.css'

export default function NavbarTwo(){
    const [selectedComponent, setSelectedComponent] = useState('Topic');

    const showComponent = (component) => {
        setSelectedComponent(component);
      };

      return (
        <div>
          <div className="">
            <div className="flex items-center gap-4 border-b border-gray-500 pb-5 font-[700] text-gray-500">
              <button onClick={() => showComponent('Topic')} className={selectedComponent === 'Topic' ? 'active' : ''}>Mavzu</button>
              <button onClick={() => showComponent('Notes')} className={selectedComponent === 'Notes' ? 'active' : ''}>Qaydlar</button>
              <button onClick={() => showComponent('Comment')} className={selectedComponent === 'Comment' ? 'active' : ''}>Izohlar</button>
            </div>
            <div className="mt-[20px]">
              {selectedComponent === 'Topic' && <Topic />}
              {selectedComponent === 'Notes' && <Notes />}
              {selectedComponent === 'Comment' && <Comment />}
            </div>
          </div>
        </div>
      );
}