import { MenuItem, SxProps, TextField } from '@mui/material';

type TTextField = {
  name: string;
  size?: 'small' | 'medium';
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
};

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const HCSelectField = ({
  items,
  name,
  label,
  size = 'small',
  required,
  fullWidth = true,
  sx,
}: TTextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ''
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default HCSelectField;
