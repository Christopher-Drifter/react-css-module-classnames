/* React Css Module ClassNames
 */
class ClassNameObject {
  /**
   * Constructor
   */
  constructor(...args) {
    // handle: constructor(name, styles)
    // styles is a css module object, so styles[name] will hold the actual class name
    if (typeof args[0] === "string" && typeof args[1] === "object") {
      const [name, styles] = args;
      args[1] = styles[name];
    }

    this.className = concat(...args);
  }

  /**
   * Plus
   */
  plus(...args) {
    let { className } = new ClassNameObject(...args);

    this.className += " " + className;

    return this;
  }
}

/**
 * concat
 */
function concat(...names) {
  return (
    names
      // convert ClassNameObjects to string
      .map(name => (name instanceof ClassNameObject ? name.className : name))
      // ignore non-string values
      .filter(name => typeof name === "string")
      // concat with spaces
      .join(" ")
  );
}

/**
 * classNames
 */
export default function classNames(...args) {
  return new ClassNameObject(...args);
}
