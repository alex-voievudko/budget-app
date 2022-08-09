import React from 'react'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
  Heading,
  Button,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import BudgetCard from './components/BudgetCard'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box px={6} my={6} fontSize="xl">
        <HStack spacing={2} mb={4}>
          <Heading mr="auto" as="h1" size="lg">
            Budgets
          </Heading>
          <Button colorScheme="teal" variant="solid">
            Add Budget
          </Button>
          <Button colorScheme="teal" variant="outline">
            Add Expense
          </Button>
        </HStack>
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="1rem"
          alignItems="flex-start"
        >
          <BudgetCard name="Entertainment" amount="800" max="1000"></BudgetCard>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App

{
  /* <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <HStack spacing="2" mb="4">
            <Heading>Budgets</Heading>
          </HStack>
        </Grid> */
}
