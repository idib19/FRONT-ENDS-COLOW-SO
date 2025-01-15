"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TransferFormProps } from "../types";

const TRANSFER_REASONS = [
  "Achat de bien et service",
  "Assistance familiale",
  "Epargne",
  "Frais médicaux",
  "Frais scolaires",
  "Investissement",
  "Œuvre et don"
];

export function RecipientSection({ formData, setFormData }: TransferFormProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">INFORMATIONS BENEFICIAIRE</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="recipientFirstName">PRENOMS *</Label>
          <Input
            id="recipientFirstName"
            value={formData.recipientFirstName}
            onChange={(e) => setFormData({ ...formData, recipientFirstName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="recipientLastName">NOM *</Label>
          <Input
            id="recipientLastName"
            value={formData.recipientLastName}
            onChange={(e) => setFormData({ ...formData, recipientLastName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="recipientProvince">PROVINCE *</Label>
          <Input
            id="recipientProvince"
            value={formData.recipientProvince}
            onChange={(e) => setFormData({ ...formData, recipientProvince: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="recipientCity">VILLE *</Label>
          <Input
            id="recipientCity"
            value={formData.recipientCity}
            onChange={(e) => setFormData({ ...formData, recipientCity: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="recipientPhone">N° TELEPHONE *</Label>
          <Input
            id="recipientPhone"
            type="tel"
            value={formData.recipientPhone}
            onChange={(e) => setFormData({ ...formData, recipientPhone: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="recipientReason">MOTIF *</Label>
          <select
            id="recipientReason"
            className="w-full p-2 border rounded-md"
            value={formData.recipientReason}
            onChange={(e) => setFormData({ ...formData, recipientReason: e.target.value })}
            required
          >
            <option value="">Sélectionnez un motif</option>
            {TRANSFER_REASONS.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
}