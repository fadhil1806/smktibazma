import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";


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
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};


const InfoCard = () => {
  const items = [
    {
      title: 'Green Building',
      description: 'Elemen hijau pada bangunan sebagai barrier cahaya dan panas matahari',
      icon: '🌱',
    },
    {
      title: 'Blue Area',
      description: 'Tempat budidaya ikan dan sebagai penyejuk alami',
      icon: '💧',
    },
    {
      title: 'Green Area',
      description: 'Ruang terbuka hijau sebagai penyeimbang iklim mikro kawasan',
      icon: '🌿',
    },
    {
      title: 'Passive & Active Energy',
      description: 'Orientasi bangunan utara-selatan, cross ventilation & rainwater harvesting.',
      icon: '💡',
    },
    {
      title: 'Foresteric & Farming',
      description: 'Budidaya hidroponik dan pengolahan limbah menjadi organik',
      icon: '🌾',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FacilityTabs;
export { InfoCard };


