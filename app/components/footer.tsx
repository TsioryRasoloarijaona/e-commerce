import * as React from 'react';
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react';
import { siteConfig } from './subComponents/site-config'
import { ExternalFooterLink, InternalFooterLink, ExternalSocialLink } from './subComponents/links';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
        <Box bg="#050512" w="100%">
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Stack mb={['10px', '10px', 0, 0]}>
              <Text as="span">
                <ExternalFooterLink href="#" text="Contact us" />
              </Text>
              <Text as="span">
                <ExternalFooterLink href="#" text="Contribute" />
              </Text>
              <Text as="span">
                <InternalFooterLink href="#" text="Open source projects" />
              </Text>
            </Stack>
            <Stack>
              <Text as="span">
                <Popover placement="top">
                  <PopoverTrigger>
                    <Text
                      as="span"
                      _focus={{ outline: 'none', boxShadow: 'none' }}
                      fontWeight={500}
                      color="gray.500"
                      cursor="pointer"
                      _hover={{ color: 'gray.700', textDecoration: 'none' }}
                    >
                      Social Accounts
                    </Text>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Stack
                          as="footer"
                          direction="row"
                          spacing={[1, 2]}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ExternalSocialLink
                            href={siteConfig.author.github}
                            icon={<FaGithub />}
                            type="gray"
                            label="Github Account"
                          />
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Text>

              <Text as="span">
                <ExternalFooterLink href="#" text="Sponsor" />
              </Text>
              <Text as="span">
                <ExternalFooterLink href="#" isExternal={false} text="FAQs" />
              </Text>
            </Stack>
          </SimpleGrid>
        </Box>
  );
};

export default Footer;
