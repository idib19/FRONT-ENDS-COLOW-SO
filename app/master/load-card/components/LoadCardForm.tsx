"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { createCardLoad } from "@/lib/api/card-load";
import { CreateCardLoadDTO } from "@/lib/api/card-load";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

interface LoadCardFormData {
  cardId: string;
  amount: string;
}

export function LoadCardForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoadCardFormData>({
    cardId: "",
    amount: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
        return;
      }
      const userString = localStorage.getItem('user');
      if (!userString) {
        router.push('/');
        return;
      }
      const user = JSON.parse(userString);
      const masterId = user.entityId; 
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
     
      const cardLoad: CreateCardLoadDTO = {
        issuerId: masterId,
        cardId: formData.cardId,
        issuerModel: 'Master',
        amount: parseFloat(formData.amount)
      };

      await createCardLoad(token, cardLoad);

      toast.success("Le chargement de la carte a été effectué avec succès.");
      
      setFormData({
        cardId: "",
        amount: "",
      });
    } catch (error) {
      toast.error("Une erreur est survenue lors du chargement");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="cardId">ID Carte</Label>
            <Input
              id="cardId"
              value={formData.cardId}
              onChange={(e) => setFormData({ ...formData, cardId: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Montant (FCFA)</Label>
            <Input
              id="amount"
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              required
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-4">
          <Button 
            variant="outline" 
            type="button" 
            disabled={isLoading}
          >
            Annuler
          </Button>
          <Button 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Chargement...
              </>
            ) : (
              'Charger la carte'
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}