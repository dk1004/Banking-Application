function Withdraw(){
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [totalState, setTotalState] = React.useState(0);
  const [withdraw, setWithdraw]         = React.useState('');
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
    console.log(withdraw);
    if (!validatenumb(withdraw,     'Must be a number greater than 0'))     return;
    if (!validateletter(withdraw,     'Must be a number')) return;
    if (withdraw>(+ctx.users[ctx.users.length-1].balance)) return setStatus('Error: Insufficient Funds'), setTimeout(() => setStatus(''),3000);
    let newTotal = (+ctx.users[ctx.users.length-1].balance) - (+withdraw) ;
    setTotalState(newTotal);
    ctx.users.push({balance:newTotal,withdraw});
    setShow(false);
    event.preventDefault;
  }    
  function clearForm(){
    setWithdraw('');
    setShow(true);
    setState(true);
  }
 
 

  return (
    <Card
      bgcolor="dark"
      header="Withdraw"
      status={status}
      body={ show ? (
              <>
              Balance
              <h2 id="total">${ctx.users[ctx.users.length-1].balance}</h2><br/>
              Withdraw Amount<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter Withdraw Amount" onKeyUp={isEmpty} value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              
              
              <button type="submit" className="btn btn-light" disabled={state} onClick={handleCreate}>Withdraw</button>
              </>
              ):(
              <>
              Balance
              <h2 id="total">${ctx.users[ctx.users.length-1].balance}</h2><br/>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdraw</button>
        </>
      )}
    />
  )
}