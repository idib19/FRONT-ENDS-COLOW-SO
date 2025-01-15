"use client";

import { TransferForm } from "./components/TransferForm";

export default function PartnerTransactions() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Transfert d&apos;argent</h1>
      <TransferForm />
    </div>
  );
}