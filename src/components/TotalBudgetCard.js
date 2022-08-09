import { useBudget } from '../context/BudgetContext'
import BudgetCard from './BudgetCard'

const TotalBudgetCard = props => {
  const { expenses, budgets } = useBudget()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)

  if (max === 0) return null

  return (
    <BudgetCard name="Total" amount={amount} {...props} max={max} hideButtons />
  )
}

export default TotalBudgetCard
