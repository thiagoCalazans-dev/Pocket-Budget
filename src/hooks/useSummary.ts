import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const  transactions  = useContextSelector(TransactionsContext, (ctx) => ctx.transactions) ;

  const summary = useMemo(() => {return transactions.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += item.price;
        acc.total += item.price;
      } else {
        acc.outcome += item.price;
        acc.total -= item.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );


}, [transactions])
return summary;
}
