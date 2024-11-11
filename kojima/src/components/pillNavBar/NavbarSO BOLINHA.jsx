import { Tab, TabGroup, TabList } from "@headlessui/react"
import { useNavigate } from "react-router-dom"

export default function NavbarSOBOLINHA() {
    const navigate = useNavigate();

    // Define the array with a specific type
    const tabs: string[] = ['Home', 'Professional', 'About'];

    return (
        <div className="flex h-screen w-full justify-center pt-24 px-4">
            <div className="w-full max-w-md">
                <TabGroup onChange={(index) => {
                    navigate(`/${tabs[index].toLowerCase()}`);
                }}>
                    <TabList className="flex gap-4">
                        {tabs.map((name: string) => (
                            <Tab
                                key={name}
                                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                </TabGroup>
            </div>
        </div>
    )
}
