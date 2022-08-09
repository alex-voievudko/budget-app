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
import { useBudget } from './context/BudgetContext'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import AddExpenseModal from './components/AddExpenseModal'

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudget()

  const openAddExpenseModal = budgetId => {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

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
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={openAddExpenseModal}
          >
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
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              />
            )
          })}
        </Grid>
      </Box>
      <AddBudgetModal
        isOpen={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        isOpen={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
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
