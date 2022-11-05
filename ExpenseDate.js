import "./ExpenseDate.css";
function ExpenseDate(props) {
 const month = props.date.toLocaleString('en-US', {month: "long"})
 const day = props.date.toLocaleString('en-US', {day: "2-digit"})
 const year = props.date.getFullYear()
  return (
    <div className="Expense-date">
      <div className="Expense-date__month">{month}</div>
      <div className="Expense-date__day">{day}</div>
      <div className="Expense-date__year">{year}</div>
    </div>
  );
}
export default ExpenseDate;