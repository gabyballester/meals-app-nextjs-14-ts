# Meal App

## Descripcion

Meal App is an educational project to demonstrate knowledge of Next.js. It allows users to order food through the app.

## Getting Started

1. Install the necessary dependencies: Before running the development server, make sure to install all project dependencies. You can do this with one of the following commands:

```bash
npm install
```

2. Populate the database: To populate the database, execute the following command:

```bash
node initdb.js
```

Which generates meals.db containing the data itself.

3. Run the development server: You can start the development server using one of the following commands:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database

This application uses SQLite as its database. Ensure that the SQLite database is properly set up before running the application.

**Note:** Image files must be stored in assets and also in public allowing the db url access the folder based on the url provided.

## Code Quality and Best Practices

The platform ensures high code quality and follows best practices.

## Base libraries used

- **Next.js:** As the chosen framework to build with.
- **React:** As the UI library in the background.
- **TypeScript:** Adding strong static types and advanced features to improve large-scale development and code maintainability.
- **SQLite:** As the database to provide API data.
- **Database Interaction:** SQL Queries to interact with the SQLite database, allowing efficient CRUD operations.

## UX/UI

- **CSS Modules:** The application utilizes global CSS styles and CSS Modules for precise styling on each component that requires it.
- **Suspense:** Implemented for managing loading states to enhance user experience.

## Contributions

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your branch (git push origin feature/new-feature).
   Open a Pull Request.
