'use client';
import { updateFood } from '@/app/lib/actions';

import { Foods } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function EditFoodForm({
  food,
}: {
  food: Foods;
}) {
  const updateFoodWithId = updateFood.bind(null, food.id);
  return (
    <form action={updateFoodWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Choose a description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={food.description}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div> */}

        {/* Food description */}
        <fieldset>
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
                defaultValue={food.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Update food description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="description"
                name="description"
                type="string"
                defaultValue={food.description}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Update food category
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="category"
                name="category"
                type="string"
                defaultValue={food.category}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="notes" className="mb-2 block text-sm font-medium">
            Update notes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="notes"
                name="notes"
                type="string"
                defaultValue={food.notes}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        {/* Can I automate these numbers in a loop... */}
        <div className="mb-4">
          <label htmlFor="calories" className="mb-2 block text-sm font-medium">
            Update calories
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="calories"
                name="calories"
                type="number"
                defaultValue={food.calories}
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
            Update carbs in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="carbs"
                name="carbs"
                type="number"
                defaultValue={food.carbs}
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
            Update protein in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="protein"
                name="protein"
                type="number"
                defaultValue={food.protein}
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
            Update fat in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fat"
                name="fat"
                type="number"
                defaultValue={food.fat}
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
            Update sugar in grams
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sugar"
                name="sugar"
                type="number"
                defaultValue={food.sugar}
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
      </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/foods"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Food</Button>
      </div>
    </form>
  );
}
