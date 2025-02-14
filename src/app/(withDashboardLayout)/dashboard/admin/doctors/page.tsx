'use client';
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import DoctorModal from '../../doctor/components/DoctorModal';
import { useState } from 'react';
import { useGetAllDoctorsQuery } from '@/redux/api/doctor.Api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

const DoctorsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>('');
  query['searchTerm'] = searchTerm;

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });

  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'qualification', headerName: 'Qualification', flex: 1 },
    { field: 'registrationNumber', headerName: 'Registration Number', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
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
        <Button onClick={() => setIsOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isOpen} setOpen={setIsOpen} />
        <TextField
          size='small'
          placeholder='search doctors'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default DoctorsPage;
