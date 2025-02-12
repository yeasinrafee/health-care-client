import HCFileUploader from '@/components/Forms/HCFileUploader';
import HCForm from '@/components/Forms/HCForm';
import HCInput from '@/components/Forms/HCInput';
import HCModal from '@/components/shared/HCModal/HCModal';
import { modifyPayload } from '@/utils/modifyPayload';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <HCModal open={open} setOpen={setOpen} title='Create A New Specialty'>
      <HCForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <HCInput name='title' label='Title' />
          </Grid>
          <Grid item md={6}>
            <HCFileUploader name='file' label='Upload File' />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type='submit'>
          Create
        </Button>
      </HCForm>
    </HCModal>
  );
};

export default SpecialtyModal;
