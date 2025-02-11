import { Box, List, Stack, Typography } from '@mui/material';
import React from 'react';

import assets from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItems';
import { TUserRole } from '@/types';
import SidebarItem from './SidebarItem';

const SideBar = () => {
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
      <List>
        {drawerItems('admin' as TUserRole).map((item, index) => (
          <SidebarItem key={index} index={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
