import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem'


const TransactionHistory = ({ transaction }) => {
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
                {transaction.map(TransactionHistoryItem)}
            </tbody>
          </table>
    );
}


TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;