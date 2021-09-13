import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { isSidebarOpen, SidebarOpen, ModalOpen } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={SidebarOpen}>
        <FaBars
          style={{
            display: isSidebarOpen ? "none" : "",
          }}
        />
      </button>
      <button className="btn" onClick={ModalOpen}>
        show Modal
      </button>
    </main>
  );
};

export default Home;
