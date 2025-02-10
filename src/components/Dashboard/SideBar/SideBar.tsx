import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import assets from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
  const drawer = (
    <div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction='row'
        justifyContent='center'
        alignItems='center'
        component={Link}
        href='/'
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt='logo' />
        <Typography variant='h6' component='h1' sx={{ cursor: 'pointer' }}>
          Emperal Health Care
        </Typography>
      </Stack>
      {drawer}
    </Box>
  );
};

export default SideBar;
