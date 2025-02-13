"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RechargeDetails } from "./RechargeDetails";
import { RechargeAmount } from "./RechargeAmount";
import { RechargeType } from "../types";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { verifyTransactionAmount } from "@/lib/api/account";

export function RechargeForm() {
  const [formData, setFormData] = useState<RechargeType>({
    cardId: "",
    amount: "",
    rechargeType: "uv",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const amount = parseFloat(formData.amount);
      const verification = await verifyTransactionAmount(
        'master',
        amount,
        formData.rechargeType
      );

      if (!verification.isValid) {
        toast({
          variant: "destructive",
          title: "Erreur de transaction",
          description: verification.message
        });
        return;
      }

      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Transaction réussie",
        description: "La recharge a été effectuée avec succès"
      });
      
      // Reset form
      setFormData({
        cardId: "",
        amount: "",
        rechargeType: "uv",
      });
      
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RechargeDetails formData={formData} setFormData={setFormData} />
        <RechargeAmount formData={formData} setFormData={setFormData} />
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
              Traitement...
            </>
          ) : (
            'Recharger'
          )}
        </Button>
      </div>
    </form>
  );
}