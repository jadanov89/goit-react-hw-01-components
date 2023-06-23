import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem'


const TransactionHistory = ({ transaction, items}) => {
    return (
        <table className={styles.transaction_history}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

              <tbody>    
                {items.map(TransactionHistoryItem)}
            </tbody>
          </table>
    );
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;