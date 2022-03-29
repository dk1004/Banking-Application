function Balance(){
  const ctx = React.useContext(UserContext);  
  return (
    <Card
      bgcolor="dark"
      header="Balance"
      body={ 
              <>
              Balance
              <h2 id="total">${ctx.users[ctx.users.length-1].balance}</h2><br/>
              
              </>
            }
    />
  )
}
