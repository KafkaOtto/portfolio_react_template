import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button } from "@chakra-ui/react";

import { Content, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { WorkPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";
import {useTranslation} from "react-i18next";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);
    const {t} = useTranslation(['landing']);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(WorkPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb={{ base: 16, md: 32 }}>
                <HStack spacing="16" justifyContent="space-between" alignItems="flex-start">
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading
                                fontSize={{ base: "5xl", md: "7xl" }}
                                lineHeight="1"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                {t('headline')}
                            </Heading>
                            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                                {content.landing}
                            </Content>
                        </Stack>

                        <Socials delay={1000} />
                    </Stack>
                    <Container
                        alignItems="center"
                        flex="0.4"
                        display={{ base: "none", lg: "block" }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <picture>
                            <source type="image/webp" src={t('picture')}></source>
                            <source type="image/jpeg" src={t('jpg')}></source>
                            <Image borderRadius="xl" src={t('jpg')} alt={`face-cover-image`} />
                        </picture>
                    </Container>
                </HStack>
            </Center>
            <Flex justifyContent="center" data-aos="fade" data-aos-delay="1400">
                <Button
                    as={IconButton}
                    fontSize="3xl"
                    variant="icon"
                    aria-label="down arrow button"
                    icon={<ChevronDownIcon />}
                    onClick={scrollIntoView}
                ></Button>
            </Flex>
        </Box>
    );
};
