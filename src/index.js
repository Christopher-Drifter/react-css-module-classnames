/* React Css Module ClassNames
 */
class ClassNameObject {
  /**
   * Constructor
   */
  constructor(...args) {
    // constructor(name, styles)
    if (typeof args[0] === "string" && typeof args[1] === "object") {
      const [name, styles] = args;
      this.className = concat(name, styles[name]);
    }

    // constructor(ClassNameObject)
    else if (args[0] instanceof ClassNameObject) {
      const [classNameObject] = args;

      this.className = classNameObject.className;
    }

    // constructor(string1, string2, string3, ...)
    else {
      this.className = concat(...args);
    }
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
  return names.filter(name => typeof name === "string").join(" ");
}

/**
 * classNames
 */
export default function classNames(...args) {
  return new ClassNameObject(...args);
}
