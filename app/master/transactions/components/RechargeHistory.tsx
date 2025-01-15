"use client";

import { Card } from "@/components/ui/card";
import { RechargeHistoryTable } from "./RechargeHistoryTable";
import { RechargeHistoryFilters } from "./RechargeHistoryFilters";

export function RechargeHistory() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Historique des recharges</h2>
      </div>
      <RechargeHistoryFilters />
      <RechargeHistoryTable />
    </Card>
  );
}