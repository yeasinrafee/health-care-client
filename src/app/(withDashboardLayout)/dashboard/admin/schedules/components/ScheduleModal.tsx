import HCDatePicker from '@/components/Forms/HCDatePicker';
import HCForm from '@/components/Forms/HCForm';
import HCModal from '@/components/shared/HCModal/HCModal';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <HCModal open={open} setOpen={setOpen} title='Create Schedule'>
      <HCForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <HCDatePicker name='startDate' />
          </Grid>
        </Grid>
        <Button type='submit'>Create</Button>
      </HCForm>
    </HCModal>
  );
};

export default ScheduleModal;
