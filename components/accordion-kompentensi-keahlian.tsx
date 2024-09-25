import { Accordion, AccordionItem } from "@nextui-org/react";


export default function KompotensiKeahlian() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion defaultExpandedKeys={["2"]}>
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title={
        <h1 className="text-lg font-bold text-blue-800">SIJA (Sistem Informatika, Jaringan dan Aplikasi)</h1>
      }>
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle={
          <span>
            Press to expand 
          </span>
        }
        title={
            <h1 className="text-lg font-bold text-blue-800">Apa saja yang dipelajari</h1>
          }
              >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title={
        <h1 className="text-lg font-bold text-blue-800">Peluang kerja SIJA</h1>
      }>
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}