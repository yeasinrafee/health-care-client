'use client';

import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import SpecialtyModal from './component/SpecialtyModal';
import { useGetAllSpecialtiesQuery } from '@/redux/api/specialties.Api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

const SpecialtiesPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const columns: GridColDef[] = [
    {
      field: 'icon',
      headerName: 'Icon',
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={20} height={20} alt='icon' />
          </Box>
        );
      },
    },
    { field: 'title', headerName: 'Title', width: 400 },
    {
      field: 'action',
      headerName: 'Action',
      width: 300,
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Button onClick={() => setIsOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isOpen} setOpen={setIsOpen} />
        <TextField size='small' placeholder='Search Specialist' />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
