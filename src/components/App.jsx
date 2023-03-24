import css from '../App.css';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

import FriendList from './FriendList/FriendList';
import friends from './FriendListItem/friends.json';

function App() {
  return (
    <div className={css.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList list={'List of friends'} friends={friends} />
    </div>
  );
}

export default App;
