let expense=[]

function handleSubmit(event){
event.preventDefault()
let amount=parseFloat(document.getElementById('amount').value) 
let description=document.getElementById('description').value
let catogery=document.getElementById('category').value 
expense.push({amount,description,catogery})
renderExpense()
document.getElementById('expenseForm').reset()
}
function renderExpense(){
  let expenseList=document.getElementById('expenseList');
  expenseList.innerHTML='';
  expense.forEach((expense,index)=>{
    let item=document.createElement('div')
    item.classList.add('expense-item')
    item.innerHTML=`
    
        <span>${expense.amount}-${expense.description}-${expense.catogery}</span>
        <button onclick='editExpense(${index})'>Edit</button>
        <button onclick='deleteExpense(${index})'>Delete</button>
    `
    expenseList.appendChild(item)
  })
}
function deleteExpense(index){
     expense.splice(index,1)
     renderExpense()
}
function editExpense(index){
  let expenses=expense[index];
  let newAmount= parseFloat(prompt((expenses.amount)));
   let newDes=prompt(expenses.description);
   let newCat=prompt(expenses.catogery);
expense[index]={
  amount:newAmount,
  description:newDes,
  catogery:newCat
}
renderExpense()
}
renderExpense()