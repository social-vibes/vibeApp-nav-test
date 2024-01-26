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


********** 
TODO: 
 - Assign Emy to build a basic nav structure as outlined above
  - Next: Assign basic Map page.

 - FOR MONDAY (Assign to Nick): 
    - Research React Native Maps
    - Research Waze and the OC Transit app and see how we can use similar features in our app
 - Postpone the deadline for the Data structures task assigned to Emy, Hadi and Nic
  - Adesh said the deadline is not hard set - we need a finalized information architecture before continuing 

  For Hadi (React-Native-Maps);

 - Once the IA is finalized, build an SPA dashboard for Megan and Hannah to manually enter venue info
  - We need to ask them what type of information they want to display for each venue
  - Certain venue information is obtainable from the Google. Other information is obtainable only from the user submitted polls:
    such as: 
      - atmosphere, 
      - how busy 
      - etc. 
