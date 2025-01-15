"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TransferFormProps } from "../types";

export function TransactionSection({ formData, setFormData }: TransferFormProps) {
  const exchangeRate = 1.5; // Example rate
  const fees = 500; // Example fees
  
  const amount = parseFloat(formData.amount) || 0;
  const totalAmount = amount + fees;
  const receivingAmount = amount * exchangeRate;

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">INFORMATIONS TRANSACTION</h2>
      <div className="space-y-4">
        <div>
          <Label>N° TRANSACTION *</Label>
          <Input value="À générer automatiquement" disabled />
        </div>
        
        <div>
          <Label>DATE & HEURE *</Label>
          <Input value={new Date().toLocaleString()} disabled />
        </div>
        
        <div>
          <Label>ID CARTE *</Label>
          <Input disabled />
        </div>
        
        <div>
          <Label htmlFor="amount">MONTANT EN FCFA *</Label>
          <Input
            id="amount"
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label>TAUX DE CHANGE *</Label>
          <Input value={`${exchangeRate} (À générer automatiquement + Marge)`} disabled />
        </div>
        
        <div>
          <Label>FRAIS DE RECHARGEMENT *</Label>
          <Input value={fees} disabled />
        </div>
        
        <div>
          <Label>MONTANT A PAYER *</Label>
          <Input value={`${totalAmount} FCFA`} disabled />
        </div>
        
        <div>
          <Label>MONTANT A RECEVOIR ($ CAD)</Label>
          <Input value={`${receivingAmount.toFixed(2)} CAD`} disabled />
        </div>
      </div>
    </Card>
  );
}