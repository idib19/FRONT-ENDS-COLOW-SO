"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SenderSection } from "./SenderSection";
import { RecipientSection } from "./RecipientSection";
import { TransactionSection } from "./TransactionSection";
import { TransferFormData } from "../types";

export function TransferForm() {
  const [formData, setFormData] = useState<TransferFormData>({
    // Sender Info
    senderFirstName: "",
    senderLastName: "",
    senderCNI: "",
    senderCity: "",
    senderPhone: "",
    senderEmail: "",
    
    // Recipient Info
    recipientFirstName: "",
    recipientLastName: "",
    recipientProvince: "",
    recipientCity: "",
    recipientPhone: "",
    recipientReason: "",
    
    // Transaction Info
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SenderSection formData={formData} setFormData={setFormData} />
        <RecipientSection formData={formData} setFormData={setFormData} />
        <TransactionSection formData={formData} setFormData={setFormData} />
      </div>
      
      <div className="mt-6 flex justify-end gap-4">
        <Button variant="outline" type="button">Annuler</Button>
        <Button type="submit">Envoyer</Button>
      </div>
    </form>
  );
}