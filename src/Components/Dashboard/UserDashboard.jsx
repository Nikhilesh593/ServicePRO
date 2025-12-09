import React, { useState } from 'react';
import {
    Box,
    Container,
    Flex,
    VStack,
    Heading,
    Text,
    Button,
    Icon,
    Divider,
    Avatar,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Badge,
    SimpleGrid,
    Input,
    FormControl,
    FormLabel,
    useToast,
    IconButton,
    HStack,
} from '@chakra-ui/react';
import {
    FaUser,
    FaCalendarCheck,
    FaMapMarkerAlt,
    FaSignOutAlt,
    FaHistory,
    FaEdit,
    FaCheck,
} from 'react-icons/fa';

const UserDashboard = () => {
    const [activeSection, setActiveSection] = useState('bookings');
    const toast = useToast();

    // Mock User Data
    const [user, setUser] = useState({
        name: 'Nikhil Gupta',
        email: 'nikhil@example.com',
        phone: '+91 98765 43210',
        location: 'Bangalore, Karnataka'
    });

    // Mock Bookings Data
    const bookings = [
        {
            id: 'BK-2024-001',
            service: 'AC Service & Repair',
            provider: 'Urban Company',
            date: '2025-12-10',
            time: '10:00 AM',
            status: 'upcoming',
            price: '₹599'
        },
        {
            id: 'BK-2024-002',
            service: 'Bathroom Cleaning',
            provider: 'Sarah Williams',
            date: '2025-12-05',
            time: '02:00 PM',
            status: 'completed',
            price: '₹399'
        },
        {
            id: 'BK-2024-003',
            service: 'Haircut for Men',
            provider: 'David Kumar',
            date: '2025-11-20',
            time: '05:30 PM',
            status: 'cancelled',
            price: '₹249'
        }
    ];

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        toast({
            title: "Profile Updated",
            description: "Your details have been saved successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const SidebarItem = ({ icon, label, section }) => (
        <Button
            w="full"
            variant="ghost"
            justifyContent="flex-start"
            leftIcon={<Icon as={icon} />}
            isActive={activeSection === section}
            onClick={() => setActiveSection(section)}
            _active={{ bg: 'brand.50', color: 'brand.600' }}
            _hover={{ bg: 'gray.50' }}
        >
            {label}
        </Button>
    );

    const BookingCard = ({ booking }) => {
        const statusColors = {
            upcoming: 'blue',
            completed: 'green',
            cancelled: 'red'
        };

        return (
            <Box p={5} shadow="sm" borderWidth="1px" borderRadius="lg" bg="white" mb={4}>
                <Flex justify="space-between" align="center" mb={2}>
                    <Heading size="sm" color="brand.900">{booking.service}</Heading>
                    <Badge colorScheme={statusColors[booking.status]}>{booking.status}</Badge>
                </Flex>
                <Text fontSize="sm" color="gray.600">Provider: {booking.provider}</Text>
                <Divider my={3} />
                <Flex justify="space-between" align="center">
                    <HStack fontSize="sm" color="gray.500">
                        <Icon as={FaCalendarCheck} />
                        <Text>{booking.date} at {booking.time}</Text>
                    </HStack>
                    <Text fontWeight="bold" color="brand.600">{booking.price}</Text>
                </Flex>
                {booking.status === 'upcoming' && (
                    <Button size="sm" mt={3} colorScheme="red" variant="outline" w="full">
                        Cancel Booking
                    </Button>
                )}
            </Box>
        );
    };

    return (
        <Box bg="gray.50" minH="calc(100vh - 80px)" py={8}>
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
                    {/* Sidebar */}
                    <Box w={{ base: 'full', md: '250px' }} bg="white" p={6} borderRadius="xl" shadow="sm" h="fit-content">
                        <VStack spacing={6} align="stretch">
                            <Box textAlign="center" mb={2}>
                                <Avatar size="xl" name={user.name} src="https://bit.ly/broken-link" mb={3} />
                                <Heading size="md">{user.name}</Heading>
                                <Text fontSize="sm" color="gray.500">{user.email}</Text>
                            </Box>
                            <Divider />
                            <VStack spacing={1} align="stretch">
                                <SidebarItem icon={FaCalendarCheck} label="My Bookings" section="bookings" />
                                <SidebarItem icon={FaUser} label="Profile Details" section="profile" />
                                <SidebarItem icon={FaMapMarkerAlt} label="Manage Addresses" section="addresses" />
                            </VStack>
                            <Divider />
                            <Button variant="ghost" colorScheme="red" leftIcon={<FaSignOutAlt />} justifyContent="flex-start">
                                Logout
                            </Button>
                        </VStack>
                    </Box>

                    {/* Main Content */}
                    <Box flex={1} bg="white" p={8} borderRadius="xl" shadow="sm">
                        {activeSection === 'bookings' && (
                            <VStack align="stretch" spacing={6}>
                                <Heading size="lg">My Bookings</Heading>
                                <Tabs colorScheme="brand" isFitted>
                                    <TabList mb={4}>
                                        <Tab>Upcoming</Tab>
                                        <Tab>History</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel px={0}>
                                            {bookings.filter(b => b.status === 'upcoming').length > 0 ? (
                                                bookings.filter(b => b.status === 'upcoming').map(booking => (
                                                    <BookingCard key={booking.id} booking={booking} />
                                                ))
                                            ) : (
                                                <Box textAlign="center" py={10}>
                                                    <Text color="gray.500">No upcoming bookings.</Text>
                                                    <Button mt={4} colorScheme="brand" size="sm">Book a Service</Button>
                                                </Box>
                                            )}
                                        </TabPanel>
                                        <TabPanel px={0}>
                                            {bookings.filter(b => b.status !== 'upcoming').map(booking => (
                                                <BookingCard key={booking.id} booking={booking} />
                                            ))}
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </VStack>
                        )}

                        {activeSection === 'profile' && (
                            <VStack align="stretch" spacing={6}>
                                <Flex justify="space-between" align="center">
                                    <Heading size="lg">Profile Details</Heading>
                                    <Button leftIcon={<FaCheck />} colorScheme="brand" onClick={handleUpdateProfile}>
                                        Save Changes
                                    </Button>
                                </Flex>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    <FormControl>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Phone Number</FormLabel>
                                        <Input value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Email Address</FormLabel>
                                        <Input value={user.email} isReadOnly bg="gray.50" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>City</FormLabel>
                                        <Input value={user.location} onChange={(e) => setUser({ ...user, location: e.target.value })} />
                                    </FormControl>
                                </SimpleGrid>
                            </VStack>
                        )}

                        {activeSection === 'addresses' && (
                            <VStack align="stretch" spacing={6}>
                                <Flex justify="space-between" align="center">
                                    <Heading size="lg">Saved Addresses</Heading>
                                    <Button size="sm" colorScheme="brand" variant="outline" leftIcon={<FaMapMarkerAlt />}>
                                        Add New
                                    </Button>
                                </Flex>
                                <Box p={5} borderWidth="1px" borderRadius="lg" bg="gray.50">
                                    <HStack justify="space-between">
                                        <Box>
                                            <Badge colorScheme="green" mb={2}>Home</Badge>
                                            <Text fontWeight="bold">{user.name}</Text>
                                            <Text fontSize="sm" color="gray.600">123, Green Street, Koramangala 4th Block</Text>
                                            <Text fontSize="sm" color="gray.600">Bangalore, Karnataka - 560034</Text>
                                            <Text fontSize="sm" mt={1}>Phone: {user.phone}</Text>
                                        </Box>
                                        <HStack>
                                            <IconButton icon={<FaEdit />} size="sm" aria-label="Edit address" />
                                        </HStack>
                                    </HStack>
                                </Box>
                            </VStack>
                        )}
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default UserDashboard;
