'use server';

import { TLoginFormValues } from '@/app/login/page';

export const userLogin = async (data: TLoginFormValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
