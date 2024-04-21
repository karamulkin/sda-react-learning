import React from "react";

import { useTheme } from "../hooks/useTheme";

export const Button ({children, onClick, ...rest }) => {
    const theme = useTheme();

    return (
        <button 
        style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: theme.values.borders.radius,
            background: theme.values.colors.accent,
            color: theme.values.colors.text,
        }}
        onClick={onClick}
        {...rest}
        >
            {children}
        </button>
    );
};