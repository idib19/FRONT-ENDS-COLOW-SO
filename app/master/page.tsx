"use client";

import { BalanceSection } from "./components/BalanceSection";
import { PartnersSection } from "./components/PartnersSection";
import { ActivitySection } from "./components/ActivitySection";
import { ComplaintsSection } from "./components/ComplaintsSection";

export default function MasterPortal() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">PORTAIL MASTER / GROSSISTE</h1>
        <button className="text-blue-600 hover:text-blue-800">Actualiser</button>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">PRENOMS & NOM</h2>
      </div>
      
      <BalanceSection />
      <PartnersSection />
      <ActivitySection />
      <ComplaintsSection />
    </div>
  );
}