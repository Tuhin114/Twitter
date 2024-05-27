# Fronend

   1. `npm create vite@latest`
   2. `npm run dev`
   3. tailwind css documentation
   4. `npm install -D tailwindcss postcss autoprefixer`
   5. `npx tailwindcss init -p`
   6. copy paste in tailwind.configure.js
   7. update index.css
   8. daisy UI
   9. `npm i -D daisyui@latest`
   10. plugins
   11. see the theme change in index.html
   12. `npm install react-router-dom react-icons`

## Important Note 1

Absolutely, let's go through your code step-by-step with detailed explanations included inline. Here’s the `SignUpPage` component explained in detail:

### Imports

```javascript
import { Link } from "react-router-dom";
import { useState } from "react";
import XSvg from "../../../components/svgs/X";

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
```

- **React and React Router**:
  - `Link`: Used to navigate to different routes (e.g., to navigate to the login page).
  - `useState`: React hook for managing state in functional components.
- **Custom SVG Component**:
  - `XSvg`: Likely a custom logo or icon component.
- **Icons**:
  - `MdOutlineMail`, `MdPassword`, `MdDriveFileRenameOutline` from `react-icons/md` and `FaUser` from `react-icons/fa`: These are icons for email, username, password, and full name fields.

### Component Definition and State Initialization

```javascript
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });
```

- **State**:
  - `formData`: An object to store the values of the form inputs.
  - `setFormData`: A function to update the `formData` state.

### Event Handlers

```javascript
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
```

- **handleSubmit**:
  - Prevents the default form submission.
  - Logs the current `formData` to the console (useful for debugging).
- **handleInputChange**:
  - Updates the `formData` state whenever an input field changes.
  - Uses the `name` attribute of the input field to correctly update the corresponding value in the `formData` object.

### Main Component JSX

```javascript
  const isError = false;

  return (
    <div className='max-w-screen-xl mx-auto flex h-screen px-10'>
      <div className='flex-1 hidden lg:flex items-center justify-center'>
        <XSvg className='lg:w-2/3 fill-white' />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <form className='lg:w-2/3 mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
          <XSvg className='w-24 lg:hidden fill-white' />
          <h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
```

- **Container**:
  - A `div` that sets the maximum width, centers the content, and ensures it takes up the full height of the screen.
- **Left Side (Visible on Large Screens)**:
  - Contains the `XSvg` component, which is hidden on smaller screens (`hidden lg:flex`).
- **Right Side (Form)**:
  - Contains the form and a secondary `XSvg` component for mobile view (`lg:hidden`).
  - The form has a title "Join today."

### Form Fields

#### Email Field

```javascript
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdOutlineMail />
            <input
              type='email'
              className='grow'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>
```

- **Email Input**:
  - A labeled input field for email.
  - Uses the `MdOutlineMail` icon.
  - Controlled component: `value` is tied to `formData.email`.

#### Username and Full Name Fields

```javascript
          <div className='flex gap-4 flex-wrap'>
            <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
              <FaUser />
              <input
                type='text'
                className='grow'
                placeholder='Username'
                name='username'
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>
            <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
              <MdDriveFileRenameOutline />
              <input
                type='text'
                className='grow'
                placeholder='Full Name'
                name='fullName'
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </label>
          </div>
```

- **Username Input**:
  - A labeled input field for the username.
  - Uses the `FaUser` icon.
  - Controlled component: `value` is tied to `formData.username`.
- **Full Name Input**:
  - A labeled input field for the full name.
  - Uses the `MdDriveFileRenameOutline` icon.
  - Controlled component: `value` is tied to `formData.fullName`.

#### Password Field

```javascript
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdPassword />
            <input
              type='password'
              className='grow'
              placeholder='Password'
              name='password'
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
```

- **Password Input**:
  - A labeled input field for the password.
  - Uses the `MdPassword` icon.
  - Controlled component: `value` is tied to `formData.password`.

### Submit Button and Error Message

```javascript
          <button className='btn rounded-full btn-primary text-white'>Sign up</button>
          {isError && <p className='text-red-500'>Something went wrong</p>}
        </form>
```

- **Submit Button**:
  - A button to submit the form.
- **Error Message**:
  - Displays an error message if `isError` is `true`.

### Link to Sign In Page

```javascript
        <div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
          <p className='text-white text-lg'>Already have an account?</p>
          <Link to='/login'>
            <button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
```

- **Sign In Link**:
  - A prompt and a button to navigate to the login page if the user already has an account.
- **Export Statement**:
  - Exports the `SignUpPage` component for use in other parts of the application.

### Summary

The `SignUpPage` component is a form-based page where users can sign up by entering their email, username, full name, and password. It uses state management to handle form inputs and provides a basic structure with styling and iconography to create a user-friendly interface. The form submission currently logs the form data to the console, and the layout adjusts responsively for different screen sizes.
