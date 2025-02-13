"use client";

import { LoadCardForm } from "./components/LoadCardForm";
import { LoadCardHistory } from "./components/LoadCardHistory";

export default function LoadCardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Chargement de carte</h1>
      <div className="space-y-8">
        <LoadCardForm />
        
        <LoadCardHistory />
      </div>
    </div>
  );
}