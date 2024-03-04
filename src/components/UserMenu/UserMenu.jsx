import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slectors';
import { Avatar, Badge, Button, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Contacts from '@mui/icons-material/Contacts';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
        <Badge badgeContent={favoriteContacts.length} color="primary" showZero>
          <FavoriteIcon sx={{ color: '#fff' }} />
        </Badge>
        <Badge
          badgeContent={contacts.length}
          color="secondary"
          max={999}
          showZero
        >
          <Contacts sx={{ color: '#fff' }} />
        </Badge>
      </>

      {mediaQuery && <Typography>Welcome, {user.name} </Typography>}

      <Avatar
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        sx={{ bgcolor: deepPurple[500] }}
      >
        {user.name[0]}
      </Avatar>

      <Button type="button" style={{ backgroundColor: '#0818A8', color: 'white' }} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
