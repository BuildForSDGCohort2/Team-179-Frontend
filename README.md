[![Codacy Badge](https://api.codacy.com/project/badge/Grade/86f6d693fe9e4dc8b334822ca5af50c1)](https://app.codacy.com/gh/BuildForSDGCohort2/Team-179-Frontend?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/Team-179-Frontend&utm_campaign=Badge_Grade_Settings)

# Team-179-Frontend farmers crowdfunding app codebase

Agri-fund, Agri-loop, Agri-vesty leverages networks for greater reach and exposure to collectively raise capital for farmers through investors.

## Features

**The general page breakdown looks like this:**
-   Home page (URL: /#/ )
    -   List of tags (ie melon, onions, avocado)
    -   List of crowdfunding request posts from the farmers
    -   Pagination for list of crowdfunding request posts

-   Sign in/Sign up pages (URL: /#/login, /#/register )
    -   Uses JWT or anything else.
    -   Authentication

-   Settings page (URL: /#/settings )

-   Dashboad (URL: /#/dashboard )
    -   List of fundrising posts populated created by the farmer.
    -   Investors favorited crowdfunding posts

-   Editor page to create/edit crowdfunding request posts (URL: /#/editor, /#/editor/post-slug-here)

-   Post page (URL: /#/post/post-slug-here )
    -   Delete post button (only shown to post author)
    -   Single post display on the client side
    -   Comments section at bottom of page
    -   Delete comment button (only shown to comment's author)
    
-   Profile page (URL: /#/profile/:username, /#/profile/:investors-username/favorites )
    -   Show basic investor or farmer info and verification docs
    -   Funded amount for farmer or investor

<br />

