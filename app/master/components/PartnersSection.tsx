"use client";

import { Card } from "@/components/ui/card";

export function PartnersSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-2">Partenaires</h3>
        <div className="text-sm text-muted-foreground">Date et Heure</div>
        <div className="border rounded p-2 mt-1 flex justify-between items-center">
          <span>4 partenaires en rupture</span>
          <span className="text-blue-600 text-sm">Voir &gt;</span>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="text-sm text-muted-foreground">Date et Heure</div>
        <div className="border rounded p-2 mt-1 flex justify-between items-center">
          <span>Commission totale: 7500 FCFA</span>
          <span className="text-blue-600 text-sm">Voir &gt;</span>
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="text-sm text-muted-foreground">Date et Heure</div>
        <div className="border rounded p-2 mt-1 flex justify-between items-center">
          <span>Total rechargements: 50 </span>
          <span className="text-blue-600 text-sm">Voir &gt;</span>
        </div>
      </Card>
    </div>
  );
}