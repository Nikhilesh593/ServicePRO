import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Button,
    Badge,
    Flex,
    Icon,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    HStack,
    Image,
    VStack
} from '@chakra-ui/react';
import { FaUserTie, FaBuilding, FaStar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ProviderList = () => {
    // 1. Mock Data containing both Types
    const allProviders = [
        {
            id: 1,
            type: 'INDIVIDUAL',
            name: "Michael Chen",
            role: "Master Electrician",
            rating: 4.9,
            reviews: 234,
            location: "Downtown",
            price: "$45/hr",
            image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop",
            verified: true,
            experience: "8 years"
        },
        {
            id: 2,
            type: 'ORGANIZATION',
            name: "Spark & Wire Solutions Ltd.",
            role: "Electrical Services Company",
            rating: 4.7,
            reviews: 1205,
            location: "Business District",
            price: "$60/hr",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            verified: true,
            teamSize: "45 Technicians"
        },
        {
            id: 3,
            type: 'INDIVIDUAL',
            name: "Sarah Williams",
            role: "Professional Cleaner",
            rating: 4.8,
            reviews: 189,
            location: "Midtown",
            price: "$35/hr",
            image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop",
            verified: true,
            experience: "5 years"
        },
        {
            id: 4,
            type: 'ORGANIZATION',
            name: "Pristine Cleaning Corp",
            role: "Corporate & Home Cleaning",
            rating: 4.6,
            reviews: 850,
            location: "Metro Area",
            price: "$55/hr",
            image: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop",
            verified: true,
            teamSize: "120+ Staff"
        }
    ];

    const ProviderCard = ({ provider }) => (
        <Box
            bg="white"
            p={6}
            borderRadius="xl"
            shadow="md"
            borderWidth="1px"
            borderColor="gray.100"
            transition="all 0.2s"
            _hover={{ shadow: 'lg', transform: 'translateY(-4px)' }}
        >
            <Flex justify="space-between" align="start" mb={4}>
                <HStack align="start" spacing={4}>
                    <Box position="relative">
                        <Image
                            src={provider.image}
                            alt={provider.name}
                            w="60px"
                            h="60px"
                            borderRadius={provider.type === 'ORGANIZATION' ? 'lg' : 'full'}
                            objectFit="cover"
                        />
                        {provider.verified && (
                            <Icon
                                as={FaCheckCircle}
                                color="teal.500"
                                position="absolute"
                                bottom="-5px"
                                right="-5px"
                                bg="white"
                                borderRadius="full"
                            />
                        )}
                    </Box>
                    <VStack align="start" spacing={0}>
                        <Heading size="md" color="brand.900">{provider.name}</Heading>
                        <Text fontSize="sm" color="gray.500" fontWeight="medium">{provider.role}</Text>
                        <Badge
                            colorScheme={provider.type === 'ORGANIZATION' ? 'purple' : 'teal'}
                            variant="subtle"
                            fontSize="xs"
                            mt={1}
                        >
                            {provider.type === 'ORGANIZATION' ? 'Organization' : 'Individual'}
                        </Badge>
                    </VStack>
                </HStack>
                <HStack spacing={1} bg="orange.50" px={2} py={1} borderRadius="lg">
                    <Icon as={FaStar} color="orange.400" />
                    <Text fontWeight="bold" fontSize="sm">{provider.rating}</Text>
                </HStack>
            </Flex>

            <Flex justify="space-between" align="center" mt={4} pt={4} borderTopWidth="1px">
                <HStack color="gray.500" fontSize="sm">
                    <Icon as={FaMapMarkerAlt} />
                    <Text>{provider.location}</Text>
                </HStack>
                <VStack align="end" spacing={0}>
                    <Text fontWeight="bold" fontSize="lg" color="brand.600">{provider.price}</Text>
                    <Text fontSize="xs" color="gray.400">
                        {provider.type === 'ORGANIZATION' ? `Team: ${provider.teamSize}` : `Exp: ${provider.experience}`}
                    </Text>
                </VStack>
            </Flex>

            <Button w="full" mt={4} colorScheme="brand" variant="outline">
                View Profile
            </Button>
        </Box>
    );

    return (
        <Box minH="100vh" bg="gray.50" py={12}>
            <Container maxW="container.xl">
                <Box textAlign="center" mb={10}>
                    <Heading size="2xl" mb={4} color="brand.900">Find Service Providers</Heading>
                    <Text fontSize="lg" color="gray.600">
                        Choose between expert individual technicians or established service companies.
                    </Text>
                </Box>

                <Tabs colorScheme="brand" align="center" variant="soft-rounded" isLazy>
                    <TabList mb={8} bg="white" p={2} borderRadius="full" shadow="sm" display="inline-flex">
                        <Tab px={8} py={3} _selected={{ bg: 'brand.500', color: 'white' }}>
                            <HStack>
                                <Icon as={FaUserTie} />
                                <Text>All Providers</Text>
                            </HStack>
                        </Tab>
                        <Tab px={8} py={3} _selected={{ bg: 'teal.500', color: 'white' }}>
                            <HStack>
                                <Icon as={FaUserTie} />
                                <Text>Individuals</Text>
                            </HStack>
                        </Tab>
                        <Tab px={8} py={3} _selected={{ bg: 'purple.500', color: 'white' }}>
                            <HStack>
                                <Icon as={FaBuilding} />
                                <Text>Organizations</Text>
                            </HStack>
                        </Tab>
                    </TabList>

                    <TabPanels>
                        {/* All Providers */}
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                                {allProviders.map(provider => (
                                    <ProviderCard key={provider.id} provider={provider} />
                                ))}
                            </SimpleGrid>
                        </TabPanel>

                        {/* Individuals Only */}
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                                {allProviders.filter(p => p.type === 'INDIVIDUAL').map(provider => (
                                    <ProviderCard key={provider.id} provider={provider} />
                                ))}
                            </SimpleGrid>
                        </TabPanel>

                        {/* Organizations Only */}
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                                {allProviders.filter(p => p.type === 'ORGANIZATION').map(provider => (
                                    <ProviderCard key={provider.id} provider={provider} />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Box>
    );
};

export default ProviderList;
