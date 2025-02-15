import HCDatePicker from '@/components/Forms/HCDatePicker';
import HCForm from '@/components/Forms/HCForm';
import HCTimePicker from '@/components/Forms/HCTimePicker';
import HCModal from '@/components/shared/HCModal/HCModal';
import { dateFormatter } from '@/utils/DateFormatter';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(dateFormatter(values.startDate));

    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);

    try {
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <HCModal open={open} setOpen={setOpen} title='Create Schedule'>
      <HCForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: '400px' }}>
          <Grid item md={12}>
            <HCDatePicker name='startDate' label='Start Date' />
          </Grid>
          <Grid item md={12}>
            <HCDatePicker name='endDate' label='End Date' />
          </Grid>
          <Grid item md={6}>
            <HCTimePicker name='startTime' label='Start Time' />
          </Grid>
          <Grid item md={6}>
            <HCTimePicker name='endTime' label='End Time' />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type='submit'>
          Create
        </Button>
      </HCForm>
    </HCModal>
  );
};

export default ScheduleModal;
