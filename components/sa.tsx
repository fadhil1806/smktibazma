import { Tabs, Tab } from "@nextui-org/react"; // Pastikan komponen di-import dari yang benar
import { useState } from "react";
import CardProject from "./card-project";
import { IconBuilding, IconH1, IconSchool } from "@tabler/icons-react";

const MyComponent = () => {
  return (
    <div className="py-8 ">
      <Tabs
        disabledKeys={["music"]}
        aria-label="Disabled Options"
        variant="underlined"
      >
        <Tab key="photos" title="Photos" />
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  );
};

export default MyComponent;