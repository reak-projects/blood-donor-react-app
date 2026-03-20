# 🩸 Blood Donor Finder (React App)

A simple React application that helps users find blood donors quickly.
Users can filter donors by blood group, search by city, and send a request for help.

---

## Link (Deployed)
```
https://reak-projects.github.io/blood-donor-react-app
```

# 🚀 Features

* Fetch donor data from API
* Filter donors by blood group
* Search donors by city
* View donor availability
* Send request to donors
* Show total available donors
* Loading and empty state handling

---

# 🛠 Tech Stack

* React.js
* JavaScript (ES6)
* CSS
* Fetch API

---

# 📦 Project Structure

blood-donor-app

```
src
 ├── App.js
 ├── App.css
 ├── index.js
public
package.json
README.md
```

---

# ⚙️ Installation

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/blood-donor-app.git
```

2. Navigate into the project folder

```
cd blood-donor-app
```

3. Install dependencies

```
npm install
```

4. Run the development server

```
npm start
```

The app will run on:

```
http://localhost:3000
```

---

# 🌐 API Used

```
https://jsonplaceholder.typicode.com/users
```

This API is used to simulate donor data.

---

# 📸 Application Workflow

1. React fetches donor data using `useEffect`
2. Data is stored using `useState`
3. Users can filter donors by blood group
4. Users can search donors by city
5. Clicking **Request Help** changes button to **Request Sent**

---

# 🚀 Deployment (Hosting)

You can deploy this project using:

### GitHub Pages

```
npm install gh-pages --save-dev
```

Add this in `package.json`:

```
"homepage": "https://YOUR_USERNAME.github.io/blood-donor-app"
```

Add scripts:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Deploy:

```
npm run deploy
```

---

# 🎯 Learning Concepts

This project demonstrates:

* React Hooks (`useState`, `useEffect`)
* API fetching
* Filtering and derived state
* Conditional rendering
* Component-based UI

---

# 👨‍💻 Author

Regency Patel

---

# ⭐ Future Improvements

* Add real donor database
* Add authentication
* Add Google Maps integration
* Add request form
* Improve UI using Tailwind CSS
