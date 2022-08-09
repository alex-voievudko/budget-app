import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudget } from '../context/BudgetContext'

const AddExpenseModal = ({ isOpen, handleClose, defaultBudgetId }) => {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { addExpense, budgets } = useBudget()

  const handleSubmit = e => {
    e.preventDefault()
    addExpense({
      desctiption: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    })
    handleClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>New Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb="3">
              <FormLabel>Description</FormLabel>
              <Input
                ref={descriptionRef}
                type="text"
                focusBorderColor="teal.500"
              />
            </FormControl>

            <FormControl isRequired mb="3">
              <FormLabel>Amount</FormLabel>
              <NumberInput
                step={0.01}
                defaultValue={0}
                min={0}
                focusBorderColor="teal.500"
              >
                <NumberInputField ref={amountRef} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Budget</FormLabel>
              <Select
                defaultValue={defaultBudgetId}
                ref={budgetIdRef}
                focusBorderColor="teal.500"
              >
                <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                {budgets.map(budget => (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="teal">
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default AddExpenseModal
