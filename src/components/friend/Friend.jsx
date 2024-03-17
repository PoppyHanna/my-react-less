
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? 'online' : 'offline'}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
// const FriendList
const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
  );
};
// export default FriendList;
export default Friend;