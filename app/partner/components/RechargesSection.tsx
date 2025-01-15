"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RechargesSection() {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4">Recharges</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Montant</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Entrez le montant"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Type de recharge</label>
            <select className="w-full p-2 border rounded">
              <option>UV</option>
              <option>FCFA</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" className="mr-2">Annuler</Button>
          <Button>Recharger</Button>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Historique des recharges</h4>
          <div className="border rounded divide-y">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-2 flex justify-between items-center">
                <div>
                  <div className="font-medium">Recharge UV</div>
                  <div className="text-sm text-muted-foreground">20/03/2024</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">10,000 UV</div>
                  <div className="text-sm text-green-600">Complété</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}