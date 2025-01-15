"use client";

import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/charts/BarChart";

const chartData = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 500 },
  { month: 'Apr', value: 450 },
];

export function ActivitySection() {
  return (
    <Card className="p-4 mb-6">
      <h3 className="text-sm font-semibold mb-4">Activité</h3>
      <div className="text-sm text-muted-foreground mb-2">Date et Heure</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Détail Transactions avec Commission</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Rechargements clients</span>
              <span>25 FCFA</span>
            </div>
            <div className="flex justify-between">
              <span>Total Frais rechargements</span>
              <span>1250 FCFA</span>
            </div>
          </div>
        </div>
        
        <div className="h-48">
          <h4 className="text-sm font-semibold mb-2">Evolution mensuelle des commissions</h4>
          <BarChart 
            data={chartData}
            xAxisKey="month"
            valueKey="value"
          />
        </div>
      </div>
    </Card>
  );
}