import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // const date = new Date(2021, 2, 28)
  // const price = 234.76;
  // const car_package = "Car Insurance"
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">{props.Monthlyexpense}$</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
