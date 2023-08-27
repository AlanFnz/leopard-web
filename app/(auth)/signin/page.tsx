import { type Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { SignUpForm } from '@/components/forms/SignUpForm';
import { Shell } from '@/components/shells/Shell';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default async function SignInPage() {
  return (
    <Shell className='max-w-lg' variant={'centered'}>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl text-center'>Sign up</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <SignUpForm />
        </CardContent>
        <CardFooter className='justify-center'>
          <div className='text-sm text-muted-foreground'>
            Don`t have an account?{' '}
            <Link
              aria-label='Sign Up'
              href='/signup'
              className='text-primary underline-offset-4 transition-colors hover:underline'
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
}

