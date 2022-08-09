import { Box, Heading, Stack, Text, Progress, Button } from '@chakra-ui/react'
import { currencyFormatter } from '../utils/currencyFormatter'

const getProgressBarColor = (amount, max) => {
  const ratio = amount / max
  if (ratio < 0.5) return 'teal'
  if (ratio < 0.75) return 'yellow'
  return 'red'
}

const BudgetCard = ({ name, amount, max }) => {
  return (
    <Box p={6} w="full" boxShadow="md" borderWidth={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        mb={3}
      >
        <Heading as="h2" size="md">
          {name}
        </Heading>
        <Text fontSize="md" display="flex" alignItems="baseline">
          {currencyFormatter.format(amount)} /
          <Text as="span" fontSize="sm" color="gray.600" ms={1}>
            {currencyFormatter.format(max)}
          </Text>
        </Text>
      </Stack>
      <Progress
        colorScheme={getProgressBarColor(amount, max)}
        min={0}
        max={max}
        value={amount}
      />
      <Stack direction="row" gap="2" mt="4">
        <Button colorScheme="teal" variant="outline" ms="auto">
          Add Expense
        </Button>
        <Button variant="outline">View Expenses</Button>
      </Stack>
    </Box>
  )
}

export default BudgetCard
