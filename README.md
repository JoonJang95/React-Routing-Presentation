# React-Routing-Presentation

I made this repo to present the basic fundamentals of front-end routing with Single page applications (React specific).

React-Router is a common go-to choice to implement this, but keep in mind it is a huge library... Sometimes you just need a simple routing implementation and it might not be worth the lowered web-performance to use React-Router.

With that being said, I was hoping to implement basic front-end routing without React-Router and this repo is what I came up with. React-Router is still an amazing tool that I highly recommend. In addition, I hope this repo gives an insight into how React-Router library works behind the scenes.

\*\* The 3 important steps to note

1. Backend Setup

- You want express to serve up your application for any given URL.

  This is achieved by using:

  a) Express static middleware to serve up your webpack bundle and css stylesheet

        `app.use(express.static(path.join(__dirname, '../public')));`

  b) Set up your servers API GET route to accept any url and send back your html file.

        `
           app.get('*', (req, res) => {
             res.sendFile(path.join(__dirname, '../public/index.html'));
           });
        `

2. Conditional Rendering

- Set up your React components to render based on what the current URL is

          `
          this.PAGES = {
            '/': HomePage,
            '/login': LoginPage,
            '/about': AboutPage,
            '/contact': ContactPage
          };

          const CurrentPage = this.PAGES[document.location.pathname] || Error404;

          return (
            <div>
              <CurrentPage />
            </div>
          );
          `

- \*\*Note: Without implementing the browser's history API, you're not utlizing one of React's key feature of auto re-rendering based on state change. Also this makes unnecessary amounts of get requests to the server to serve up your app each time you go to a new page (different URL).

3. History API

- This API provides access to the browser's history and it's what the browser uses to move back & forth through your browsing history. In our case, we want to use this to manipulate the contents of the history stack.
- Use this API to change your browser's URL and let React take care of the re-rendering work with a state update.

**_Overall_**

After implementing these 3 steps, you're able to freely change the url and React will render out the respective components accordingly. Also, you don't have to worry about excessive get requests being sent each time you change the url and most of all, enjoy the beauty of a Single Page App!

Thanks for reading!
