import React from "react";
// import clsx from "clsx";
// import useThemeContext from "@theme/hooks/useThemeContext";

interface Props {
  id;
}

export const CodePen = ({ id }: Props): JSX.Element => {
  // const { isDarkTheme } = useThemeContext();

  // const clientTheme = isDarkTheme ? ["dark"] : ["light"];

  return (
    <iframe
      width="100%"
      height="480px"
      scrolling="no"
      title="Samelogic SDK Advanced Demo"
      src={`https://codepen.io/shawnmclean/embed/${id}?default-tab=html%2Cresult&editable=true&theme-id=dark`}
      frameBorder="0"
      loading="lazy"
      allowTransparency={true}
      allowFullScreen={true}
    >
      See the Pen{" "}
      <a href={`https://codepen.io/shawnmclean/pen/${id}`}>
        Samelogic SDK Advanced Demo
      </a>{" "}
      by Shawn Mclean (<a href="https://codepen.io/shawnmclean">@shawnmclean</a>
      ) on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  );
};
