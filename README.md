## Your approach and design choices
 -Since the project is just a small pokemon finder, and even if it is further expanded, it will not be a large
  enterprise application, and is only a test case, I have broken down the components by a simple approach, 
  using neither atomic nor modular, much less feature slice architecture.
 
  -As the UI design I chose colors pleasing to the eye, despite the fact that the color scheme is not original 
   to the Pokemon series, it gives a sense of being in the game.
   
  -As for the approach to separate the business logic and the UI, then as the application does
   not need any kind of state manager, it was based on a simple approach of calling the API
  endpoints in the components

## How long it took you to complete the test (you are not evaluated on your speed)
 - 8 hours

## If you had to do a second iteration, what would you add or improve?
1)Remove the search with includes and get all the pokemon when I mount a hook because pokemon api 
provides a search by name.

2)Add custom optimized fonts.

3)Move the components to the storybook and create my own library with Typography, Box, Grid and other components that
can be shared with help of monorepo between other projects.

4)Add adaptive design, and appropriate custom hooks for it.

5)Add skeletons for loading pokemon

6)Make an app like PWA so people can search for their favorite pokémon even without internet

7)improve infrastructure for tests ( move msw to utils files because tests will be expanded )

8)Create mixins for fonts and animations

9)Break down the components as atoms, moleculs, organism

10)Lazy loading of components if the application will be large enough

11)Migration to Vite, as it is a painless process that will improve performance compared to cra/webpack

12)Add aliases for imports

13)Pokémon api is big enough, we can get a lot more information if we wanted to, we could do that in the next iteration as well
