const submitHandler = (e) => {
       
    let btn = document.getElementById('submitHandler')
    let isValid = false;
    let reg = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    btn.addEventListener('click', function(e){
      if(isValid){
        e.preventDefault();
      }
    
      let email = document.getElementById('email');
      let fName = document.getElementById('fullName');
      
  

      if(fName.value.length < 3) {
        console.log('Minimum lenght of name must be 3 characters')
      }else if(fName.value.lenth === 0){
        console.log("please enter  your email")
      }else if(!reg.test(email.value)){
        console.log('email is not valid')
      }else {
        isValid = true;
        alert('form is submitted')
      }

    })
    
  }

  const changeHandler = (e) =>{

    let email = document.getElementById('email');
    let fName = document.getElementById('fullName');
    
    let reg = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    fName.addEventListener('keyup', function(e){
      console.log(e.target.value)
    })
    email.addEventListener('keyup', function(e){
      if(!reg.test(email.value)){
        console.log('email is not valid')
      }else {
        isValid = true;
        console.log('email is valid')
      }
    })
  }
  changeHandler();
  submitHandler();