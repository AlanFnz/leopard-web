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
  title: 'Sign Up',
  description: 'Sign up for an account',
};

export default async function SignUpPage() {
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
            Already have an account?{' '}
            <Link
              aria-label='Sign in'
              href='/signin'
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

