import React, { useState } from 'react'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
  Heading,
  Button,
} from '@chakra-ui/react'
// import { ColorModeSwitcher } from './ColorModeSwitcher'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import { useBudget } from './context/BudgetContext'

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudget()

  return (
    <ChakraProvider theme={theme}>
      <Box px={6} my={6} fontSize="xl">
        <HStack spacing={2} mb={4}>
          <Heading mr="auto" as="h1" size="lg">
            Budgets
          </Heading>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => setShowAddBudgetModal(true)}
          >
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
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )

            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
              />
            )
          })}
        </Grid>
      </Box>
      <AddBudgetModal
        isOpen={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
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
