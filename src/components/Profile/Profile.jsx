import PropTypes from 'prop-types';
import css from './Profile.module.css'

// export const User = ({ name, tag, location, avatar, followers, views, likes }) => {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img
//           src={avatar}
//           alt="Аватар пользователя"
//           class="avatar"
//         />
//         <p class="name">{name}</p>
//         <p class="tag">{tag}</p>
//         <p class="location">{location}</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">{followers}</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">{views}</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// Profile.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       stats: {
//         followers: PropTypes.string.isRequired,
//         views: PropTypes.string.isRequired,
//         likes: PropTypes.string.isRequired,
//       },
//     }),
//   ),
// };


export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={`${css.statsItem} ${css.border}`}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};