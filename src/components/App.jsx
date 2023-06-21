import user from "./user/user.json";
import Profile from "./user/profile";
import data from "./data/data.json";
import Statistics from "./data/statistics";
import friends from "./friends/friends.json";
import FriendList from "./friends/friendlist";
import TransactionHistory from "./transactionHistory/transactionhistory";
import transactions from "./transactionHistory/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory transaction={transactions} />
    </div>
  );
};
