import { UNCATEGORIZED_BUDGET_ID, useBudget } from '../context/BudgetContext'
import BudgetCard from './BudgetCard'

const UncategorizedBudgetCard = props => {
  const { getBudgetExpenses } = useBudget()

  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  )

  if (amount === 0) return null

  return <BudgetCard name="Uncategorized" amount={amount} {...props} />
}

export default UncategorizedBudgetCard
