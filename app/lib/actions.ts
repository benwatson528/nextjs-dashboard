'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  notes: z.string(),
  calories: z.coerce.number().nonnegative(),
  carbs: z.coerce.number().nonnegative(),
  protein: z.coerce.number().nonnegative(),
  fat: z.coerce.number().nonnegative(),
  sugar: z.coerce.number().nonnegative()
});
 
const CreateFood = FormSchema.omit({ id: true });
 
export async function createFood(formData: FormData) {
  const { name, description, category, notes, calories, carbs, protein, fat, sugar } = CreateFood.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
    notes: formData.get('notes'),
    calories: formData.get('calories'),
    carbs: formData.get('carbs'),
    protein: formData.get('protein'),
    fat: formData.get('fat'),
    sugar: formData.get('sugar')
  });

  await sql`
  INSERT INTO foods (name, description, category, notes, calories, carbs, protein, fat, sugar)
  VALUES (${name}, ${description}, ${category}, ${notes}, ${calories}, ${carbs}, ${protein}, ${fat}, ${sugar})
  `;

    revalidatePath('/foods');
    redirect('/foods');
}


const UpdateFood = FormSchema.omit({ id: true });
 
export async function updateFood(id: string, formData: FormData) {
  const { name, description, category, notes, calories, carbs, protein, fat, sugar } = UpdateFood.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
    notes: formData.get('notes'),
    calories: formData.get('calories'),
    carbs: formData.get('carbs'),
    protein: formData.get('protein'),
    fat: formData.get('fat'),
    sugar: formData.get('sugar')
  });
 
 
  await sql`
    UPDATE foods
    SET name = ${name},
      description = ${description},
      category = ${category},
      notes = ${notes},
      calories = ${calories},
      carbs = ${carbs},
      protein = ${protein},
      fat = ${fat},
      sugar = ${sugar}
    WHERE id = ${id}
  `;
 
  revalidatePath('/foods');
  redirect('/foods');
}


export async function deleteFood(id: string) {
  await sql`DELETE FROM foods WHERE id = ${id}`;
  revalidatePath('/foods');
}
