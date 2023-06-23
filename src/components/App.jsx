import user from "./user/user.json";
import Profile from "./user/Profile";
import data from "./data/data.json";
import Statistics from "./data/Statistics";
import friends from "./friends/friends.json";
import FriendList from "./friends/Friendlist";

import transactions from "./transactionHistory/transactions.json";
import TransactionHistory from "./transactionHistory/Transactionhistory";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        padding: 10
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
};
