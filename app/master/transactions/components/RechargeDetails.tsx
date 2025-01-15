"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RechargeFormProps } from "../types";

export function RechargeDetails({ formData, setFormData }: RechargeFormProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Détails de la recharge</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="cardId">ID CARTE *</Label>
          <Input
            id="cardId"
            value={formData.cardId}
            onChange={(e) => setFormData({ ...formData, cardId: e.target.value })}
            required
          />
        </div>

        <div>
          <Label>DATE & HEURE</Label>
          <Input 
            value={new Date().toLocaleString()} 
            disabled 
          />
        </div>
      </div>
    </Card>
  );
}