## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


## Overview for meal plan
Schemas:
 - Foods - id, name, description, category?, notes, calories, carbs, protein, fat, sugar
 - Meals - id, name, description, notes, is_active
 - Foods/Meals link - meal_id, food_id, portion_multiplier
 - Rotas - id, name, description, notes, is_active
 - Rotas/Meals link - rota_id, meal_id

Pages:
 - `/foods` - shows a list of all the foods with delete and edit buttons. New foods can be added at the top in-line.
 - `/meals` - shows an overview page with all of the meals listed. Clicking a meal goes to an edit page, and there's also a button for new meals.
 - `/rotas` - like meals but a level up


Tasks:
 - Remove the login home page and move `/dashboards` to `/`.
 - Keep `SideNav` but add `foods` `meals` and `rotas` sections.
 - Get rid of `Acme` branding and clean up in general (removing unused sections).
 - Create schemas and seed data (restore the file that I deleted in an earlier task).
 - Make a `FoodCard` showing the properties of a Food and display it on `/foods`.
 - Add a delete button into each Card.
 - Add an edit button into each Card.
 - Add a create method into each Card.
 - Add a live search bar.

Celebrate because I've just about done everything technically! The rest is copy and paste
