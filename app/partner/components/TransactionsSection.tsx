"use client";

import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/charts/BarChart";

const chartData = [
  { month: 'Jan', value: 250 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 200 },
  { month: 'Apr', value: 350 },
];

export function TransactionsSection() {
  return (
    <Card className="p-4 mb-6">
      <h3 className="text-sm font-semibold mb-4">Transactions</h3>
      <div className="text-sm text-muted-foreground mb-2">Date et Heure</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Détail des Transactions</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Rechargements</span>
              <span>XXX</span>
            </div>
            <div className="flex justify-between">
              <span>Total Commissions</span>
              <span>XXX</span>
            </div>
            <div className="flex justify-between">
              <span>Commissions en attente</span>
              <span>XXX</span>
            </div>
          </div>
        </div>
        
        <div className="h-48">
          <h4 className="text-sm font-semibold mb-2">Evolution des transactions</h4>
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