const askRestart = () =>{
  do {
    restart = prompt(`To restart: 'y'.
  To close the program: 'n'`);
  
    switch (restart) {
      case 'y':
        calculatorPro();
        break;
  
      case 'n':
        alert('Bye!');
        break;
    }
    
  } while (restart !== 'y' && restart !== 'n');
}

const calculatorPro = () => {
  let newNumber;
  let numberList = [];
  let results = [];
  let restart;

  do {
    newNumber = prompt(`Welcome to Calculator Pro !!
Enter a number or press cancel to stop`);

    while (isNaN(newNumber) || newNumber === "") {
      alert(`That's not not a number. Please try again.`);
      newNumber = prompt("Enter a number or press cancel to stop");
  }

    if(newNumber !== null) numberList.push(parseFloat(newNumber));

  } while (newNumber !== null);

  if(numberList.length === 0){
    alert(`You've stopped the operation.
There's no data to calculate`);

askRestart();

  } else{
    let total = numberList[0];
    for(let i = 1; i < numberList.length; i++){
      total = (total + numberList[i]);
    }
  
    results.push(total);
  
    total = numberList[0];
    for(let i = 1; i < numberList.length; i++){
      total = (total - numberList[i]);
    }
  
    results.push(total);
  
    total = numberList[0];
    for(let i = 1; i < numberList.length; i++){
      total = (total * numberList[i]);
    }
  
    results.push(total);
  
    total = numberList[0];
    for(let i = 1; i < numberList.length; i++){
      total = (total / numberList[i]);
    }
  
    results.push(total);

    alert(`The results are:      
SUM: ${results[0]},
SUBTRACTION: ${results[1]},
MULTIPLICATION: ${results[2]},
DIVISION: ${results[3]}`)

      askRestart();
    }
}

calculatorPro();
