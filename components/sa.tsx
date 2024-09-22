import { Tabs, Tab } from "@nextui-org/react"; // Pastikan komponen di-import dari yang benar
import { useState } from "react";
import CardProject from "./card-project";
import { IconBuilding, IconSchool } from "@tabler/icons-react";

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('sekolah'); // Default 'sekolah'

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Fasilitas Kami
      </h1>

      {/* Tabs for navigation */}
      <Tabs
        variant="underlined"
        color="primary"
        aria-label="Tabs variants"
        onChange={(key: unknown) => setActiveTab(key as string)} // Set active tab based on key
      >
        <Tab
          key="sekolah"
          title={
            <div className="flex items-center space-x-2">
              <IconSchool />
              <span className="text-sm font-medium">Sekolah</span>
            </div>
          }
        />
        <Tab
          key="asrama"
          title={
            <div className="flex items-center space-x-2">
              <IconBuilding />
              <span className="text-sm font-medium">Asrama</span>
            </div>
          }
        />
      </Tabs>

      {/* Conditional rendering based on active tab */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {activeTab === 'sekolah' && (
          <>
            {/* Cards related to Sekolah */}
            <CardProject />
            {/* Add more cards as needed */}
          </>
        )}

        {activeTab === 'asrama' && (
          <>
            {/* Cards related to Asrama */}
            {/* Add more cards as needed */}
          </>
        )}
      </div>
    </div>
  );
};

export default MyComponent;
