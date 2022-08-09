import { RiCloseLine } from 'react-icons/ri'
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { UNCATEGORIZED_BUDGET_ID, useBudget } from '../context/BudgetContext'
import { currencyFormatter } from '../utils/currencyFormatter'

const ViewExpensesModal = ({ budgetId, handleClose }) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudget()
  const expenses = getBudgetExpenses(budgetId)
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? {
          name: 'Uncategorized',
          id: UNCATEGORIZED_BUDGET_ID,
        }
      : budgets.find(budget => budget.id === budgetId)

  return (
    <Modal isOpen={budgetId != null} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Stack direction="row" gap="2" alignItems="baseline">
            <Heading as="h3" fontSize="lg">
              Expenses - {budget?.name}
            </Heading>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => {
                  deleteBudget(budget)
                  handleClose()
                }}
              >
                Delete
              </Button>
            )}
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction="column" gap="3">
            {expenses.map(expense => (
              <Stack
                key={expense.id}
                direction="row"
                gap="2"
                alignItems="baseline"
              >
                <Text me="auto" fontSize="md">
                  {expense.description}
                </Text>
                <Text me="auto" fontSize="sm">
                  {currencyFormatter.format(expense.amount)}
                </Text>
                <Button
                  size="xs"
                  colorScheme="red"
                  onClick={() => deleteExpense(expense)}
                >
                  <RiCloseLine />
                </Button>
              </Stack>
            ))}
          </Stack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ViewExpensesModal
