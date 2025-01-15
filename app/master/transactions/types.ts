export interface RechargeType {
  cardId: string;
  amount: string;
  rechargeType: "uv" | "fcfa";
}

export interface RechargeFormProps {
  formData: RechargeType;
  setFormData: (data: RechargeType) => void;
}