"use client";

import { Card } from "@/components/ui/card";

export function BalanceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-2">Solde UV</h3>
        <div className="text-sm text-muted-foreground">Date et Heure</div>
        <div className="border rounded p-2 mt-1">12345</div>
      </Card>
      
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-2">Solde en FCFA</h3>
        <div className="text-sm text-muted-foreground">Date et Heure</div>
        <div className="border rounded p-2 mt-1">67890</div>
      </Card>
      
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-2">Rechargements Colow So</h3>
        <div className="text-sm text-muted-foreground">Date</div>
        <div className="border rounded p-2 mt-1 flex justify-between items-center">
          <span>10000</span>
          <span className="text-blue-600 text-sm">Voir &gt;</span>
        </div>
      </Card>
    </div>
  );
}