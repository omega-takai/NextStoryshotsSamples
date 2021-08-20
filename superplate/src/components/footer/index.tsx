import React from "react";

import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";
import { Container, LogoButton, List, ListItem } from "./styled";

export const Footer: React.FC = () => {
    return (
        <Container>
            <LogoButton
                href="https://github.com/pankod"
                target="_blank"
                data-testid="pankod-logo"
            >
                <PankodIcon color="white" width="140" height="28" />
            </LogoButton>
            <List data-testid="icons-container">
                <ListItem>
                    <GithubIcon color="white" width="28" height="29" />
                </ListItem>
                <ListItem>
                    <TwitterIcon color="white" width="28" height="28" />
                </ListItem>
                <ListItem>
                    <YoutubeIcon color="white" width="28" height="29" />
                </ListItem>
                <ListItem>
                    <LinkedinIcon color="white" width="28" height="32" />
                </ListItem>
            </List>
        </Container>
    );
};
