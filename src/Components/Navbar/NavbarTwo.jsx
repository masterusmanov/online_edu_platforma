import React, {useState} from "react"
// import { NavLink } from "react-router-dom"
import Topic from "../Navbar/Topic";
import Notes from "./Notes";
import Comment from "./Comment"

export default function NavbarTwo(){
    const [selectedComponent, setSelectedComponent] = useState(null);

    const showComponent = (component) => {
        setSelectedComponent(component);
      };

      return (
        <div>
          <h1 className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 text-center text-3xl md:text-4xl text-gray-800 font-bold">
            Translation Services
          </h1>
          <div className="">
            <div className="flex items-center gap-4 border-b border-gray-500 p-5">
              <button onClick={() => showComponent('Topic')} className="">Topic</button>
              <button onClick={() => showComponent('Notes')} className="">Notes</button>
              <button onClick={() => showComponent('Comment')} className="">Comment</button>
            </div>
            <div className="">
              {/* Render selected component dynamically */}
              {selectedComponent === 'Topic' && <Topic />}
              {selectedComponent === 'Notes' && <Notes />}
              {selectedComponent === 'Comment' && <Comment />}
             
            </div>
          </div>
        </div>
      );
}