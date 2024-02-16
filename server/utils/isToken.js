import jwt from './jwt.js'
const isToken=(req,res,next)=>{
  if(req.path==='/adminapi/user/login'){
    next()
  }else{
    const token =req.headers.authorization
    if(token){
      const payload= jwt.verify(token)
      if(payload){
        const {_id}=payload
        const newtoken=jwt.generate({_id})
        res.setHeader('authorization', newtoken);
        next()
      }else{
        res.status(401).send({
          code:'-1',
          msg:'授权已过期,请重新登录'
        })
      }
    }
  }
}

export default isToken