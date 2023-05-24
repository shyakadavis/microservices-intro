import React from 'react';
import { GetServerSideProps } from 'next';

import buildClient from '@/api/build-client';
import RootLayout from '@/components/RootLayout';

export type CurrentUserProps = {
  currentUser: {
    id: string;
    email: string;
    iat: number;
  };
};

const Home = ({ currentUser }: CurrentUserProps) => {
  return (
    <RootLayout currentUser={currentUser}>
      <h1 className="text-4xl font-bold">Home</h1>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = buildClient(context);
  const {
    data: { currentUser },
  } = await client.get('/api/users/currentuser');
  return {
    props: {
      currentUser,
    },
  };
};

export default Home;
