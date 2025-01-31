"use client";

import { BalanceSection } from "./components/BalanceSection";
import { PartnersSection } from "./components/PartnersSection";
import { ActivitySection } from "./components/ActivitySection";
import { ComplaintsSection } from "./components/ComplaintsSection";
import { fetchMasterAccountMetrics } from "@/lib/api/dashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

interface BalanceSectionProps {
  uvBalance: number;
  fcfaBalance: number;
  colowSoRecharges: { date: string; amount: number };
}

interface PartnersSectionProps {
  partnersInRupture: number;
  currentMonthComission: number;
  totalCardRechargesCount: number;
}

export interface ActivitySectionProps {
  totalCardRechargesAmount: number;
  totalCardRechargesFees: number;
  totalCardRechargesCommission: number;
  comissionChartData: { month: string; value: number }[];
}

interface ComplaintsSectionProps {
  complaintsData: { status: string; value: number }[];
}


export default function MasterPortal() {
  const router = useRouter();

  const [balances, setBalances] = useState<BalanceSectionProps | null>(null);
  const [partners, setPartners] = useState<PartnersSectionProps | null>(null);
  const [activity, setActivity] = useState<ActivitySectionProps | null>(null);
  const [complaints, setComplaints] = useState<ComplaintsSectionProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/');
        return;
      }

      try {
        setLoading(true);
        const data = await fetchMasterAccountMetrics(token);
        setBalances({
          uvBalance: data.balance,
          fcfaBalance: data.balance,
          colowSoRecharges: {
            date: new Date(data.lastColowsoTransfert.createdAt).toLocaleDateString(),
            amount: data.lastColowsoTransfert.amount
          }
        });

        setPartners({
          partnersInRupture: 4,
          currentMonthComission: data.commission[data.commission.length - 1]?.value || 0,
          totalCardRechargesCount: data.cardLoadCount
        });

        setActivity({
          totalCardRechargesAmount: data.totalCardLoadAmount,
          totalCardRechargesFees: 0,
          totalCardRechargesCommission: 0,
          comissionChartData: data.commission  
        });

        setComplaints({
          complaintsData: data.claims
        });

        console.log("Here is the data fetched", data);
      } catch (error) {
        if (error instanceof Error && error.message === 'Unauthorized') {
          router.push('/');
        } else {
          console.error('An error occurred:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <Spinner />
      </div>
    );
  }

  const comissionChartData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 500 },
    { month: 'Apr', value: 450 },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">PORTAIL MASTER / GROSSISTE</h1>
        <button className="text-blue-600 hover:text-blue-800">Actualiser</button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">PRENOMS & NOM</h2>
      </div>

      <BalanceSection uvBalance={balances?.uvBalance || 0} fcfaBalance={balances?.fcfaBalance || 0} colowSoRecharges={balances?.colowSoRecharges || { date: '', amount: 0 }} />
      <PartnersSection partnersInRupture={partners?.partnersInRupture || 0} currentMonthComission={partners?.currentMonthComission || 0} totalCardRechargesCount={partners?.totalCardRechargesCount || 0} />
      <ActivitySection totalCardRechargesAmount={activity?.totalCardRechargesAmount || 0} totalCardRechargesFees={activity?.totalCardRechargesFees || 0} totalCardRechargesCommission={activity?.totalCardRechargesCommission || 0}
        comissionChartData={activity?.comissionChartData || []} />
      <ComplaintsSection complaintsData={complaints?.complaintsData || []} />
    </div>
  );
}