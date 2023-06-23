import PropTypes from 'prop-types';
import styles from './friendlist.module.css';

export default function FriendListItem( {id, name, avatar, isOnline} ) {
   return <li className={styles.item} key={id}>
   <span className={`${styles.status} ${isOnline ? styles.online : ''}`} />
   <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
   <p className={styles.name}>{name}</p>
 </li>
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };