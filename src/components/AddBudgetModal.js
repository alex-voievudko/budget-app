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
} from '@chakra-ui/react'
import { useRef } from 'react'
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
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader>New Budget</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb="3">
              <FormLabel>Name</FormLabel>
              <Input ref={nameRef} type="text" focusBorderColor="teal.500" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Maximum Spending</FormLabel>
              <Input ref={maxRef} type="number" focusBorderColor="teal.500" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="teal">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

export default AddBudgetModal
