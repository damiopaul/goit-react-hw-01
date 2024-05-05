import css from "./TransactionHistory.module.css"
import clsx from "clsx";


export default function TransactionHistory({
  items,
}) {
  return (
    <div className={css.container}>
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.headRow}>
          <th className={css.headTitle}>Type</th>
          <th className={css.headTitle}>Amount</th>
          <th className={css.headTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
            
            return (
                <tr key={item.id} className={css.tansRow}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
    </div>
  );
}
