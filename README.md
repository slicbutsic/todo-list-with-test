# Todo project

This project is created with the purpose of writing tests for a Next.js application.

## Features

- User authentication with Clerk (Sign up, log in, and create projects)
- Testing using Jest

## Setup

### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone <git@github.com:slicbutsic/todo-list-with-test.git>
cd <todo-list-with-test>
```

### 2. Clerk

- **Clerk** for user authentication
- **Create an account or sign in (https://clerk.com/)
- **Create a `.env.local` file** in the root directory and add the following environment variables:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`

### 3. Install dependencies

```bash
npm install jest lucide-react uuid db.json
```

This will install:

- **Jest** for writing and running tests
- **Lucide React** for icons
- **UUID** for generating unique identifiers
- **JSON Server** for local database simulation


### 4. Connect JSON DB

For documentation, check [JSON Server GitHub](https://github.com/typicode/json-server).

To set up the JSON server:

1. Add the following script to your `package.json` under the `"scripts"` section:

   ```json
   "scripts": {
     "json-server": "json-server --watch data/todos.json --port 3001"
   }

2. Run npm run json-server to start db

### 5. Start Server

To start the Next.js development server, use:

```bash
npm run dev
```
And visit http://localhost:3000 in your browser.
