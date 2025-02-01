"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCardLoadHistory } from "@/lib/api/card-load";
import { formatDate, formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardLoadHistoryItem } from "@/lib/api/card-load";






export function LoadCardHistory() {

  const router = useRouter();
  const [history, setHistory] = useState<CardLoadHistoryItem[]>([]);  


  useEffect(() => {
    const fetchData = async () => {
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
  
  
    const history = await getCardLoadHistory(token, masterId);    
    setHistory(history);
  };


  fetchData();


  }, []);




  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Historique des chargements</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>ID Carte</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{formatDate(new Date(item.createdAt))}</TableCell>
                <TableCell>{item.cardId}</TableCell>
                <TableCell>{formatCurrency(item.amount)}</TableCell>
                <TableCell>
                  <span
                    className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800"
                  >
                    Complété
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}