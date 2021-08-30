import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody key={item.id} className={css.tbody}>
          <tr>
            <td className={css.tr}>{item.type}</td>
            <td className={css.tr}>{item.amount}</td>
            <td className={css.tr}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};