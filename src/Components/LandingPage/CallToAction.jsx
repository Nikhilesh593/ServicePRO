import React, { useState } from 'react';
import { FaUserPlus, FaBriefcase, FaArrowRight, FaUser, FaBuilding } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack,
    Button,
    Text,
    HStack,
    Box
} from '@chakra-ui/react';

const CallToAction = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const handleSelection = (type) => {
        navigate(`/provider/signup?type=${type}`);
        onClose();
    };

    return (
        <div className="w-full px-6 lg:px-16 pb-24 bg-[#FAFAFA]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Card 1: Customer */}
                <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-start relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 text-teal-600 z-10">
                        <FaUserPlus className="text-3xl" />
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-4 font-heading z-10 w-full">
                        Looking for a Service?
                    </h3>
                    <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-md z-10">
                        Join thousands of customers who use ServiConnect to find reliable, verified professionals for all their service needs.
                    </p>

                    <Link to="/" className="z-10 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-teal-600/30 flex items-center gap-2 group-hover:gap-4">
                        Book a Service <FaArrowRight />
                    </Link>
                </div>

                {/* Card 2: Provider */}
                <div className="bg-teal-700 p-12 rounded-[2.5rem] shadow-xl shadow-teal-900/10 flex flex-col items-start relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 text-white z-10 border border-white/20">
                        <FaBriefcase className="text-3xl" />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-4 font-heading z-10 w-full">
                        Want to Offer Your Services?
                    </h3>
                    <p className="text-teal-100 mb-10 text-lg leading-relaxed max-w-md z-10">
                        Grow your business with ServiConnect. Reach thousands of customers, manage bookings easily, and get paid securely.
                    </p>

                    <button
                        onClick={onOpen}
                        className="z-10 bg-white hover:bg-gray-50 text-teal-900 font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 group-hover:gap-4 cursor-pointer"
                    >
                        Become a Provider <FaArrowRight />
                    </button>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
                <ModalOverlay backdropFilter='blur(5px)' />
                <ModalContent borderRadius="2xl" p={4}>
                    <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">How do you want to join?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={8}>
                        <VStack spacing={4}>
                            <Button
                                w="full"
                                h="auto"
                                py={6}
                                justifyContent="space-between"
                                variant="outline"
                                onClick={() => handleSelection('individual')}
                                _hover={{ bg: 'teal.50', borderColor: 'teal.500' }}
                                group
                            >
                                <HStack spacing={4}>
                                    <Box p={3} bg="teal.100" borderRadius="full" color="teal.600">
                                        <FaUser size={24} />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontSize="lg" fontWeight="bold">Individual Technician</Text>
                                        <Text fontSize="sm" color="gray.500">I am a skilled professional working independently</Text>
                                    </VStack>
                                </HStack>
                                <FaArrowRight />
                            </Button>

                            <Button
                                w="full"
                                h="auto"
                                py={6}
                                justifyContent="space-between"
                                variant="outline"
                                onClick={() => handleSelection('organization')}
                                _hover={{ bg: 'teal.50', borderColor: 'teal.500' }}
                            >
                                <HStack spacing={4}>
                                    <Box p={3} bg="blue.100" borderRadius="full" color="blue.600">
                                        <FaBuilding size={24} />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontSize="lg" fontWeight="bold">Service Provider Organization</Text>
                                        <Text fontSize="sm" color="gray.500">I own a company with a team of professionals</Text>
                                    </VStack>
                                </HStack>
                                <FaArrowRight />
                            </Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CallToAction;
