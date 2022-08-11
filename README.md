## Project Structure
Here I just have an overview of what the project structure might look like, to keep my code clean, organized, reusable and scalable
- ```src```
    - ```index.js```
    - ```/assets``` //---static files (like images)
    - ```/context``` //---For contexts....
    - ```/styles`` //---Global Stylesheets
    - ```/data``` //---Hardcoded data (constants,json,....)
    - ```/hooks``` //---Hooks
    - ```/Utilities```//--- Helper functions(like converters)
    - ```/pages``` //--- Page specific containers
        - ```/Home```
        - ```/About```
        - ```/Play```
        - ```/Contact```
    - ```/layouts``` //--- Shared global components
        - ```/PageContainer```
        - ```/Navbar```
        - ```/Footer```
    - ```/components```//--- Reusable shared !dumb! components
    - ```/lib``` //--- Facade wrapper for third party libs
    - ```/services``` //--- API based singletons
    - ```/Features``` //--- Features
        - ```game```//---Everything to do about the game feature
            - ```components```//---All components only used in the game
            - ```hooks```//--- All hooks only used in the game
            - ```services```//--- All services only used in the ....
            - ```index.js```//---Imports and exports for the game feature
***
## Install Tailwind CSS
For learning purposes, and to prevent losing a lot of time in CSS, I will use Tailwind CSS in this project.
To add it to the project I followed [Tailwind's official documentation](https://tailwindcss.com/docs/guides/create-react-app)
- ```npm install -D tailwindcss postcss autoprefixer```
- ```npx tailwindcss init -p```
- Configure tailwind in the new ```tailwind.config.js``` file
```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./src/**/*.{js,jsx,ts,tsx}"],
        theme: {
            extend: {},
        },
        plugins: [],
}
```
- Add tailwind to the project's ```/styles/global.css``` stylesheet.
```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
- Import the css into app.js
- Test tailwind by using tailwind classes in the app.
```javascript
    function App() {
      return (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      );
}
```