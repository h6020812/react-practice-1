import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import MyChart from '../components/MyChart'

export default function dashboard() {
    return (
        <Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px"
        >       
            {/* Column 1 */}
            <Flex
                w="15%"
                backgroundColor="#020202"
                color="#fff"
                flexDir="column"
                alignItems="center"
            >
                <Flex
                    flexDir="column"
                    justifyContent="space-between"
                    h="100vh"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={100}
                            fontSize="4xl"
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                             KD
                        </Heading>
                        <Flex flexDir="column" align="flex-start" justifyContent="center">
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text className="active">Home</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiPieChart} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text>Credit</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiDollarSign} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text>Wallet</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items">
                                <Link>
                                    <Icon as={FiBox} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text>Services</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="avatar-1.jpg" />
                        <Text textAlign="center">Michael Li</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Column 2 */}
            <Flex
                w="55%"
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading fontWeight="normal" mb={4} letterSpacing="tight">Welcome back, <Flex fontWeight="bold" display="inline-flex">Michael</Flex></Heading>
                <Text color="gray" fontSize="sm">My balance</Text>
                <Text fontWeight="bold" fontSize="2xl">$10,000,000.59</Text>
                <MyChart />
                <Flex justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading>Transaction</Heading>
                        <Text>Apr 2021</Text>
                    </Flex>
                    <IconButton icon={FiCalendar} />
                </Flex>
            </Flex>

            {/* Column 3 */}
            <Flex
                w="35%"
                bgColor="#f5f5f5"
                p="3%"
                flexDir="column"
                overflow="auto"
            >

            </Flex>
        </Flex>
    )
}