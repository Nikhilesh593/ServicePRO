import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    Text,
    Select,
    useToast,
    InputGroup,
    InputRightElement,
    HStack,
    SimpleGrid,
    Icon,
    Badge,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProviderSignup = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type') || 'individual'; // individual | organization
    const isOrg = type === 'organization';

    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        serviceCategory: '',
        experience: '',
        address: '',
        city: '',
        type: type,
    });

    // Update type in form data if URL param changes
    useEffect(() => {
        setFormData(prev => ({ ...prev, type }));
    }, [type]);

    const [documents, setDocuments] = useState({
        idProof: null,
        tradeLicense: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setDocuments((prev) => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Provider Signup Data:', { ...formData, ...documents });
        toast({
            title: "Account created.",
            description: `Your ${isOrg ? 'organization' : 'individual'} application has been submitted for verification.`,
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box bg="gray.50" minH="100vh" py={10}>
            <Container maxW="container.md" bg="white" p={8} borderRadius="xl" shadow="lg">
                <VStack spacing={6} align="stretch">
                    <Box textAlign="center">
                        <Badge colorScheme={isOrg ? "blue" : "teal"} mb={2} borderRadius="full" px={3} py={1}>
                            {isOrg ? "Organization Registration" : "Individual Registration"}
                        </Badge>
                        <Heading size="xl" color="brand.900">Become a Partner</Heading>
                        <Text mt={2} color="gray.600">
                            {isOrg
                                ? "Register your company to offer services"
                                : "Join our network of expert independent professionals"
                            }
                        </Text>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4}>
                            {/* Personal/Company Information */}
                            <Heading size="md" w="full" pt={4}>{isOrg ? "Company Details" : "Personal Details"}</Heading>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                                <FormControl isRequired>
                                    <FormLabel>{isOrg ? "Company Name" : "Full Name"}</FormLabel>
                                    <Input
                                        name="fullName"
                                        placeholder={isOrg ? "Acme Services Pvt Ltd" : "John Doe"}
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>{isOrg ? "Business Phone Number" : "Phone Number"}</FormLabel>
                                    <Input
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>
                            </SimpleGrid>

                            <FormControl isRequired>
                                <FormLabel>{isOrg ? "Business Email Address" : "Email Address"}</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder={isOrg ? "contact@acme.com" : "john@example.com"}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                                <FormControl isRequired>
                                    <FormLabel>{isOrg ? "Headquarters Address" : "Address"}</FormLabel>
                                    <Input
                                        name="address"
                                        placeholder="Street Address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>City</FormLabel>
                                    <Input
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>
                            </SimpleGrid>

                            {/* Professional Information */}
                            <Heading size="md" w="full" pt={6}>Professional Details</Heading>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                                <FormControl isRequired>
                                    <FormLabel>Service Category</FormLabel>
                                    <Select name="serviceCategory" placeholder="Select service" onChange={handleInputChange} value={formData.serviceCategory}>
                                        <option value="plumber">Plumber</option>
                                        <option value="electrician">Electrician</option>
                                        <option value="carpenter">Carpenter</option>
                                        <option value="cleaning">Cleaning</option>
                                        <option value="painter">Painter</option>
                                        <option value="appliance_repair">Appliance Repair</option>
                                        <option value="beauty">Beauty / Salon</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>{isOrg ? "Years in Business" : "Experience (Years)"}</FormLabel>
                                    <Input
                                        name="experience"
                                        type="number"
                                        placeholder="e.g. 5"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>
                            </SimpleGrid>

                            {/* Document Upload */}
                            <Heading size="md" w="full" pt={6}>Documents</Heading>

                            <FormControl isRequired>
                                <FormLabel>{isOrg ? "Company Registration / GST" : "ID Proof (Aadhar/PAN)"}</FormLabel>
                                <Input
                                    name="idProof"
                                    type="file"
                                    p={1}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={handleFileChange}
                                />
                                <Text fontSize="xs" color="gray.500">Upload PDF or Image</Text>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Trade License / Certification (Optional)</FormLabel>
                                <Input
                                    name="tradeLicense"
                                    type="file"
                                    p={1}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={handleFileChange}
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                colorScheme="brand"
                                size="lg"
                                w="full"
                                mt={8}
                                bg="brand.500"
                                _hover={{ bg: 'brand.600' }}
                                color="white"
                            >
                                Register as Partner
                            </Button>
                        </VStack>
                    </form>
                </VStack>
            </Container>
        </Box>
    );
};

export default ProviderSignup;
