import { useRef } from 'react'
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
} from '@chakra-ui/react'
import { useBudget } from '../context/BudgetContext'

const AddBudgetModal = ({ isOpen, handleClose }) => {
  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudget } = useBudget()

  const handleSubmit = e => {
    e.preventDefault()
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
    handleClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>New Budget</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb="3">
              <FormLabel>Name</FormLabel>
              <Input ref={nameRef} type="text" focusBorderColor="teal.500" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Maximum Spending</FormLabel>
              <NumberInput
                step={0.01}
                defaultValue={0}
                min={0}
                focusBorderColor="teal.500"
              >
                <NumberInputField ref={maxRef} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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

export default AddBudgetModal
