/**
 * XSvg component that renders an SVG element with a specific viewBox and path.
 * The component accepts props and passes them down to the SVG element.
 */
const XSvg = (props) => (
  /**
   * SVG element with aria-hidden set to true and a viewBox of 0 0 24 24.
   * The {...props} syntax spreads the props object onto the SVG element.
   */
  <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
    {/**
     * Path element with a complex d attribute that defines the shape of the SVG.
     * The d attribute is a string that specifies the path commands and coordinates.
     */}
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/**
 * Export the XSvg component as the default export.
 */
export default XSvg;
