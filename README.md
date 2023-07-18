# PWA

This is a text editor web application that provides a client-server folder structure. It allows you to write and edit JavaScript files using a text editor interface. The application utilizes various technologies, such as webpack, IndexedDB, service workers, and Heroku for deployment.

## Installation

To use this text editor web application, follow the steps below:

1. Clone this repository to your local machine.
2. Open the project in your preferred text editor.

## Starting the Application

1. Open your terminal and navigate to the root directory of the application.
2. Run the command `npm run start`.
   - This command will start the backend server and serve the client application.

## Bundling JavaScript Files

1. To bundle your JavaScript files using webpack, run the necessary webpack plugins by executing the command `npm run webpack`.
   - This will generate an HTML file, service worker, and a manifest file.

## Next-gen JavaScript Support

This text editor web application supports next-gen JavaScript features. You can use modern JavaScript syntax in your application, ensuring that the text editor functions correctly in the browser without any errors.

## IndexedDB Integration

The text editor application utilizes IndexedDB for database storage. When you open the text editor, IndexedDB immediately creates a database storage for saving your content.

- Enter your content in the text editor.
- When you click off the DOM window, the content will be automatically saved with IndexedDB.

When you reopen the text editor after closing it, your previously saved content will be retrieved from IndexedDB.

## Application Installation and Service Worker

By clicking on the "Install" button, you can download the web application as an icon on your desktop.

When you load the web application, it will have a registered service worker using Workbox, which enables offline functionality and caching of static assets.

## Walk-through video




## Author

Rush Burriel
- GitHub: [burrielrush](https://github.com/burrielrush)
- Email: burrielrush@gmail.com

---

Thank you for using the Text Editor Web Application! If you have any questions or need further assistance, feel free to reach out to me.

