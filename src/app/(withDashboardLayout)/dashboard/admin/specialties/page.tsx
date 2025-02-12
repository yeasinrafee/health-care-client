'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import SpecialtyModal from './component/SpecialtyModal';

const SpecialtiesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isOpen} setOpen={setIsOpen} />
        <TextField size='small' placeholder='Search Specialist' />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
