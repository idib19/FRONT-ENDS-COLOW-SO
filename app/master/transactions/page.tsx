"use client";

import { RechargeForm } from "./components/RechargeForm";
import { RechargeHistory } from "./components/RechargeHistory";

export default function MasterTransactions() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Recharge de compte</h1>
      <div className="space-y-8">
        <RechargeForm />
        <RechargeHistory />
      </div>
    </div>
  );
}