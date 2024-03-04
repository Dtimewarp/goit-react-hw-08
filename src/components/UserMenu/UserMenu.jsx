import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slectors';
import { Avatar, Badge, Button, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import { FaShieldHeart } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";

import {
  selectContacts,
  selectFvoriteContacts,
} from '../../redux/contacts/selectors';

export default function UserMenu({ mediaQuery }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const favoriteContacts = useSelector(selectFvoriteContacts);

  return (
    <div className={css.wrapper}>
      <>
        <Badge 
          badgeContent={favoriteContacts.length} 
          color="primary" 
          showZero
        >
          <FaShieldHeart  size={24}/>
        </Badge>
        <Badge
          badgeContent={contacts.length}
          color="secondary"
          max={999}
          showZero
        >
          <CgNotes  size={24}/>
        </Badge>
      </>

      {mediaQuery && <Typography>Welcome, {user.name} </Typography>}

      <Avatar
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        sx={{ bgcolor: deepPurple[500] }}
      >
        {user.name[0]}
      </Avatar>

      <Button type="button" style={{ backgroundColor: '#4682B4', color: 'white' }} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
