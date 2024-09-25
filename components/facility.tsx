import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import CarouselAsrama from './carousel-asrama';
import Banner from './banner';


interface TabItem {
  id: string;
  label: string;
  content: string;
}

const FacilityTabs: React.FC = () => {
  const tabs: TabItem[] = [
    {
      id: "Sekolah",
      label: "Sekolah",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: "Asrama",
      label: "Asrama",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="primary"
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]",
        }}
      >
        {tabs.map((item) => (
          <Tab key={item.id} title={item.label}>
            <CarouselAsrama />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default FacilityTabs;
