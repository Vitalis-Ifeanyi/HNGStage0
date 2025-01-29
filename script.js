const updateUTCtime =()=>{
    const updateTime = document.getElementById('utcTime')
    const now = new Date()
    updateTime.textContent = now.toISOString().split('.')[0]+'UTC';
   
}
updateUTCtime()
setInterval(updateUTCtime,1000)