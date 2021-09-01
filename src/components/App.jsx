import Profile from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Staticstics';
import statData from './Statistics/statistical-data.json';

import FriendList from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
