# react-css-module-classnames

Commonly, I want to define two classes on my react components: one scoped css module, and another global class for easy reference outside the css module stylesheet.

This results in a lot of ugly code:

    import styles from "paragraph.module.scss"
    <p classNames={`paragraph ` + styles.paragraph} />

Instead, with this module, you type:

    import classNames from "react-css-module-classnames";
    import styles from "paragraph.module.scss"
    <p {...classNames("paragraph", styles)} />

If you need to use more than one class name, you can use the `plus()` method

    <p {...classNames("paragraph", styles).plus(props.className)} />

Both `classNames()` and `classNames().plus()` take arguments in the following formats:

    // two args, where name is a string, and styles is a css module object
    classNames("paragraph", styles)

    // any mix of strings and className objects
    classNames("paragraph", "2nd-class", classNames("3rd-class"), ...)

For brevity, you can combine both argument formats:

    classNames("paragraph", styles, "2nd-class", classNames("3rd-class"), ...)

Although it's probably better and more readable to use the `plus()` method when switching formats.

    classNames("paragraph", styles).plus("2nd-class", "3rd-class", ...)

# Install

    npm install react-css-module-classnames --save
