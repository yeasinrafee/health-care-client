'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import SpecialistModal from './component/SpecialistModal';

const SpecialtiesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isOpen} setOpen={setIsOpen} />
        <TextField size='small' placeholder='Search Specialist' />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
