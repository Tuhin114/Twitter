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

### Summary1

The `SignUpPage` component is a form-based page where users can sign up by entering their email, username, full name, and password. It uses state management to handle form inputs and provides a basic structure with styling and iconography to create a user-friendly interface. The form submission currently logs the form data to the console, and the layout adjusts responsively for different screen sizes.

## Important Note 2

Let's go through the provided `XSvg` component with detailed comments explaining each part of the code:

### XSvg Component

### Detailed Explanation

#### Component Definition

- **Component Name:** `XSvg`
  - This component is a stateless functional component that returns an SVG element.
- **Props Handling:**
  - The component accepts `props` and spreads them onto the SVG element using the `{...props}` syntax. This allows for passing additional properties such as `className`, `style`, etc., to the SVG element.

#### SVG Element

- **aria-hidden:**
  - `aria-hidden="true"`: This attribute hides the SVG from screen readers, which is useful if the SVG is purely decorative and doesn't convey any meaningful information.
- **viewBox:**
  - `viewBox="0 0 24 24"`: This attribute defines the coordinate system and aspect ratio of the SVG. The viewBox is set to cover a 24x24 unit square.
- **Spreading Props:**
  - `{...props}`: This syntax spreads any additional props passed to the `XSvg` component onto the SVG element itself.

#### Path Element

- **d Attribute:**
  - `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />`
  - The `d` attribute contains a series of commands and coordinates that define the shape of the SVG path. These commands are part of the SVG path syntax and describe the movements to draw the shape.

### Export Statement

- **Default Export:**
  - `export default XSvg;`
  - This statement exports the `XSvg` component as the default export from the module, allowing it to be imported and used in other files.

By including detailed comments and explanations, the code is easier to understand and maintain. This level of detail ensures that anyone reading the code can grasp the purpose and functionality of each part of the component.

## Important Note 3

Let's break down the `LoginPage` component step-by-step, explaining each part in detail.

### Imports1

```javascript
import { useState } from "react";
import { Link } from "react-router-dom";

import XSvg from "../../../components/svgs/X";

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
```

- **React and React Router:**
  - `useState`: A React hook for managing state in functional components.
  - `Link`: A component from `react-router-dom` used to navigate between routes.
- **Custom SVG Component:**
  - `XSvg`: A custom SVG component.
- **Icons:**
  - `MdOutlineMail`, `MdPassword`: Icons from `react-icons/md` for email and password fields.

### Component Definition and State Initialization1

```javascript
const LoginPage = () => {
 const [formData, setFormData] = useState({
  username: "",
  password: "",
 });
```

- **State:**
  - `formData`: An object to store the values of the form inputs.
  - `setFormData`: A function to update the `formData` state.

### Event Handlers1

```javascript
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
 };

 const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };
```

- **handleSubmit:**
  - Prevents the default form submission.
  - Logs the current `formData` to the console (useful for debugging).
- **handleInputChange:**
  - Updates the `formData` state whenever an input field changes.
  - Uses the `name` attribute of the input field to correctly update the corresponding value in the `formData` object.

### Main Component JSX1

```javascript
 const isError = false;

 return (
  <div className='max-w-screen-xl mx-auto flex h-screen'>
   <div className='flex-1 hidden lg:flex items-center justify-center'>
    <XSvg className='lg:w-2/3 fill-white' />
   </div>
   <div className='flex-1 flex flex-col justify-center items-center'>
    <form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
     <XSvg className='w-24 lg:hidden fill-white' />
     <h1 className='text-4xl font-extrabold text-white'>{"Let's"} go.</h1>
     <label className='input input-bordered rounded flex items-center gap-2'>
      <MdOutlineMail />
      <input
       type='text'
       className='grow'
       placeholder='username'
       name='username'
       onChange={handleInputChange}
       value={formData.username}
      />
     </label>
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
     <button className='btn rounded-full btn-primary text-white'>Login</button>
     {isError && <p className='text-red-500'>Something went wrong</p>}
    </form>
    <div className='flex flex-col gap-2 mt-4'>
     <p className='text-white text-lg'>{"Don't"} have an account?</p>
     <Link to='/signup'>
      <button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign up</button>
     </Link>
    </div>
   </div>
  </div>
 );
};
```

- **Container:**
  - A `div` that sets the maximum width, centers the content, and ensures it takes up the full height of the screen.
- **Left Side (Visible on Large Screens):**
  - Contains the `XSvg` component, which is hidden on smaller screens (`hidden lg:flex`).
- **Right Side (Form):**
  - Contains the form and a secondary `XSvg` component for mobile view (`lg:hidden`).
  - The form has a title "Let's go."

#### Form Fields1

##### Username Field

```javascript
     <label className='input input-bordered rounded flex items-center gap-2'>
      <MdOutlineMail />
      <input
       type='text'
       className='grow'
       placeholder='username'
       name='username'
       onChange={handleInputChange}
       value={formData.username}
      />
     </label>
```

- **Username Input:**
  - A labeled input field for the username.
  - Uses the `MdOutlineMail` icon.
  - Controlled component: `value` is tied to `formData.username`.

##### Password Field1

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

- **Password Input:**
  - A labeled input field for the password.
  - Uses the `MdPassword` icon.
  - Controlled component: `value` is tied to `formData.password`.

#### Submit Button and Error Message1

```javascript
     <button className='btn rounded-full btn-primary text-white'>Login</button>
     {isError && <p className='text-red-500'>Something went wrong</p>}
```

- **Submit Button:**
  - A button to submit the form.
- **Error Message:**
  - Displays an error message if `isError` is `true`.

### Link to Sign Up Page

```javascript
    <div className='flex flex-col gap-2 mt-4'>
     <p className='text-white text-lg'>{"Don't"} have an account?</p>
     <Link to='/signup'>
      <button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign up</button>
     </Link>
    </div>
   </div>
  </div>
 );
};
export default LoginPage;
```

- **Sign Up Link:**
  - A prompt and a button to navigate to the signup page if the user doesn't have an account.
- **Export Statement:**
  - Exports the `LoginPage` component for use in other parts of the application.

### Summary

The `LoginPage` component is a form-based page where users can log in by entering their username and password. It uses state management to handle form inputs and provides a basic structure with styling and iconography to create a user-friendly interface. The form submission currently logs the form data to the console, and the layout adjusts responsively for different screen sizes. The component also includes a link to navigate to the signup page for users who don't have an account.

## Important Note 4

Let's break down the `HomePage` component step-by-step, explaining its structure, functionality, and purpose in detail.

### Imports2

```javascript
import { useState } from "react";

import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";
```

- **React:**
  - `useState`: A React hook that allows you to add state to a functional component.
- **Components:**
  - `Posts`: A component that likely renders a list of posts.
  - `CreatePost`: A component that likely provides a form or interface for creating a new post.

### Component Definition and State Initialization2

The `HomePage` component is defined as a functional component. Inside this component, the `useState` hook is used to manage the type of feed being displayed:

```javascript
const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou");
```

- **State:**
  - `feedType`: A state variable that holds the current type of feed being displayed, which can be either `"forYou"` or `"following"`.
  - `setFeedType`: A function to update the `feedType` state.

### Main Component JSX2

The `HomePage` component returns JSX that defines the structure of the home page:

```javascript
  return (
    <>
      <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
        {/* Header */}
        <div className="flex w-full border-b border-gray-700">
          <div
            className={
              "flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
            }
            onClick={() => setFeedType("forYou")}
          >
            For you
            {feedType === "forYou" && (
              <div className="absolute bottom-0 w-10 h-1 rounded-full bg-primary"></div>
            )}
          </div>
          <div
            className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
            onClick={() => setFeedType("following")}
          >
            Following
            {feedType === "following" && (
              <div className="absolute bottom-0 w-10 h-1 rounded-full bg-primary"></div>
            )}
          </div>
        </div>

        {/* CREATE POST INPUT */}
        <CreatePost />

        {/* POSTS */}
        <Posts />
      </div>
    </>
  );
};
```

#### Structure and Styling

- **Container `div`:**
  - `className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen"`:
    - `flex-[4_4_0]`: Custom flex-grow, flex-shrink, and flex-basis properties for layout.
    - `mr-auto`: Margin-right auto for alignment.
    - `border-r border-gray-700`: Right border with a specific color for separation.
    - `min-h-screen`: Minimum height to cover the full viewport height.

#### Header Section

- **Header Container:**
  - `className="flex w-full border-b border-gray-700"`:
    - Flexbox container that spans the full width and has a bottom border for separation.

- **Feed Type Buttons:**
  - **For You Button:**
    - `className={"flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"}`:
      - Flex container that centers content horizontally.
      - `flex-1`: Takes up equal space among siblings.
      - `p-3`: Padding.
      - `hover:bg-secondary`: Background color change on hover.
      - `transition duration-300`: Smooth transition effect.
      - `cursor-pointer`: Pointer cursor on hover.
      - `relative`: Positioned relative for child positioning.

    - `onClick={() => setFeedType("forYou")}`:
      - Updates `feedType` to `"forYou"` when clicked.

    - Conditional Highlight:
      - `{feedType === "forYou" && (<div className="absolute bottom-0 w-10 h-1 rounded-full bg-primary"></div>)}`:
        - Renders a bottom highlight if `feedType` is `"forYou"`.
        - Positioned absolutely at the bottom with specific dimensions and styling.

  - **Following Button:**
    - Similar structure and behavior to the "For You" button, but for the `"following"` feed type.

#### Create Post Section

- **CreatePost Component:**
  - `<CreatePost />`:
    - This component likely contains a form or interface for creating a new post. It is rendered below the header.

#### Posts Section

- **Posts Component:**
  - `<Posts />`:
    - This component likely renders a list of posts. It is displayed below the CreatePost component.

### Export Statement2

- **Default Export:**
  - `export default HomePage;`
  - This statement exports the `HomePage` component so it can be imported and used in other parts of the application.

### Summary2

The `HomePage` component is structured to provide a user interface for viewing and interacting with different types of post feeds. It includes:

- **State Management:**
  - Manages the type of feed being displayed (`forYou` or `following`).

- **Header Section:**
  - Contains buttons to switch between the "For You" and "Following" feeds, with visual feedback indicating the active feed.

- **Create Post Section:**
  - Contains a component (`CreatePost`) for creating new posts.

- **Posts Section:**
  - Contains a component (`Posts`) for displaying a list of posts.

The layout is responsive and uses flexbox for alignment and distribution of space, with hover effects and smooth transitions for a better user experience.
