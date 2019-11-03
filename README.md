# react-css-module-classnames

Commonly, I want to define two classes on my react components: one scoped css module, and another global class for easy reference outside the css module stylesheet.

This results in a lot of ugly code:

    import styles from "paragraph.module.scss"
    <p classNames={`paragraph ` + styles.paragraph} />

Instead, with this module, you type:

    import classNames from "react-css-module-classnames";
    import styles from "paragraph.module.scss"
    <p {...classNames("paragraph", styles)} />

# Install

    npm install react-css-module-classnames --save
