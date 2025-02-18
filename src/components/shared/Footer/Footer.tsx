import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/assets/landing_page/facebook.png';
import instagramIcon from '@/assets/landing_page/instagram.png';
import twitterIcon from '@/assets/landing_page/twitter.png';
import linkedinIcon from '@/assets/landing_page/linkedin.png';

const Footer = () => {
  return (
    <Box bgcolor='rgb(17, 26, 34)' py={5}>
      <Container>
        <Stack direction='row' gap={4} justifyContent='center'>
          <Typography color='#fff' component={Link} href='/consultation'>
            Consultation
          </Typography>
          <Typography color='#fff' component={Link} href='/health-plans'>
            Health Plans
          </Typography>
          <Typography color='#fff' component={Link} href='/medicine'>
            Medicine
          </Typography>
          <Typography color='#fff' component={Link} href='/diagnostics'>
            Diagnostics
          </Typography>
          <Typography color='#fff' component={Link} href='/ngos'>
            NGOs
          </Typography>
        </Stack>
        <Stack direction='row' gap={2} justifyContent='center' py={3}>
          <Image
            src={facebookIcon}
            alt='facebook icon'
            width={30}
            height={30}
          />
          <Image
            src={instagramIcon}
            alt='facebook icon'
            width={30}
            height={30}
          />
          <Image src={twitterIcon} alt='facebook icon' width={30} height={30} />
          <Image
            src={linkedinIcon}
            alt='facebook icon'
            width={30}
            height={30}
          />
        </Stack>
        <Box
          sx={{
            border: '1px dashed lightgray',
          }}
        ></Box>
        <Stack
          direction='row'
          gap={2}
          justifyContent='space-between'
          alignItems='center'
          py={3}
        >
          <Typography component='p' color='white'>
            &copy; 2025 Emperal HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant='h5'
            component={Link}
            href='/'
            fontWeight='600'
            color='white'
          >
            <Box component='span' color='primary.main'>
              Emperal{' '}
            </Box>
            Health Care
          </Typography>
          <Typography component='p' color='white'>
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
