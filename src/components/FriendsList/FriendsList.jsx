import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <li key={friend.id} className={css.item}>
              <span
                className={`${css.status} ${friend.isOnline ? css.statusTrue : css.statusFalse}`}
              ></span>
              <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
              <p className={css.name}>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
