console.log('i am here')

// alert('Ma is coming')

const maComing=()=>{
    alert('Amma is coming')
}
const askPicnic=()=>{
   const response= confirm('are u going to picnic?')
   if(response==true){
       alert('500 Taka bkash kore de quick!!')
   }
   else{
       console.log('DGM !!')
   }
   console.log(response)
}
const askName=()=>{
   const name= prompt('What is your name?')
   if(name){
    console.log(name)
   }
   
}