"use client";

import { Card } from "@/components/ui/card";
import { PieChart } from "@/components/charts/PieChart";


export interface ComplaintsSectionProps {
  complaintsData: { status: string; value: number }[];
}

export function ComplaintsSection({ complaintsData }: ComplaintsSectionProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4">Réclamations</h3>
      <div className="text-sm text-muted-foreground mb-2">Date</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          {complaintsData.map((complaint) => (
            <div key={complaint.status} className="flex justify-between">
              <span>{complaint.status}</span>
              <div>
                <span className="mr-2">{complaint.value}</span>
                <button 
                  onClick={() => console.log(`Viewing ${complaint.status}`)} 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Voir &gt;
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t pt-2">
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