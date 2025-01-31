"use client";

import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/charts/BarChart";


export interface ActivitySectionProps {
  totalCardRechargesAmount: number;
  totalCardRechargesFees: number;
  totalCardRechargesCommission: number;
  comissionChartData : { month: string; value: number }[];
}



export function ActivitySection({ totalCardRechargesFees, totalCardRechargesAmount, totalCardRechargesCommission, comissionChartData }: ActivitySectionProps) {
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
              <span>{totalCardRechargesAmount || 0} FCFA</span>
            </div>
            <div className="flex justify-between">
              <span>Total Frais rechargements</span>
              <span>{totalCardRechargesFees || 0} FCFA</span>
            </div>
            <div className="flex justify-between">
              <span>Total Marge sur change (Mark up)</span>
              <span>{totalCardRechargesCommission || 0} FCFA</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Total Commission Colow So (ristourne)</span>
              <span>{totalCardRechargesCommission || 0} FCFA</span>
            </div>
          </div>
        </div>
        
        <div className="h-48">
          <h4 className="text-sm font-semibold mb-2">Evolution mensuelle des commissions</h4>
          <BarChart 
            data={comissionChartData}
            xAxisKey="month"
            valueKey="value"
          />
        </div>
      </div>
    </Card>
  );
}