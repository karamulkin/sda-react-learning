import React from "react";

import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { Nav } from "./Nav";

export const Header () => {
    const theme = useTheme();

    return (
        <header
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
            borderBottom: "1px solid",
            borderColor: theme.values.colors.accent,
        }}
        >
        <Nav />
        <div>
        <ThemeToggle />
        </div>
        </header>
    );
};