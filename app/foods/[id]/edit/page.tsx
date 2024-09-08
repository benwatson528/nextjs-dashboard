import Form from '@/app/ui/foods/edit-form';
import Breadcrumbs from '@/app/ui/foods/breadcrumbs';
import { fetchFoodById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [food] = await Promise.all([
    fetchFoodById(id),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Foods', href: '/foods' },
          {
            label: 'Edit Food',
            href: `/foods/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form food={food}/>
    </main>
  );
}
