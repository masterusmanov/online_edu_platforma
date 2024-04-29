import React, {useState} from "react"
// import { NavLink } from "react-router-dom"
import Topic from "../Navbar/Topic";
import Notes from "./Notes";
import Comment from "./Comment"

export default function NavbarTwo(){
    const [selectedComponent, setSelectedComponent] = useState('Topic');

    const showComponent = (component) => {
        setSelectedComponent(component);
      };

      return (
        <div>
          <div className="">
            <div className="flex items-center gap-4 border-b border-gray-500 pb-5">
              <button onClick={() => showComponent('Topic')} className="">Topic</button>
              <button onClick={() => showComponent('Notes')} className="">Notes</button>
              <button onClick={() => showComponent('Comment')} className="">Comment</button>
            </div>
            <div className="mt-[20px]">
              {/* Render selected component dynamically */}
              {selectedComponent === 'Topic' && <Topic />}
              {selectedComponent === 'Notes' && <Notes />}
              {selectedComponent === 'Comment' && <Comment />}
            </div>
          </div>
        </div>
      );
}