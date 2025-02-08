'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { FieldValues } from 'react-hook-form';
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/services/actions/registerPatient';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { storeUserInfo } from '@/services/auth.services';
import { userLogin } from '@/services/actions/userLogin';
import HCForm from '@/components/Forms/HCForm';
import HCInput from '@/components/Forms/HCInput';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const toastId = toast.loading('Registering user...!!');
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message, { id: toastId });
        const result = await userLogin({
          password: values?.password,
          email: values?.patient?.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push('/');
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: '100%',
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt='logo' width={50} height={50} />
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <HCForm onSubmit={handleRegister}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <HCInput
                    label='Name'
                    fullWidth={true}
                    name='patient.name'
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label='Email'
                    size='small'
                    fullWidth={true}
                    name='patient.email'
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label='Password'
                    type='password'
                    fullWidth={true}
                    name='password'
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label='Contact Number'
                    type='tel'
                    fullWidth={true}
                    name='patient.contactNumber'
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label='Address'
                    type='text'
                    fullWidth={true}
                    name='patient.address'
                    required={true}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{
                  margin: '10px 0px',
                }}
                type='submit'
              >
                Register
              </Button>
              <Typography component='p' fontWeight={300}>
                Do you already have an account? <Link href='/login'>Login</Link>
              </Typography>
            </HCForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
