import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Router from 'next/router';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useRequest from '@/hooks/use-request';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(7, {
      message: 'Password must be at least 7 characters',
    })
    .max(21, {
      message: 'Password must be at most 21 characters',
    }),
});

export type SignInFormValues = z.infer<typeof formSchema>;

const SignIn = () => {
  const [body, setBody] = useState<SignInFormValues>();
  const { doRequest } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body,
    onSuccess: () => Router.push('/'),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setBody(values);
    await doRequest();
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="test@test.com" {...field} />
                </FormControl>
                <FormDescription>This is your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormDescription>This is your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign In</Button>
        </form>
        <Button
          variant={'secondary'}
          type="button"
          onClick={() => Router.push('/auth/signup')}
        >
          Sign Up?
        </Button>
      </Form>
    </main>
  );
};

export default SignIn;
