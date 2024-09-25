'use client';
import { title } from "@/components/primitives";

import App from "@/components/tabs-logo";


export default function PricingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-7xl flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-1/2 h-1/2">
            <img src="https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png" alt="logo" />
          </div>
          <App />
        </div>
      </div>
    </div>
  );
}
