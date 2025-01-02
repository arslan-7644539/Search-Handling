# Employee Data Project

This is a React-based project that displays employee data fetched from a mock API. The app allows users to search for employees by name, showing filtered results dynamically.

---

### 1. **Search and Filter Using `filter`**

- The `filter` function is used to dynamically filter the list of employees based on the input provided in the search field.
- If the `inputData` is not empty, the `users` list is filtered by employee names.

---

### 2. **Displaying Data Using `map`**

- The `map` function is used to iterate over the filtered list of employees and display each employee's details in a card format.

---

### 3. **Working with an API Using `axios`**

- The app fetches employee data from the mock API using `axios` for HTTP requests.
- The data is then parsed and stored in the state, which is subsequently used to render the list of employees.

---

### 4. **React Routing**

- The project includes `react-router-dom` for navigation between different pages.
- It features routes for the home page, employee details, and any other necessary views.

---

This is a simple React project that showcases key concepts like state management, data fetching with `axios`, filtering, React routing, and displaying dynamic content with React's powerful hooks (`useState` and `useEffect`).
