const inputs = document.querySelectorAll(".inputbox input");

console.log(inputs);

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix );
    //console.log(this.value);
    //console.log(this.name);
  
    const elem = document.querySelector('.mainbox')
    const style = getComputedStyle(elem ,0);
    const shadow = style.boxShadow;    
    
    console.log(shadow);


     document.getElementById("copy").innerHTML = `box-shadow: ${shadow};
-webkit-box-shadow: ${shadow};
-moz-box-shadow:  ${shadow};`

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



document.querySelector(".btn").addEventListener('click' , () => {

  var copyText = document.getElementById("copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
});


