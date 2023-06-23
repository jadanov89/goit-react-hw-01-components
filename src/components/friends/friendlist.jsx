import PropTypes from 'prop-types';
import styles from './friendlist.module.css';
import FriendListItem from './FriendListItem'

// const FriendList = (
//     {friends}
// ) => {
//     return (
//         <ul className={styles.friend_list}>
//         {friends.map((friend) => (
//           <li className={styles.item} key={friend.id}>
//             <span className={`${styles.status} ${friend.isOnline ? styles.online : ''}`} />
//             <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
//             <p className={styles.name}>{friend.name}</p>
//           </li>
//         ))}
//       </ul>
//     );
// }

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};


// const FriendList = (
//   {friends}
// ) => {
//   return (
//       <ul className={styles.friend_list}>
//       {friends.map(FriendListItem)}
//     </ul>
//   );
// }

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//       }),
//     ),
//   };


FriendList.propTypes = { friends: PropTypes.array };
  export default FriendList;