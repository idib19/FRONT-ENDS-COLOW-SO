"use client";

import { Card } from "@/components/ui/card";
import { PieChart } from "@/components/charts/PieChart";

const complaintsData = [
  { status: 'Traité', value: 30 },
  { status: 'En cours', value: 15 },
  { status: 'Non pris', value: 5 },
];

export function ComplaintsSection() {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4">Réclamations</h3>
      <div className="text-sm text-muted-foreground mb-2">Date</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Traité</span>
            <span className="text-blue-600">Voir &gt;</span>
          </div>
          <div className="flex justify-between">
            <span>En cours de résolution</span>
            <span className="text-blue-600">Voir &gt;</span>
          </div>
          <div className="flex justify-between">
            <span>Non prise en charge</span>
            <span className="text-blue-600">Voir &gt;</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total Réclamations</span>
            <span>{complaintsData.reduce((acc, curr) => acc + curr.value, 0)}</span>
          </div>
        </div>
        
        <div className="h-48">
          <PieChart 
            data={complaintsData}
            dataKey="value"
          />
        </div>
      </div>
    </Card>
  );
}