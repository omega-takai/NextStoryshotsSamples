import React from "react";

import { SunIcon, MoonIcon } from "@components/icons";

import { useTheme } from "@definitions/styled-components";
import { ToggleContainer } from "./styled";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Toggle: React.FC<IButton> = () => {
    const { toggle, themeName } = useTheme();

    return (
        <ToggleContainer
            themeName={themeName}
            onClick={toggle}
            data-testid="toggle"
        >
            <SunIcon width="32" height="32" />
            <MoonIcon width="32" height="32" />
        </ToggleContainer>
    );
};
