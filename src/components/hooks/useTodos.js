import React from "react";
import { useTheme } from "../hooks/useTheme";
export const Card = ({ title }) => {
  const theme = useTheme();
  const divStyles = {
    padding: 12,
    ...(theme.values.borders.isEnabled && {
      border: "1px solid",
      borderColor: theme.values.colors.accent,
      borderRadius: 6,
    }),
  };
  return (
    <section
      style={{
        padding: 12,
      }}
    >
      <div style={divStyles}>
        <h2 style={{ margin: 0, marginBottom: 12 }}>{title}</h2>
      </div>
    </section>
  );
};