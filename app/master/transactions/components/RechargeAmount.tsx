"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RechargeFormProps } from "../types";

// First, define the allowed recharge types
type RechargeType = "uv" | "fcfa";

// Update your form data interface
interface FormData {
  amount: string;
  rechargeType: RechargeType;
}

export function RechargeAmount({ formData, setFormData }: RechargeFormProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Montant de la recharge</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="amount">MONTANT *</Label>
          <Input
            id="amount"
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="rechargeType">TYPE DE RECHARGE *</Label>
          <select
            id="rechargeType"
            className="w-full p-2 border rounded-md"
            value={formData.rechargeType}
            onChange={(e) => setFormData({ 
              ...formData, 
              rechargeType: e.target.value as RechargeType 
            })}
            required
          >
            <option value="uv">UV</option>
            <option value="fcfa">FCFA</option>
          </select>
        </div>
      </div>
    </Card>
  );
}