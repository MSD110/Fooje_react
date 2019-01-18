// @flow
import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Room, User } from '../../types';

const styles = StyleSheet.create({
  roomSidebar: {
    color: '#ab9ba9',
    background: '#4d394b',
  },

  header: {
    padding: '20px 15px',
    marginBottom: '10px',
    width: '220px',
    background: 'rebeccapurple',
  },

  roomName: {
    marginBottom: '0',
    marginLeft: '30px',
    fontSize: '22px',
    lineHeight: '1',
    color: '#fff',
  },

  userList: {
    paddingLeft: '15px',
    listStyle: 'none',
  },

  username: {
    marginTop: '10px',
    position: 'relative',
    paddingLeft: '20px',
    fontSize: '14px',
    fontWeight: '300',
    ':after': {
      position: 'absolute',
      top: '7px',
      left: '0',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'rgb(64,151,141)',
      content: '""',
    },
  },

  listHeading: {
    marginLeft: '15px',
    marginTop: '30px',
    marginBottom: '5px',
    fontSize: '13px',
    textTransform: 'uppercase',
  },
});

type Props = {
  room: Room,
  currentUser: User,
  presentUsers: Array<User>,
}

const RoomSidebar = ({ room, currentUser, presentUsers }: Props) =>
  <div className={css(styles.roomSidebar)}>
    <div className={css(styles.header)}>
      <h2 className={css(styles.roomName)}>{room.name}</h2>      
    </div>
    <div className={css(styles.listHeading)}>Sentiment Analysis</div>
    <ul className={css(styles.userList)}>
      {presentUsers.map((user) =>
        <li key={user.id} className={css(styles.username)}>{user.username}</li>
      )}
    </ul>
    <div className={css(styles.listHeading)}>KeyWords</div>
    <div className={css(styles.listHeading)}>Mood Detection</div>
  </div>;

export default RoomSidebar;
