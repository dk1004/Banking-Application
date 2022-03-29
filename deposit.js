function Deposit(){
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [totalState, setTotalState] = React.useState(0);
  const [deposit, setDeposit]         = React.useState('');
  const [state, setState]       = React.useState(true);
  const ctx = React.useContext(UserContext);  
  
  function isEmpty(){
    let inputAcc = document.getElementsByClassName('form-control').value;
    if(inputAcc!=""){
      setState(false);}
  };

  function validateletter(field, label){
    if (isNaN(field)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    
    return true;
}
function validatenumb(field, label){
  if (field<=0 ) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  
  return true;
}
  const handleCreate=(event)=>{
    console.log(deposit);
    if (!validatenumb(deposit,     'Must be a number greater than 0'))
    return;
    if (!validateletter(deposit,     'Must be a number'))
    return;
    let newTotal = (+deposit) + (+ctx.users[ctx.users.length-1].balance);
    setTotalState(newTotal);
    ctx.users.push({balance:newTotal,deposit});
    setShow(false);
    event.preventDefault;
  }    

  function clearForm(){
    setDeposit('');
    setShow(true);
    setState(true);
  }
 

  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      status={status}
      body={ show ? (
              <>
              Balance
              <h2 id="total">${ctx.users[ctx.users.length-1].balance}</h2><br/>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter Deposit Amount" onKeyUp={isEmpty} value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              
              
              <button type="submit" className="btn btn-light" disabled={state} onClick={handleCreate}>Deposit</button>
              </>
              ):(
              <>
              Balance
              <h2 id="total">${ctx.users[ctx.users.length-1].balance}</h2><br/>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
              
            
    />
  )
}