In this documentation I will try to explain to my best capabilities why I have created such a skeleton and what the main purpose/structure is.

This is based on my experience from my days of working in Technamin (after refactoring). 

Firstly, we can see several important seperations. We have a core folder, a shared folder, a mobile folder and the main components. 
The main components like the header, the footer or the profile and the casino are not shared, as they are used once, and are not web or mobile diferentiated. Thus they remain separated. 
The mobile folder speaks for itself, every tiny css detail that has to be pixel perfect for the vast majority of casino users goes there and so on. This is for mobile only components.
The shared folder again is generally understandable. It includes all the reusable components (such as deposit and withdraw), services, directives, enums, pipes and much more. 
An important folder that's separated is the core folder. There we would have the core services without which the application CANNOT run. Like the auth service (to check authorization) or the config service to set the basic configuration. We also have our resolvers there that allow us to load pages.
One of the important folders that we have is the casino folder. It includes the casino module which to my experience is always LAZY loaded. The casino module should be devided to several components, like the game list (casino list), the general view and the components that help run  the games. As far as I remember we had only 1 API to run the games which we called "open-game" and an API to get the list of games which we then listed in a grid of infinite scroll on our casino page. The casino module has its own injection of services that are exclusive for it. Even though these services are in the shared folder (casino list, open-game) they do not get injected instantly as the casino module is a lazy loaded one. But we keep these services in the shared folder as we also need them for our mobile casino. 
Another separate vital that we have is the profile. This is a general folder which includes everything connected to the user. It includes but is not limited to the notifications the user has, the tickets, the incoming and outgoing support chat messages, even the amount of free slot rolls they have received. We tend to separate these as much as possible to then use the "micro" components effectively. 
Another lazy loaded component that we have is the sport component, which is similar to Casino and basically everything I have stated before applies here. 
We have our assets folder, which will contain images, icons, fonts which will also be configurated by the admin panel.
I have not added any styling libraries as in Technamin we always did our custom CSS. 
Lastly, we have our app.component, module and routing where we set up everything we need according to the decided structure. 
