"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TransferFormProps } from "../types";

export function SenderSection({ formData, setFormData }: TransferFormProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">INFORMATIONS EXPEDITEUR</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="senderFirstName">PRENOMS *</Label>
          <Input
            id="senderFirstName"
            value={formData.senderFirstName}
            onChange={(e) => setFormData({ ...formData, senderFirstName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="senderLastName">NOM *</Label>
          <Input
            id="senderLastName"
            value={formData.senderLastName}
            onChange={(e) => setFormData({ ...formData, senderLastName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="senderCNI">N° CNI *</Label>
          <Input
            id="senderCNI"
            value={formData.senderCNI}
            onChange={(e) => setFormData({ ...formData, senderCNI: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="senderCity">VILLE / QUARTIER *</Label>
          <Input
            id="senderCity"
            value={formData.senderCity}
            onChange={(e) => setFormData({ ...formData, senderCity: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="senderPhone">N° TELEPHONE *</Label>
          <Input
            id="senderPhone"
            type="tel"
            value={formData.senderPhone}
            onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="senderEmail">EMAIL</Label>
          <Input
            id="senderEmail"
            type="email"
            value={formData.senderEmail}
            onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
          />
        </div>
      </div>
    </Card>
  );
}