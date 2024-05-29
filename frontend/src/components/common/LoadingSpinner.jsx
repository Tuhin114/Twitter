const LoadingSpinner = ({ size = "md" }) => {
  // Generate the class name based on the provided size prop
  const sizeClass = `loading-${size}`;

  // Return a span element with the combined class names for styling the spinner
  return <span className={`loading loading-spinner ${sizeClass}`} />;
};

// Export the component for use in other parts of the application
export default LoadingSpinner;
