import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import friend from "../FriendListItem/friends.json";

export default function FriendList({ list, friends }) {
  return (
    <div>
      <h1 className={css.list}>{list}</h1>
      <ul className={css.friend_list}>
        {friend.map(friends => (
          <FriendListItem
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
