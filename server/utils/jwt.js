import jsonwebtoken from 'jsonwebtoken'

const secretKey='fmd316'
const jwt={
  generate:(payload)=>{
    return  jsonwebtoken.sign(payload, secretKey, { expiresIn: '1h' })
  },
  verify:(token)=>{
    try{
      return jsonwebtoken.verify(token,secretKey)
    }catch(err){
      return false
    }
  }
}

export default jwt