/* React Css Module ClassNames
 */
class classNameObject {
  /**
   * Constructor
   */
  constructor(...args) {
    // constructor(name, styles)
    if (typeof args[0] === "string" && typeof args[1] === "object") {
      this.className = getNames(...args);
    }

    // constructor(classNameObject)
    else if (args[0] instanceof classNameObject) {
      this.className = args[0].className;
    }

    // constructor(string1, string2, string3, ...)
    else {
      this.className = concatAsString(...args);
    }
  }

  /**
   * Plus
   */
  plus(...args) {
    let { className } = new classNameObject(...args);

    this.className += " " + className;

    return this;
  }
}

/**
 * getNames
 */
function getNames(name = "", styles = {}) {
  const globalName = name;
  const moduleName = styles[name];

  return concatAsString(globalName, moduleName);
}

/**
 * concatAsString
 */
function concatAsString(...names) {
  return names.filter(name => typeof name === "string").join(" ");
}

/**
 * classNames
 */
export default function classNames(...args) {
  return new classNameObject(...args);
}
