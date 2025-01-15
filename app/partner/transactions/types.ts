export interface TransferFormData {
  // Sender Info
  senderFirstName: string;
  senderLastName: string;
  senderCNI: string;
  senderCity: string;
  senderPhone: string;
  senderEmail: string;
  
  // Recipient Info
  recipientFirstName: string;
  recipientLastName: string;
  recipientProvince: string;
  recipientCity: string;
  recipientPhone: string;
  recipientReason: string;
  
  // Transaction Info
  amount: string;
}

export interface TransferFormProps {
  formData: TransferFormData;
  setFormData: (data: TransferFormData) => void;
}