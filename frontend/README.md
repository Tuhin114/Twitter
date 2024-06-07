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
   13. You can search any component name such as input, skeleton in daisy UI to see more in details.
   14. `npm i @tanstack/react-query`
   15. `react-hot-toast`

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

## Important Note 5

Let's break down the `Sidebar` component step-by-step, explaining its structure, functionality, and purpose in detail.

### Imports3

```javascript
import XSvg from "../svgs/X";

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
```

- **XSvg Component**: A custom SVG component imported from a relative path.
- **Icons**: Various icons from the `react-icons` library for visual elements:
  - `MdHomeFilled`: Home icon.
  - `IoNotifications`: Notifications icon.
  - `FaUser`: User profile icon.
  - `BiLogOut`: Logout icon.
- **Link**: A component from `react-router-dom` for navigation.

### Component Definition3

The `Sidebar` component is defined as a functional component:

```javascript
const Sidebar = () => {
  const data = {
    fullName: "John Doe",
    username: "johndoe",
    profileImg: "/avatars/boy1.png",
  };
```

- **User Data**:
  - `data`: An object containing user information such as `fullName`, `username`, and `profileImg`.

### Main Component JSX3

The `Sidebar` component returns JSX that defines its structure:

```javascript
  return (
    <div className='md:flex-[2_2_0] w-18 max-w-52'>
      <div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'>
        <Link to='/' className='flex justify-center md:justify-start'>
          <XSvg className='px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900' />
        </Link>
        <ul className='flex flex-col gap-3 mt-4'>
          <li className='flex justify-center md:justify-start'>
            <Link
              to='/'
              className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
            >
              <MdHomeFilled className='w-8 h-8' />
              <span className='text-lg hidden md:block'>Home</span>
            </Link>
          </li>
          <li className='flex justify-center md:justify-start'>
            <Link
              to='/notifications'
              className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
            >
              <IoNotifications className='w-6 h-6' />
              <span className='text-lg hidden md:block'>Notifications</span>
            </Link>
          </li>
          <li className='flex justify-center md:justify-start'>
            <Link
              to={`/profile/${data?.username}`}
              className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
            >
              <FaUser className='w-6 h-6' />
              <span className='text-lg hidden md:block'>Profile</span>
            </Link>
          </li>
        </ul>
        {data && (
          <Link
            to={`/profile/${data.username}`}
            className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
          >
            <div className='avatar hidden md:inline-flex'>
              <div className='w-8 rounded-full'>
                <img src={data?.profileImg || "/avatar-placeholder.png"} />
              </div>
            </div>
            <div className='flex justify-between flex-1'>
              <div className='hidden md:block'>
                <p className='text-white font-bold text-sm w-20 truncate'>{data?.fullName}</p>
                <p className='text-slate-500 text-sm'>@{data?.username}</p>
              </div>
              <BiLogOut className='w-5 h-5 cursor-pointer' />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
```

#### Structure and Styling3

- **Outer Container:**
  - `className='md:flex-[2_2_0] w-18 max-w-52'`:
    - Custom flex-grow, flex-shrink, and flex-basis properties for layout in larger screens.
    - Fixed width for smaller screens.
    - Maximum width constraint.

- **Sidebar Container:**
  - `className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'`:
    - `sticky top-0 left-0`: Ensures the sidebar stays in place when scrolling.
    - `h-screen`: Full viewport height.
    - `flex flex-col`: Flex container for vertical layout.
    - `border-r border-gray-700`: Right border for separation.
    - Width adjusts between mobile (`w-20`) and larger screens (`md:w-full`).

#### Logo and Navigation Links

- **Logo:**
  - `<Link to='/' className='flex justify-center md:justify-start'>`:
    - Link to the home page.
    - `justify-center` for smaller screens, `justify-start` for larger screens.
    - `XSvg` component with styling for dimensions, padding, and hover effects.

- **Navigation Links:**
  - Wrapped in an unordered list (`<ul>`), each link (`<Link>`) is inside a list item (`<li>`):
    - **Home Link:**
      - `to='/'`: Navigates to the home page.
      - `className` for styling and hover effects.
      - Displays the `MdHomeFilled` icon and text "Home" (text hidden on small screens).
    - **Notifications Link:**
      - Similar structure to the Home link.
      - `to='/notifications'`: Navigates to the notifications page.
      - Displays the `IoNotifications` icon and text "Notifications".
    - **Profile Link:**
      - `to={`/profile/${data?.username}`}`: Navigates to the user's profile page.
      - Displays the `FaUser` icon and text "Profile".

#### User Profile and Logout

- **User Profile Section:**
  - Only rendered if `data` exists.
  - `to={`/profile/${data.username}`}`: Navigates to the user's profile page.
  - Contains user avatar and details:
    - Avatar image with a fallback.
    - User's full name and username (hidden on small screens).

- **Logout Icon:**
  - `BiLogOut` icon for logging out.

### Summary3

The `Sidebar` component provides a vertical navigation menu for the application. It includes:

- **Logo Link**: Takes the user to the home page.
- **Navigation Links**: Links for Home, Notifications, and Profile pages, each with icons and text (text hidden on small screens).
- **User Profile Section**: Displays user's avatar, full name, and username, with a logout icon.

The component uses responsive design principles to adjust the layout and visibility of elements based on screen size, ensuring a good user experience across different devices.

## Important Note 6

### `RightPanel` Component Overview

The `RightPanel` component provides a section suggesting users to follow. This component fetches and displays a list of users with an option to follow them. It handles both loading and loaded states to enhance user experience.

### Imports4

```javascript
import { Link } from "react-router-dom";
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import { USERS_FOR_RIGHT_PANEL } from "../../utils/db/dummy";
```

- **Link**: From `react-router-dom` for navigation.
- **RightPanelSkeleton**: Component for displaying loading placeholders.
- **USERS_FOR_RIGHT_PANEL**: Dummy data simulating the list of users to follow.

### Component Definition4

```javascript
const RightPanel = () => {
  const isLoading = false;

  return (
    <div className='hidden lg:block my-4 mx-2'>
      <div className='bg-[#16181C] p-4 rounded-md sticky top-2'>
        <p className='font-bold'>Who to follow</p>
        <div className='flex flex-col gap-4'>
          {isLoading && (
            <>
              <RightPanelSkeleton />
              <RightPanelSkeleton />
              <RightPanelSkeleton />
              <RightPanelSkeleton />
            </>
          )}
          {!isLoading &&
            USERS_FOR_RIGHT_PANEL?.map((user) => (
              <Link
                to={`/profile/${user.username}`}
                className='flex items-center justify-between gap-4'
                key={user._id}
              >
                <div className='flex gap-2 items-center'>
                  <div className='avatar'>
                    <div className='w-8 rounded-full'>
                      <img src={user.profileImg || "/avatar-placeholder.png"} />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-semibold tracking-tight truncate w-28'>
                      {user.fullName}
                    </span>
                    <span className='text-sm text-slate-500'>@{user.username}</span>
                  </div>
                </div>
                <div>
                  <button
                    className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
                    onClick={(e) => e.preventDefault()}
                  >
                    Follow
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default RightPanel;
```

### Explanation

#### State Management

```javascript
const isLoading = false;
```

- **isLoading**: A boolean flag to indicate whether the data is still loading. For now, it is hardcoded to `false`.

#### Main Container

```javascript
return (
  <div className='hidden lg:block my-4 mx-2'>
    <div className='bg-[#16181C] p-4 rounded-md sticky top-2'>
      <p className='font-bold'>Who to follow</p>
      <div className='flex flex-col gap-4'>
        ...
      </div>
    </div>
  </div>
);
```

- **Outer div**: Hidden on small screens (`hidden lg:block`), adds margin on y-axis (`my-4`) and x-axis (`mx-2`).
- **Inner div**: Styled to be sticky (remains in view on scroll), with a dark background, padding, and rounded corners.

#### Loading State

```javascript
{isLoading && (
  <>
    <RightPanelSkeleton />
    <RightPanelSkeleton />
    <RightPanelSkeleton />
    <RightPanelSkeleton />
  </>
)}
```

- If `isLoading` is true, it renders multiple `RightPanelSkeleton` components to indicate loading.

#### Loaded State

```javascript
{!isLoading &&
  USERS_FOR_RIGHT_PANEL?.map((user) => (
    <Link
      to={`/profile/${user.username}`}
      className='flex items-center justify-between gap-4'
      key={user._id}
    >
      <div className='flex gap-2 items-center'>
        <div className='avatar'>
          <div className='w-8 rounded-full'>
            <img src={user.profileImg || "/avatar-placeholder.png"} />
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-semibold tracking-tight truncate w-28'>
            {user.fullName}
          </span>
          <span className='text-sm text-slate-500'>@{user.username}</span>
        </div>
      </div>
      <div>
        <button
          className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
          onClick={(e) => e.preventDefault()}
        >
          Follow
        </button>
      </div>
    </Link>
  ))}
```

- **Mapping through `USERS_FOR_RIGHT_PANEL`**:
  - **Link**: Each user is wrapped in a `Link` that navigates to their profile.
  - **User Information**: Displays user's avatar, full name, and username.
  - **Follow Button**: A button that triggers a `preventDefault` action on click.

#### Avatar

```javascript
<div className='avatar'>
  <div className='w-8 rounded-full'>
    <img src={user.profileImg || "/avatar-placeholder.png"} />
  </div>
</div>
```

- **Avatar Image**: Displays user's profile image, with a fallback to a placeholder image.

### Summary4

The `RightPanel` component serves as a sidebar for suggesting users to follow. It includes:

- **Loading State**: Placeholder skeletons during data fetching.
- **Loaded State**: A list of user suggestions with profile links and follow buttons.
- **Responsive Design**: Visible only on large screens, styled for a clean, sticky sidebar appearance.

## Important Note 7

### `RightPanelSkeleton` Component Overview

The `RightPanelSkeleton` component is used to display a loading placeholder while the actual user data for the right panel is being fetched. It provides a visual cue to users that the content is loading and improves the perceived performance of the application.

### Component Structure

The `RightPanelSkeleton` component renders a placeholder mimicking the layout of the user suggestion items. It uses a series of `div` elements with specific classes to achieve this.

### Implementation

```javascript
const RightPanelSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 w-52 my-2'>
      <div className='flex gap-2 items-center'>
        <div className='skeleton w-8 h-8 rounded-full shrink-0'></div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col gap-1'>
            <div className='skeleton h-2 w-12 rounded-full'></div>
            <div className='skeleton h-2 w-16 rounded-full'></div>
          </div>
          <div className='skeleton h-6 w-14 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default RightPanelSkeleton;
```

### Explanation2

#### Container

```javascript
<div className='flex flex-col gap-2 w-52 my-2'>
```

- **Class `flex flex-col`**: Arranges children in a column.
- **Class `gap-2`**: Adds space between children.
- **Class `w-52`**: Sets the width to 52 units.
- **Class `my-2`**: Adds vertical margin.

#### Skeleton Item

```javascript
<div className='flex gap-2 items-center'>
  <div className='skeleton w-8 h-8 rounded-full shrink-0'></div>
  <div className='flex flex-1 justify-between'>
    <div className='flex flex-col gap-1'>
      <div className='skeleton h-2 w-12 rounded-full'></div>
      <div className='skeleton h-2 w-16 rounded-full'></div>
    </div>
    <div className='skeleton h-6 w-14 rounded-full'></div>
  </div>
</div>
```

- **First `div` (Avatar Placeholder)**:
  - **Class `skeleton w-8 h-8 rounded-full shrink-0`**: Represents the avatar. The `skeleton` class applies the skeleton styling, `w-8 h-8` sets width and height, `rounded-full` makes it circular, and `shrink-0` prevents shrinking.
  
- **Second `div` (Text and Button Placeholder)**:
  - **Class `flex flex-1 justify-between`**: Arranges children in a row, makes the div take up available space, and justifies content between the edges.
  
- **Nested `div` (Text Placeholder)**:
  - **Class `flex flex-col gap-1`**: Arranges children in a column with a small gap.
  - **Class `skeleton h-2 w-12 rounded-full`**: Placeholder for the full name.
  - **Class `skeleton h-2 w-16 rounded-full`**: Placeholder for the username.
  
- **Button Placeholder**:
  - **Class `skeleton h-6 w-14 rounded-full`**: Represents the follow button with a skeleton effect.

### Styling (Assumed)

The `skeleton` class would typically apply a background color, gradient, or animation to simulate loading. Here is an example of what the CSS might look like:

```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite linear;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

### Summary5

The `RightPanelSkeleton` component is a simple yet effective way to indicate that user data is loading. It maintains the layout of the `RightPanel` suggestions, providing a visual placeholder with the help of `div` elements styled to look like skeleton loaders. This improves the user experience by visually communicating that content is being fetched.

## Important Note 8

### `CreatePost` Component Overview

The `CreatePost` component allows users to create a new post by entering text and optionally uploading an image. It features a form with a textarea for text input, an image upload option, and a submit button. The component also provides feedback for loading and error states.

### Component Structure4

1. **State Management**:
   - `text`: Stores the text entered by the user.
   - `img`: Stores the uploaded image's data URL.
   - `imgRef`: A reference to the hidden file input for image uploads.

2. **Event Handlers**:
   - `handleSubmit`: Handles the form submission.
   - `handleImgChange`: Handles the image file input change.

### Implementation1

```javascript
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const imgRef = useRef(null);

  const isPending = false;
  const isError = false;

  const data = {
    profileImg: "/avatars/boy1.png",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Post created successfully");
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex p-4 items-start gap-4 border-b border-gray-700'>
      <div className='avatar'>
        <div className='w-8 rounded-full'>
          <img src={data.profileImg || "/avatar-placeholder.png"} />
        </div>
      </div>
      <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
        <textarea
          className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
          placeholder='What is happening?!'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {img && (
          <div className='relative w-72 mx-auto'>
            <IoCloseSharp
              className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
              onClick={() => {
                setImg(null);
                imgRef.current.value = null;
              }}
            />
            <img src={img} className='w-full mx-auto h-72 object-contain rounded' />
          </div>
        )}

        <div className='flex justify-between border-t py-2 border-t-gray-700'>
          <div className='flex gap-1 items-center'>
            <CiImageOn
              className='fill-primary w-6 h-6 cursor-pointer'
              onClick={() => imgRef.current.click()}
            />
            <BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
          </div>
          <input type='file' hidden ref={imgRef} onChange={handleImgChange} />
          <button className='btn btn-primary rounded-full btn-sm text-white px-4'>
            {isPending ? "Posting..." : "Post"}
          </button>
        </div>
        {isError && <div className='text-red-500'>Something went wrong</div>}
      </form>
    </div>
  );
};

export default CreatePost;
```

### Explanation1

#### Avatar1

```javascript
<div className='avatar'>
  <div className='w-8 rounded-full'>
    <img src={data.profileImg || "/avatar-placeholder.png"} />
  </div>
</div>
```

- **Avatar Section**: Displays the user's avatar. If the `profileImg` is not available, it defaults to a placeholder image.

#### Text Area

```javascript
<textarea
  className='textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800'
  placeholder='What is happening?!'
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

- **Text Area**: Allows the user to input text for the post. The value is managed by the `text` state, and changes are handled by updating the state.

#### Image Preview

```javascript
{img && (
  <div className='relative w-72 mx-auto'>
    <IoCloseSharp
      className='absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer'
      onClick={() => {
        setImg(null);
        imgRef.current.value = null;
      }}
    />
    <img src={img} className='w-full mx-auto h-72 object-contain rounded' />
  </div>
)}
```

- **Image Preview**: If an image is uploaded, it is displayed with a close button. Clicking the close button removes the image and resets the file input.

#### Bottom Bar

```javascript
<div className='flex justify-between border-t py-2 border-t-gray-700'>
  <div className='flex gap-1 items-center'>
    <CiImageOn
      className='fill-primary w-6 h-6 cursor-pointer'
      onClick={() => imgRef.current.click()}
    />
    <BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
  </div>
  <input type='file' hidden ref={imgRef} onChange={handleImgChange} />
  <button className='btn btn-primary rounded-full btn-sm text-white px-4'>
    {isPending ? "Posting..." : "Post"}
  </button>
</div>
```

- **Icons**: The `CiImageOn` icon triggers the file input for image uploads, and the `BsEmojiSmileFill` icon is for potential future emoji support.
- **File Input**: Hidden input field for uploading images, managed by the `imgRef` reference.
- **Submit Button**: Button to submit the post. Changes to a loading state if `isPending` is true.

#### Error Handling

```javascript
{isError && <div className='text-red-500'>Something went wrong</div>}
```

- **Error Message**: Displays an error message if `isError` is true.

### Summary7

The `CreatePost` component provides a user interface for creating new posts with text and images. It features state management for form data, image preview functionality, and handles form submission. The component is styled with classes for layout and aesthetics, ensuring a user-friendly experience.

## Important Note 9

### `Posts` Component Overview

The `Posts` component is responsible for displaying a list of posts. It handles different states such as loading, empty, and loaded states, and it renders the appropriate content based on these states.

### Component Structure2

1. **State Management**:
   - `isLoading`: Indicates whether the posts are currently being loaded.

2. **Conditional Rendering**:
   - **Loading State**: Displays skeleton loaders when the posts are being loaded.
   - **Empty State**: Displays a message when there are no posts to show.
   - **Loaded State**: Displays the list of posts when the data is available.

### Implementation2

```javascript
import Post from "./Post";
import PostSkeleton from "../skeletons/PostSkeleton";
import { POSTS } from "../../utils/db/dummy";

const Posts = () => {
  const isLoading = false;

  return (
    <>
      {isLoading && (
        <div className='flex flex-col justify-center'>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && POSTS?.length === 0 && (
        <p className='text-center my-4'>No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && POSTS && (
        <div>
          {POSTS.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
```

### Explanation3

#### Loading State3

```javascript
{isLoading && (
  <div className='flex flex-col justify-center'>
    <PostSkeleton />
    <PostSkeleton />
    <PostSkeleton />
  </div>
)}
```

- **Loading Skeletons**: When `isLoading` is true, three `PostSkeleton` components are displayed to indicate that the posts are being loaded.

#### Empty State

```javascript
{!isLoading && POSTS?.length === 0 && (
  <p className='text-center my-4'>No posts in this tab. Switch 👻</p>
)}
```

- **Empty Message**: If `isLoading` is false and `POSTS` array is empty (length is 0), a message is displayed to inform the user that there are no posts.

#### Loaded State3

```javascript
{!isLoading && POSTS && (
  <div>
    {POSTS.map((post) => (
      <Post key={post._id} post={post} />
    ))}
  </div>
)}
```

- **Render Posts**: If `isLoading` is false and `POSTS` array is not empty, each post in the `POSTS` array is rendered using the `Post` component.

### Summary8

The `Posts` component provides a user interface for displaying posts with a robust handling of different states. It uses conditional rendering to show loading skeletons, an empty state message, or the list of posts based on the current state. This approach ensures a smooth and informative user experience while the data is being fetched and displayed.

## Important Note 10

### `PostSkeleton` Component Overview

The `PostSkeleton` component provides a placeholder skeleton UI that mimics the layout of a post while the actual post data is being loaded. This enhances the user experience by giving visual feedback that content is being loaded.

### Component Structure5

1. **Avatar Skeleton**: A circular skeleton that represents the profile image.
2. **Text Skeletons**: Rectangular skeletons that represent the username and timestamp.
3. **Content Skeleton**: A large rectangular skeleton that represents the main content of the post.

### Implementation5

```javascript
const PostSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 w-full p-4'>
      <div className='flex gap-4 items-center'>
        <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
        <div className='flex flex-col gap-2'>
          <div className='skeleton h-2 w-12 rounded-full'></div>
          <div className='skeleton h-2 w-24 rounded-full'></div>
        </div>
      </div>
      <div className='skeleton h-40 w-full'></div>
    </div>
  );
};

export default PostSkeleton;
```

### Explanation5

#### Container Structure

- **Parent Div**:
  - The parent `div` has classes `flex`, `flex-col`, `gap-4`, `w-full`, and `p-4` to create a column layout with spacing between items and padding around the edges.

#### Avatar Skeleton

```javascript
<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
```

- **Skeleton**: The `skeleton` class provides the skeleton loading effect.
- **Size**: `w-10 h-10` sets the width and height to 2.5rem each, making it a circle.
- **Rounded**: `rounded-full` ensures the skeleton is circular.
- **Shrink**: `shrink-0` prevents the avatar from shrinking.

#### Text Skeletons

```javascript
<div className='flex flex-col gap-2'>
  <div className='skeleton h-2 w-12 rounded-full'></div>
  <div className='skeleton h-2 w-24 rounded-full'></div>
</div>
```

- **Container**: The `div` with classes `flex`, `flex-col`, and `gap-2` organizes the text skeletons vertically with spacing.
- **Skeleton Lines**: Each `div` inside has the `skeleton` class for the loading effect.
  - **Height**: `h-2` sets the height to 0.5rem.
  - **Width**: Varies (`w-12` and `w-24`) to simulate different text lengths.
  - **Rounded**: `rounded-full` gives the skeletons rounded edges.

#### Content Skeleton

```javascript
<div className='skeleton h-40 w-full'></div>
```

- **Skeleton**: The `skeleton` class provides the loading effect.
- **Height**: `h-40` sets the height to 10rem.
- **Width**: `w-full` makes the skeleton take the full width of its container.

### Summary9

The `PostSkeleton` component effectively uses skeleton elements to provide a visual placeholder for a post while the actual data is being fetched. This component consists of a circular skeleton for the profile picture, rectangular skeletons for the username and timestamp, and a large rectangular skeleton for the post content. The use of utility classes from a CSS framework ensures that the skeletons are well-styled and aligned, providing a clean and consistent user experience during loading.

## Important Note 11

### `Post` Component Overview

The `Post` component renders a single post with functionalities such as liking, commenting, and deleting the post. It also includes a modal for viewing and adding comments.

### Component Structure6

1. **Avatar and User Information**: Displays the user's profile picture, full name, username, and the time since the post was made.
2. **Post Content**: Includes the post text and optionally an image.
3. **Post Actions**: Allows users to comment, repost, like, and bookmark the post.
4. **Comments Modal**: Shows comments and provides a form to add a new comment.

### Explanation6

#### Post Header

- **Avatar and User Information**:
  - The avatar is wrapped in a `Link` to the user's profile.
  - The user's full name and username are displayed alongside the time since the post was made.
  - If the post belongs to the logged-in user (`isMyPost`), a delete icon (`FaTrash`) is displayed, which triggers the `handleDeletePost` function.

#### Post Content

- **Text and Image**:
  - The post's text is displayed.
  - If the post has an image, it is displayed with a fixed height and contained within the available space.

#### Post Actions

- **Comment, Repost, Like, and Bookmark**:
  - Icons for commenting, reposting, liking, and bookmarking are displayed with counts.
  - Clicking the comment icon opens a modal (`dialog`) for viewing and adding comments.
  - The like icon toggles based on whether the post is liked or not, triggering the `handleLikePost` function.
  - The bookmark icon is a placeholder for bookmarking functionality.

#### Comments Modal

- **Displaying Comments**:
  - The modal displays existing comments.
  - A form at the bottom allows users to add new comments, handled by the `handlePostComment` function.
  - The modal includes a backdrop to close it.

### Summary10

The `Post` component effectively displays a social media post with user information, content, and interaction options. It includes a modal for managing comments, enhancing the interactivity and user experience of the application. The component uses conditional rendering and state management to handle various functionalities such as liking, commenting, and deleting posts.

## Important Note 12

Absolutely! Let's break down the `NotificationPage` component step-by-step and explain each part in detail.

### Step 1: Import Statements

```javascript
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
```

#### Explanation7

- **Link**: This component from `react-router-dom` is used for navigation within the app.
- **LoadingSpinner**: A custom component to display a loading spinner.
- **Icons**: Various icons from `react-icons` library are used to visually represent different types of notifications.

### Step 2: Component Definition and Initial State

```javascript
const NotificationPage = () => {
 const isLoading = false;
 const notifications = [
  {
   _id: "1",
   from: {
    _id: "1",
    username: "johndoe",
    profileImg: "/avatars/boy2.png",
   },
   type: "follow",
  },
  {
   _id: "2",
   from: {
    _id: "2",
    username: "janedoe",
    profileImg: "/avatars/girl1.png",
   },
   type: "like",
  },
 ];
```

#### Explanation8

- **isLoading**: A boolean that indicates if the notifications are being loaded.
- **notifications**: An array of notification objects. Each notification has an `_id`, `from` user details, and a `type` (e.g., "follow", "like").

### Step 3: Header Section

```javascript
 const deleteNotifications = () => {
  alert("All notifications deleted");
 };

 return (
  <div className='flex-[4_4_0] border-l border-r border-gray-700 min-h-screen'>
   <div className='flex justify-between items-center p-4 border-b border-gray-700'>
    <p className='font-bold'>Notifications</p>
    <div className='dropdown '>
     <div tabIndex={0} role='button' className='m-1'>
      <IoSettingsOutline className='w-4' />
     </div>
     <ul
      tabIndex={0}
      className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
     >
      <li>
       <a onClick={deleteNotifications}>Delete all notifications</a>
      </li>
     </ul>
    </div>
   </div>
```

#### Explanation10

- **deleteNotifications**: A function that will handle the deletion of all notifications.
- **Header Section**:
  - **Title**: Displays the text "Notifications".
  - **Settings Dropdown**: Contains an icon that opens a dropdown menu. The menu has an option to delete all notifications.

### Step 4: Loading State and Empty Notifications

```javascript
   {isLoading && (
    <div className='flex justify-center h-full items-center'>
     <LoadingSpinner size='lg' />
    </div>
   )}
   {notifications?.length === 0 && <div className='text-center p-4 font-bold'>No notifications 🤔</div>}
```

#### Explanation11

- **Loading State**: If `isLoading` is true, a loading spinner is displayed centered on the screen.
- **Empty Notifications**: If there are no notifications, a message indicating "No notifications 🤔" is displayed.

### Step 5: Display Notifications

```javascript
   {notifications?.map((notification) => (
    <div className='border-b border-gray-700' key={notification._id}>
     <div className='flex gap-2 p-4'>
      {notification.type === "follow" && <FaUser className='w-7 h-7 text-primary' />}
      {notification.type === "like" && <FaHeart className='w-7 h-7 text-red-500' />}
      <Link to={`/profile/${notification.from.username}`}>
       <div className='avatar'>
        <div className='w-8 rounded-full'>
         <img src={notification.from.profileImg || "/avatar-placeholder.png"} />
        </div>
       </div>
       <div className='flex gap-1'>
        <span className='font-bold'>@{notification.from.username}</span>{" "}
        {notification.type === "follow" ? "followed you" : "liked your post"}
       </div>
      </Link>
     </div>
    </div>
   ))}
  </div>
 );
};
export default NotificationPage;
```

#### Explanation12

- **Notification Mapping**: Iterates over the `notifications` array and renders each notification.
- **Notification Item**:
  - **Type Icon**: Displays an icon based on the notification type ("follow" or "like").
  - **User Details**: A link to the profile of the user who triggered the notification, showing their avatar and username.
  - **Notification Text**: Displays the action performed (e.g., "followed you", "liked your post").

### Summary12

The `NotificationPage` component effectively manages and displays user notifications. It handles loading states, empty notifications, and user interactions like deleting notifications. The component uses icons to visually represent different notification types and links to navigate to user profiles.

- **Imports**: Essential libraries and icons.
- **State Management**: Variables for loading state and notifications data.
- **Header**: Displays the title and settings dropdown.
- **Loading and Empty State**: Displays appropriate feedback for loading and no notifications.
- **Notification Items**: Renders each notification with appropriate icons and user details.

This breakdown covers each part of the `NotificationPage` component, explaining its purpose and how it contributes to the overall functionality.

## Important Note 13

Let's break down the `LoadingSpinner` component step-by-step and explain each part in detail.

### Step 1: Component Definition and Default Props

```javascript
const LoadingSpinner = ({ size = "md" }) => {
```

#### Explanation13

- **Component Declaration**: This defines a functional component named `LoadingSpinner`.
- **Props with Default Value**: The component accepts a `size` prop, which defaults to `"md"` if not provided.

### Step 2: Determine the Size Class

```javascript
 const sizeClass = `loading-${size}`;
```

#### Explanation14

- **Dynamic Class Assignment**: This line constructs a class name based on the `size` prop. For example, if `size` is `"lg"`, the resulting class name will be `"loading-lg"`.

### Step 3: Render the Spinner

```javascript
 return <span className={`loading loading-spinner ${sizeClass}`} />;
};
```

#### Explanation15

- **Rendering the Spinner**: The component returns a `span` element with classes `loading`, `loading-spinner`, and the dynamically generated `sizeClass`.
- **Class Usage**: The `loading-spinner` class likely provides the base styling for the spinner, while the `sizeClass` adjusts its size based on the prop value.

### Step 4: Export the Component

```javascript
export default LoadingSpinner;
```

#### Explanation16

- **Export Statement**: This allows the `LoadingSpinner` component to be imported and used in other parts of the application.

### Summary13

The `LoadingSpinner` component is a simple, reusable component designed to display a loading spinner. It accepts a `size` prop to adjust its size and uses a combination of base and dynamic classes for styling.
This breakdown should help you understand how the `LoadingSpinner` component works, including its use of props, dynamic class generation, and rendering.

## Important Note 14

Certainly! Let's break down the code into smaller parts and explain each section:

### Import Statements14

```jsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../../components/common/Posts";
import ProfileHeaderSkeleton from "../../components/skeletons/ProfileHeaderSkeleton";
import EditProfileModal from "./EditProfileModal";
import { POSTS } from "../../utils/db/dummy";
import { FaArrowLeft } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
```

- This section imports necessary modules and components used in the profile page component.
- `useRef` and `useState` are React hooks used for managing state and referencing DOM elements.
- `Link` is imported from `react-router-dom` for navigation.
- `Posts`, `ProfileHeaderSkeleton`, and `EditProfileModal` are custom components used in the profile page.
- `POSTS` is imported from a dummy database file.
- Various icons like `FaArrowLeft`, `IoCalendarOutline`, `FaLink`, and `MdEdit` are imported from respective libraries (`react-icons`) for displaying icons in the UI.

### ProfilePage Component

```jsx
const ProfilePage = () => {
    // State variables
    const [coverImg, setCoverImg] = useState(null);
    const [profileImg, setProfileImg] = useState(null);
    const [feedType, setFeedType] = useState("posts");

    // Refs for file inputs
    const coverImgRef = useRef(null);
    const profileImgRef = useRef(null);

    // Other variables
    const isLoading = false;
    const isMyProfile = true;
    const user = { ... }; // User data object

    // Function to handle image changes
    const handleImgChange = (e, state) => {
        // Logic to read the file and update state with the image data
    };

    return (
        // JSX structure for the profile page
    );
};
```

- `ProfilePage` is a functional component responsible for rendering the profile page UI.
- It utilizes state hooks (`useState`) for managing the state of cover image, profile image, and feed type.
- `useRef` hooks are used to create references to the file input elements for cover and profile images.
- `isLoading` and `isMyProfile` are boolean variables used for conditional rendering.
- `user` is an object containing user data such as name, profile picture, bio, etc.
- `handleImgChange` is a function to handle changes in the cover and profile images.

### JSX Structure

```jsx
return (
    <div className='flex-[4_4_0] border-r border-gray-700 min-h-screen '>
        {/* Header section */}
        {isLoading && <ProfileHeaderSkeleton />}
        {!isLoading && !user && <p className='text-center text-lg mt-4'>User not found</p>}
        <div className='flex flex-col'>
            {/* User information and cover image */}
            { ... }
            {/* Edit profile button, Follow button, and Update button */}
            { ... }
            {/* User details section */}
            { ... }
            {/* Feed type selector */}
            { ... }
            {/* Posts */}
            <Posts />
        </div>
    </div>
);
```

- The JSX structure represents the layout of the profile page.
- It contains conditional rendering for displaying skeleton loading animation, user not found message, and user information.
- Various sections like user information, edit profile buttons, user details, feed type selector, and posts are rendered within the main div.

This breakdown provides a high-level overview of the profile page component and its structure. Each section plays a specific role in rendering the UI and managing the component's functionality.

## Important Note 15

This component creates a modal for editing the user profile. Let's break down the code and understand it step by step:

### State Management15

```jsx
const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    bio: "",
    link: "",
    newPassword: "",
    currentPassword: "",
});
```

- `formData` state manages the input values for different fields in the edit profile form.

### Input Change Handler

```jsx
const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

- `handleInputChange` function updates the `formData` state when input values change.

### Modal Structure

```jsx
<>
    {/* Button to open the modal */}
    <button
        className='btn btn-outline rounded-full btn-sm'
        onClick={() => document.getElementById("edit_profile_modal").showModal()}
    >
        Edit profile
    </button>

    {/* Modal */}
    <dialog id='edit_profile_modal' className='modal'>
        {/* Modal content */}
        <div className='modal-box border rounded-md border-gray-700 shadow-md'>
            {/* Modal title */}
            <h3 className='font-bold text-lg my-3'>Update Profile</h3>

            {/* Form for editing profile */}
            <form
                className='flex flex-col gap-4'
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Profile updated successfully");
                }}
            >
                {/* Input fields */}
                {/* Each input field is bound to corresponding state value */}
            </form>
        </div>

        {/* Close button */}
        {/* A form to act as a backdrop for the modal */}
    </dialog>
</>
```

- The modal is initially hidden and is displayed when the button is clicked.
- It contains a title, a form for editing profile details, and a close button.
- The form includes input fields for full name, username, email, bio, current password, new password, and a link.
- The `onSubmit` event of the form is handled to prevent the default behavior and show an alert message indicating successful profile update.

### Input Fields

```jsx
<input
    type='text'
    placeholder='Full Name'
    className='flex-1 input border border-gray-700 rounded p-2 input-md'
    value={formData.fullName}
    name='fullName'
    onChange={handleInputChange}
/>
```

- Each input field is a controlled component, meaning its value is controlled by the component's state (`formData`) and changes are handled by the `handleInputChange` function.

### Close Button

```jsx
<button className='outline-none'>close</button>
```

- This button is used to close the modal. It's placed inside a form acting as the backdrop for the modal, which enables users to click outside the modal to close it.

Overall, this component creates a modal for editing the user profile with various input fields and a close button. It utilizes state management to control input values and updates.

## Important Note 16

The `ProfileHeaderSkeleton` component is used to display a loading skeleton for the profile header while the content is being loaded. Let's break down the code:

### Component Structure16

```jsx
const ProfileHeaderSkeleton = () => {
    return (
        <div className='flex flex-col gap-2 w-full my-2 p-4'>
            {/* Skeleton elements for profile header */}
            {/* Inside this div, various skeleton elements are rendered */}
        </div>
    );
};
```

- This functional component renders a container div with flexbox properties to arrange its children in a column layout with a gap between them.

### Skeleton Elements

```jsx
<div className='flex gap-2 items-center'>
    <div className='flex flex-1 gap-1'>
        <div className='flex flex-col gap-1 w-full'>
            {/* Various skeleton elements */}
        </div>
    </div>
</div>
```

- This structure sets up a flex container with items arranged in a row with a gap between them.
- Inside this container, there's another flex container with items arranged in a column layout.

### Skeletons

```jsx
<div className='skeleton h-4 w-12 rounded-full'></div>
<div className='skeleton h-4 w-16 rounded-full'></div>
<div className='skeleton h-40 w-full relative'>
    {/* Absolute positioned skeleton inside a relative container */}
    <div className='skeleton h-20 w-20 rounded-full border absolute -bottom-10 left-3'></div>
</div>
{/* More skeleton elements */}
```

- Skeleton elements are created using empty divs with a class `skeleton`.
- These divs have varying height (`h-4`, `h-6`, `h-40`, etc.) and width (`w-12`, `w-16`, `w-20`, etc.) classes to mimic the size of the actual content.
- The `rounded-full` class makes the divs appear as circles, while the `border` class adds a border around the circle.
- The `absolute` and `relative` classes are used for positioning the absolute skeleton inside a relative container.

### Conclusion

The `ProfileHeaderSkeleton` component provides a visual representation of a loading state for the profile header. It creates a structure with skeleton elements mimicking the layout of the actual content to give users an idea of where content will be displayed while the page is loading.

## Important Note 17

This code snippet is written in JavaScript, specifically using the React framework with the `useState`, `useMutation`, and `useQueryClient` hooks from the `react-query` library (now known as `tanstack/react-query`). Let's break down the code step by step.

### Breakdown of the Code

#### 1. State Initialization with `useState`

```javascript
const [formData, setFormData] = useState({
  email: "",
  username: "",
  fullName: "",
  password: "",
});
```

- `useState` is a React hook used to declare a state variable and a function to update it.
- `formData` is the state variable initialized with an object containing fields for `email`, `username`, `fullName`, and `password`, all set to empty strings.
- `setFormData` is the function used to update the `formData` state.

#### 2. Initializing the Query Client

```javascript
const queryClient = useQueryClient();
```

- `useQueryClient` is a hook from `react-query` that gives access to the query client instance, which manages the caching and synchronization of server state.

#### 3. Setting up the Mutation with `useMutation`

```javascript
const { mutate, isError, isPending, error } = useMutation({
  mutationFn: async ({ email, username, fullName, password }) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, fullName, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create account");
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  onSuccess: () => {
    toast.success("Account created successfully");

    queryClient.invalidateQueries({ queryKey: ["authUser"] });
  },
});
```

- `useMutation` is a hook from `react-query` used to perform mutations, i.e., create, update, or delete data on the server.
- The `useMutation` hook returns an object containing several properties, including `mutate`, `isError`, `isPending`, and `error`.
  - `mutate`: A function to trigger the mutation.
  - `isError`: A boolean indicating if there was an error during the mutation.
  - `isPending`: A boolean indicating if the mutation is in progress.
  - `error`: The error object if an error occurred.

#### 4. Defining the Mutation Function (`mutationFn`)

```javascript
mutationFn: async ({ email, username, fullName, password }) => {
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, fullName, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create account");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

- `mutationFn` is an asynchronous function that performs the signup process.
- It makes a POST request to `/api/auth/signup` with the provided user data.
- The request headers specify that the content type is `application/json`.
- The request body is a JSON stringified version of the `email`, `username`, `fullName`, and `password`.
- The response is parsed to JSON. If the response is not okay (`res.ok` is false), an error is thrown.
- The parsed data is logged to the console and returned.

#### 5. Handling the Mutation Success (`onSuccess`)

```javascript
onSuccess: () => {
  toast.success("Account created successfully");

  queryClient.invalidateQueries({ queryKey: ["authUser"] });
}
```

- `onSuccess` is a callback function that runs when the mutation is successful.
- It displays a success message using `toast.success`.
- It invalidates the query with the key `["authUser"]` to ensure that any cached data for this query is refetched and updated.

### Summary17

This code snippet initializes a state for form data, sets up a query client, and defines a mutation for signing up a user. It makes a POST request to the signup endpoint, handles success and error cases, and ensures the client cache is updated appropriately after a successful signup.

## Important Note 18

Let's break down the code for the `LoginPage` component, which is responsible for handling user login in a React application using React Query for mutation management.

1. **State Initialization**:

   ```javascript
   const [formData, setFormData] = useState({
     username: "",
     password: "",
   });
   ```

   This initializes a state variable `formData` using the `useState` hook. It holds an object with `username` and `password` properties, which will be used to store the user's login credentials. The `setFormData` function can be used to update this state.

2. **Query Client**:

   ```javascript
   const queryClient = useQueryClient();
   ```

   This initializes a query client instance using the `useQueryClient` hook from React Query. This is used for managing and manipulating cached data.

3. **Mutation Setup**:

   ```javascript
   const {
     mutate: loginMutation,
     isPending,
     isError,
     error,
   } = useMutation({
     mutationFn: async ({ username, password }) => {
       try {
         const res = await fetch("/api/auth/login", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ username, password }),
         });

         const data = await res.json();

         if (!res.ok) {
           throw new Error(data.error || "Something went wrong");
         }
       } catch (error) {
         throw new Error(error);
       }
     },
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["authUser"] });
     },
   });
   ```

   - **Destructuring `useMutation`**:

     ```javascript
     const { mutate: loginMutation, isPending, isError, error } = useMutation(...)
     ```

     This destructures the return value of `useMutation`, renaming `mutate` to `loginMutation` for clarity and also getting `isPending`, `isError`, and `error` for tracking the mutation state.

   - **Mutation Function**:

     ```javascript
     mutationFn: async ({ username, password }) => { ... }
     ```

     This is the function that performs the login request. It takes `username` and `password` as parameters and sends them in a POST request to `/api/auth/login`.

     - **Request Handling**:

       ```javascript
       const res = await fetch("/api/auth/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ username, password }),
       });

       const data = await res.json();

       if (!res.ok) {
         throw new Error(data.error || "Something went wrong");
       }
       ```

       This sends a POST request to the server with the login credentials. If the response is not OK, it throws an error with the error message from the server or a default message.

     - **Error Handling**:

       ```javascript
       catch (error) {
         throw new Error(error);
       }
       ```

       If any error occurs during the request, it is caught and rethrown.

   - **On Success**:

     ```javascript
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["authUser"] });
     },
     ```

     This function is called when the mutation is successful. It invalidates the `authUser` query, causing it to refetch the data, ensuring that the application state is updated with the latest authentication information.

4. **Form Submission Handler**:

   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     loginMutation(formData);
   };
   ```

   This function handles form submission. It prevents the default form submission behavior and calls `loginMutation` with the current `formData`, triggering the login mutation.

### Summary18

This `LoginPage` component handles user login by:

1. Storing login credentials in a state variable.
2. Using `useMutation` to define a login mutation that sends a POST request with the credentials.
3. Handling the success case by invalidating the `authUser` query to refresh the authentication state.
4. Submitting the form data using the `handleSubmit` function, which triggers the mutation.

## Important Note 19

This code snippet sets up a logout mutation and uses React Query to manage authentication state in a React application. Here's a detailed explanation:

1. **Query Client**:

   ```javascript
   const queryClient = useQueryClient();
   ```

   This initializes an instance of the query client using the `useQueryClient` hook from React Query. This client is used to interact with the query cache.

2. **Logout Mutation**:

   ```javascript
   const { mutate: logout } = useMutation({
     mutationFn: async () => {
       try {
         const res = await fetch("/api/auth/logout", {
           method: "POST",
         });
         const data = await res.json();

         if (!res.ok) {
           throw new Error(data.error || "Something went wrong");
         }
       } catch (error) {
         throw new Error(error);
       }
     },
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["authUser"] });
     },
     onError: () => {
       toast.error("Logout failed");
     },
   });
   ```

   - **Destructuring `useMutation`**:

     ```javascript
     const { mutate: logout } = useMutation({...})
     ```

     This destructures the `useMutation` return value, renaming `mutate` to `logout` for clarity.

   - **Mutation Function**:

     ```javascript
     mutationFn: async () => {...}
     ```

     This function performs the logout request. It sends a POST request to `/api/auth/logout` without any body content.

     - **Request Handling**:

       ```javascript
       const res = await fetch("/api/auth/logout", {
         method: "POST",
       });
       const data = await res.json();

       if (!res.ok) {
         throw new Error(data.error || "Something went wrong");
       }
       ```

       This sends a POST request to the server to log out the user. If the response is not OK, it throws an error with the error message from the server or a default message.

     - **Error Handling**:

       ```javascript
       catch (error) {
         throw new Error(error);
       }
       ```

       If any error occurs during the request, it is caught and rethrown.

   - **On Success**:

     ```javascript
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["authUser"] });
     },
     ```

     This function is called when the mutation is successful. It invalidates the `authUser` query, causing it to refetch the data, ensuring that the application state is updated and the user is logged out.

   - **On Error**:

     ```javascript
     onError: () => {
       toast.error("Logout failed");
     },
     ```

     This function is called when the mutation fails. It displays an error message using a toast notification.

3. **Auth User Query**:

   ```javascript
   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
   ```

   This sets up a query to fetch the current authenticated user data using the `useQuery` hook from React Query. The `queryKey` of `["authUser"]` is used to identify this query in the cache. The fetched data is stored in the `authUser` variable.

### Summary19

This code handles user logout by:

1. Initializing a query client to interact with the query cache.
2. Setting up a mutation for logging out the user via a POST request to `/api/auth/logout`.
3. Invalidating the `authUser` query upon successful logout to update the authentication state.
4. Displaying an error message if the logout request fails.
5. Fetching the current authenticated user data and storing it in the `authUser` variable.

## Important Note 20

This code snippet seems to be using React with the `useQuery` hook, likely from a library such as React Query or Apollo Client, to fetch user authentication data from a server. Let's break it down:

1. **Destructuring assignment**:

   ```javascript
   const { data: authUser, isLoading } = useQuery({...});
   ```

   - Here, `useQuery` is a custom hook, possibly from a library like React Query. It returns an object with properties `data` and `isLoading`. The `data` property likely contains the result of the query, while `isLoading` indicates whether the query is still in progress.

2. **Query Configuration**:
   - `queryKey: ["authUser"]`: This sets a unique name for the query, which can be useful for caching and debugging purposes.
   - `queryFn: async () => { ... }`: This defines the function that will be executed when the query is triggered. Inside this function, an asynchronous request to `"/api/auth/me"` is made to fetch user authentication data.

3. **Fetching Data**:
   - The `fetch` function is used to make an HTTP request to the server. It fetches the data from the `/api/auth/me` endpoint.
   - The response is converted to JSON format using `res.json()`.
   - Error handling is done within a `try...catch` block. If there's an error in the fetch operation or the response indicates an error, appropriate actions are taken.

4. **Return Data**:
   - If the fetch operation is successful and there are no errors, the fetched data is returned.
   - If there's an error, `null` is returned if it's a data error, otherwise, an `Error` object with a message indicating that something went wrong is thrown.

5. **Loading State Handling**:

   ```javascript
   if (isLoading) {
     return (
       <div className="h-screen flex justify-center items-center">
         <LoadingSpinner size="lg" />
       </div>
     );
   }
   ```

   - If `isLoading` is true, it means the query is still in progress. In this case, a loading spinner component (`<LoadingSpinner />`) is rendered to indicate to the user that data is being fetched.

Overall, this code sets up a query to fetch user authentication data from a server, handles loading states, and provides error handling. It likely integrates with a UI component to render the fetched data once it's available.

## Important Note 21

Sure, let's dive deeper into the code:

1. **`getPostEndpoint` Function**:
   - This function dynamically determines the API endpoint based on the `feedType`. The `feedType` is presumably a variable or state in the parent component that controls what type of posts to fetch.
   - Depending on the `feedType`, different endpoints are returned. For example, if `feedType` is "forYou", the function returns `"/api/posts/all"`, which might fetch posts tailored for the current user.

2. **`POST_ENDPOINT` Constant**:
   - This constant holds the determined endpoint fetched by the `getPostEndpoint` function. It's used later in the `fetch` call inside `useQuery`.

3. **`useQuery` Hook**:
   - The `useQuery` hook is part of a library like React Query or Apollo Client, used for data fetching in React applications.
   - It takes an object as its argument with configuration options.
   - `queryKey` is an array that uniquely identifies this query. In this case, it's set to `["posts"]`.
   - `queryFn` is an asynchronous function that performs the actual data fetching operation. It fetches data from the endpoint specified by `POST_ENDPOINT`.
   - If the fetch operation is successful, the data is returned. If not, an error is thrown.

4. **`useEffect` Hook**:
   - The `useEffect` hook is used to trigger a refetch of the data when certain dependencies change.
   - It depends on `feedType` and `username`, so whenever these values change, the `refetch` function from `useQuery` will be called to fetch new data.

5. **Rendering**:
   - If `isLoading` or `isRefetching` is true, indicating that data is being fetched or refetched, a loading state is shown. This is typically represented by skeleton components (`PostSkeleton`) to give users a visual indication that content is loading.
   - If neither `isLoading` nor `isRefetching`, and `posts` is an empty array, it displays a message indicating that there are no posts in the current tab.
   - If `posts` is not empty, it maps through the `posts` array and renders individual `Post` components. Each `Post` component receives a unique key (likely `post._id`) and the post data as props.

6. **Return Statement**:
   - The return statement contains conditional rendering based on the loading state, empty state, or the presence of posts.

This component efficiently manages the fetching of posts based on different criteria and provides a good user experience by displaying loading indicators and appropriate messages while data is being fetched.

## Important Note 22

Let's break down the provided code step by step. This code is part of a React component that handles interactions with a post, including deleting the post, liking it, and commenting on it. It uses React Query for managing server state and React hooks for managing local state.

### 1. State Initialization

```javascript
const [comment, setComment] = useState("");
```

This initializes a state variable `comment` to an empty string. `setComment` is the function used to update this state.

### 2. Fetching the Authenticated User

```javascript
const { data: authUser } = useQuery({ queryKey: ["authUser"] });
```

This query fetches data about the authenticated user and stores it in the `authUser` variable.

### 3. Query Client Initialization

```javascript
const queryClient = useQueryClient();
```

This initializes a query client instance using the `useQueryClient` hook from React Query, which is used to interact with the query cache.

### 4. Post Data

```javascript
const postOwner = post.user;
const isLiked = post.likes.includes(authUser._id);
const isMyPost = authUser._id === post.user._id;
const formattedDate = formatPostDate(post.createdAt);
```

These lines extract information about the post and the authenticated user:

- `postOwner` holds the user who created the post.
- `isLiked` is a boolean indicating whether the authenticated user has liked the post.
- `isMyPost` is a boolean indicating whether the authenticated user is the owner of the post.
- `formattedDate` is a formatted string of the post creation date.

### 5. Delete Post Mutation

```javascript
const { mutate: deletePost, isPending: isDeleting } = useMutation({
  mutationFn: async () => {
    try {
      const res = await fetch(`/api/posts/${post._id}`, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
  onSuccess: () => {
    toast.success("Post deleted successfully");
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  },
});
```

This mutation handles deleting a post:

- **mutationFn**: Sends a DELETE request to delete the post. Throws an error if the response is not OK.
- **onSuccess**: Displays a success message and invalidates the `posts` query to refresh the list of posts.

### 6. Like Post Mutation

```javascript
const { mutate: likePost, isPending: isLiking } = useMutation({
  mutationFn: async () => {
    try {
      const res = await fetch(`/api/posts/like/${post._id}`, { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
  onSuccess: (updatedLikes) => {
    queryClient.setQueryData(["posts"], (oldData) => {
      return oldData.map((p) => (p._id === post._id ? { ...p, likes: updatedLikes } : p));
    });
  },
  onError: (error) => {
    toast.error(error.message);
  },
});
```

This mutation handles liking a post:

- **mutationFn**: Sends a POST request to like the post. Throws an error if the response is not OK.
- **onSuccess**: Updates the cache directly with the new likes data to improve UX, avoiding a full refetch.
- **onError**: Displays an error message if the mutation fails.

### 7. Comment Post Mutation

```javascript
const { mutate: commentPost, isPending: isCommenting } = useMutation({
  mutationFn: async () => {
    try {
      const res = await fetch(`/api/posts/comment/${post._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
  onSuccess: () => {
    toast.success("Comment posted successfully");
    setComment("");
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  },
  onError: (error) => {
    toast.error(error.message);
  },
});
```

This mutation handles commenting on a post:

- **mutationFn**: Sends a POST request with the comment text to the server. Throws an error if the response is not OK.
- **onSuccess**: Displays a success message, clears the comment input, and invalidates the `posts` query to refresh the list of posts.
- **onError**: Displays an error message if the mutation fails.

### 8. Handlers

```javascript
const handleDeletePost = () => {
  deletePost();
};

const handlePostComment = (e) => {
  e.preventDefault();
  if (isCommenting) return;
  commentPost();
};

const handleLikePost = () => {
  if (isLiking) return;
  likePost();
};
```

These functions handle user actions:

- **handleDeletePost**: Triggers the delete post mutation.
- **handlePostComment**: Prevents the default form submission, checks if a comment is being posted, and triggers the comment post mutation.
- **handleLikePost**: Checks if a like is being processed and triggers the like post mutation.

### Summary22

This component manages user interactions with a post, including deleting, liking, and commenting on it. It uses React Query to handle these actions with appropriate state updates and error handling, providing a responsive user experience.
