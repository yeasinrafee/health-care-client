'use client';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ScheduleModal from './components/ScheduleModal';

const Schedules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display Schedule</Box>
    </Box>
  );
};

export default Schedules;
