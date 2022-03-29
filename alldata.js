function AllData(){
  const ctx = React.useContext(UserContext);
  


  return (
    <>
    <h5 className="card-header">All Data</h5>
    <div className="card-group">
  <div className="card">
      <h6 className="card-header">Name</h6>
      <div className="card-text">{
        ctx.users.map(function(user,index){
          return <p key={index} className="card-text">{user.name}</p>
        })
      }</div>
    
  </div>
  <div className="card">
      <h6 className="card-header">Email</h6>
      <div className="card-text">{
        ctx.users.map(function(user,index){
          return <p key={index}>{user.email}</p>
        })
      }</div>
  </div>
  <div className="card">
      <h6 className="card-header">Password</h6>
      <div className="card-text">{
        ctx.users.map(function(user,index){
          return <p key={index}>{user.password}</p>
        })
      }</div>
  </div>
  <div className="card">
      <h6 className="card-header">Balance</h6>
      <div className="card-text">{
        ctx.users.map(function(user,index){
          if(user.balance){
          return <p key={index}>${user.balance}</p>}
          else{
            return <p key={index}></p>
          }
        })
      }</div>
  </div>
  <div className="card">
      <h6 className="card-header">Transaction</h6>
      <div className="card-text">{
        ctx.users.map(function(user,index){
          if(user.deposit){
          return <p key={index}>Deposit: ${user.deposit} </p>}
          if(user.withdraw){
          return <p key={index}>Withdraw: ${user.withdraw} </p>} 
          else{
            return <p key={index}></p>
          }
        })}
      </div>
  </div>
</div>


      
      
     
    
    </>
  );
}
