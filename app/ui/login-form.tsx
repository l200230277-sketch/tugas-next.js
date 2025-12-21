'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>

        <div>
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="block w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="mt-4">
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="block w-full rounded-md border px-3 py-2"
          />
        </div>

        <input type="hidden" name="callbackUrl" value="/dashboard" />

        <SubmitButton />

        {errorMessage && (
          <div className="flex items-center gap-1 text-red-500 mt-2">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
