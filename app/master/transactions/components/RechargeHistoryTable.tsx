"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatCurrency } from "@/lib/utils";

// Temporary mock data - replace with real data from API
const recentRecharges = [
  {
    id: "1",
    date: new Date(),
    cardId: "CARD-001",
    amount: 50000,
    type: "UV",
    status: "completed",
  },
  {
    id: "2",
    date: new Date(),
    cardId: "CARD-002",
    amount: 25000,
    type: "FCFA",
    status: "pending",
  },
];

export function RechargeHistoryTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>ID Carte</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentRecharges.map((recharge) => (
            <TableRow key={recharge.id}>
              <TableCell>{formatDate(recharge.date)}</TableCell>
              <TableCell>{recharge.cardId}</TableCell>
              <TableCell>{formatCurrency(recharge.amount)}</TableCell>
              <TableCell>{recharge.type}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    recharge.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {recharge.status === "completed" ? "Complété" : "En attente"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}