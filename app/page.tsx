// app/page.tsx
import React from "react";
import { BioSection } from "@/components/home/bioSection";
import { Technologies } from "@/components/home/technologies";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center mt-16 xl:ml-48">
      <BioSection />
      <Technologies/>
    </div>
  );
}
