'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import SpecialtyModal from './component/SpecialtyModal';
import { useGetAllSpecialtiesQuery } from '@/redux/api/specialties.Api';

const SpecialtiesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  console.log(data);
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isOpen} setOpen={setIsOpen} />
        <TextField size='small' placeholder='Search Specialist' />
      </Stack>
      <Box></Box>
    </Box>
  );
};

export default SpecialtiesPage;
