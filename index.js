/* React Css Module ClassNames
 */
export default function classNames(name = "", styles = {}) {
  const globalName = name;
  const moduleName = styles[name];

  const className = [globalName, moduleName]
    .filter(name => typeof name === "string")
    .join(" ");

  return {
    className
  };
}
