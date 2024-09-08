import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createFood } from '@/app/lib/actions';

export default function Form() {
  return (
    <form action={createFood}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/*  */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Enter food name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            [OPTIONAL] Enter food description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="description"
                name="description"
                type="string"
                placeholder="Enter description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            [OPTIONAL] Enter food category
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="category"
                name="category"
                type="string"
                placeholder="Enter category"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="notes" className="mb-2 block text-sm font-medium">
            [OPTIONAL] Enter notes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="notes"
                name="notes"
                type="string"
                placeholder="Enter notes"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        {/* Can I automate these numbers in a loop... */}
        <div className="mb-4">
          <label htmlFor="calories" className="mb-2 block text-sm font-medium">
            Enter calories
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="calories"
                name="calories"
                type="number"
                placeholder="1"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        {/* Can I automate these numbers in a loop... */}
        <div className="mb-4">
          <label htmlFor="carbs" className="mb-2 block text-sm font-medium">
            Enter carbs in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="carbs"
                name="carbs"
                type="number"
                placeholder="1"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>


        {/* Can I automate these numbers in a loop... */}
        <div className="mb-4">
          <label htmlFor="protein" className="mb-2 block text-sm font-medium">
            Enter protein in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="protein"
                name="protein"
                type="number"
                placeholder="1"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
      

      
        {/* Can I automate these numbers in a loop... */}
        <div className="mb-4">
          <label htmlFor="fat" className="mb-2 block text-sm font-medium">
          Enter fat in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fat"
                name="fat"
                type="number"
                placeholder="1"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>



        {/* Can I automate these numbers in a loop... */}
        <div className="mb-4">
          <label htmlFor="sugar" className="mb-2 block text-sm font-medium">
            Enter sugar in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sugar"
                name="sugar"
                type="number"
                placeholder="1"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Food</Button>
      </div>
    </form>
  );
}
