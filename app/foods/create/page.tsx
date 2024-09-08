import Form from '@/app/ui/foods/create-form';
import Breadcrumbs from '@/app/ui/foods/breadcrumbs';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Foods', href: '/foods' },
          {
            label: 'Create Food',
            href: '/foods/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
