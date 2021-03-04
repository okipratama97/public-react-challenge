const logger = store => next => action => {
  //Checker
  console.log("MIDDLEWARE WORKING");
  
  next(action)
}

export default logger