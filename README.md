**This Repo goes over the process for setting up internal navigation with react native navigation.**
  - https://reactnavigation.org/docs/getting-started (Global nav dependencies/initial setup)
  - https://reactnavigation.org/docs/auth-flow (Authentication flow setup) 
  - https://reactnavigation.org/docs/hello-react-navigation (Native stack navigator)
  - https://reactnavigation.org/docs/tab-based-navigation (Tab navigation)
  - https://reactnavigation.org/docs/drawer-based-navigation (Drawer navigation)
  - https://reactnavigation.org/docs/nesting-navigators (Nesting navigators)

Several types of navigation will need to be implemented, this includes:
  - React Tab Navigation 
    - Switching between the primary tabs in the app (Map, Friends, Ranking, Profile, Notifications)
  - Stack Navigation
    - Nested screens within a specific tab (ex: Friends --> chat page)
  - Drawer Navigation
    - For the top right settings drawer page (Sign out, privacy settings, etc.) 

Once the application's nav structure is determined, this repo will be used to test and build the navigation flow within the app, and integrated with the vibeApp-fb-test repo in the social-vibes github org repo. (https://github.com/social-vibes/vibeApp-fb-test)
