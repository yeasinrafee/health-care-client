'use client';
import { Box, Button, Stack, TextField } from '@mui/material';
import DoctorModal from '../../doctor/components/DoctorModal';
import { useState } from 'react';

const DoctorsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isOpen} setOpen={setIsOpen} />
        <TextField size='small' placeholder='search doctors' />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
