async function imagefecth()
{
    const response=await fetch('rainbow.jpg');
    const blob=await response.blob();
    document.getElementById('raisdnbow').src = URL.createObjectURL(blob);
}
imagefecth().then(response=>{
    console.log('Yay');
}).catch(error=>{
    console.log("Error in Laoding");
})