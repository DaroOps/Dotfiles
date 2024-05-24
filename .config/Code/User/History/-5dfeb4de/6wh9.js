const port = 5003
const endpoint = `http://localhost:${port}/employees`

export const getGamaByName=async(name)=>{
    let res =await fetch(`http://localhost:5503/gama?gama=${name}`)
    let gama=await res.json()
    return gama
    }