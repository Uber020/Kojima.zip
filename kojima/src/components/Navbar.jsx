import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const allTabs = [
    {
        id: "home",
        name: "Home",
    },
    {
        id: "projetos",
        name: "Projetos",
    },
    {
        id: "info",
        name: "Info",
    }
];

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const tabsRef = useRef([]);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    useEffect(() => {
        // Set initial active tab based on current route
        const currentPath = location.pathname.slice(1) || "home";
        const index = allTabs.findIndex(tab => tab.id === currentPath);
        setActiveTabIndex(index >= 0 ? index : 0);
    }, [location]);

    useEffect(() => {
        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        };

        setTabPosition();
    }, [activeTabIndex]);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
        navigate(`/${allTabs[index].id}`);
    };

    return (
        <div className="fixed top-4 w-full flex justify-center">
            <div className="relative flex h-12 rounded-3xl">
            <span
                className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300 ease-out"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            >
                <span className="h-full w-full rounded-3xl bg-[color:var(--h1-color)]" />
            </span>
                {allTabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;

                    return (
                        <button
                            key={index}
                            ref={(el) => (tabsRef.current[index] = el)}
                            className={`my-auto cursor-pointer select-none rounded-full px-4 text-center font-bold
                            ${isActive ? "text-[color:var(--background-color)]" : "text-[color:var(--text-color)]"}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
