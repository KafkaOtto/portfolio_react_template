import { FC } from "react";

import {HStack, Select, StyleProps, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";

import {useTranslation} from "react-i18next";


export const LanguageSelect: FC<StyleProps> = (props) => {
    const color = useColorModeValue("gray.800", "white");
    // const { colorMode, toggleColorMode } = useColorMode();
    const {t, i18n} = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;
        i18n.changeLanguage(language);
    };

    return (
        <HStack {...props}>
            <Select
                aria-label="appearance"
                bg="transparent"
                color={color}
                fontSize="lg"
                _hover={{ color: "primary.500" }}
                _active={{ bg: "transparent" }}
                variant="unstyled"
                size="xs"
                iconSize="xs"
                onChange={handleLanguageChange}
            >
                <option value='en'>EN</option>
                <option value='cn'>CN</option>
            </Select>
        </HStack>
    );
};
