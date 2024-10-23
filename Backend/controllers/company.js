import apiResponse from "../utilites/apiResponse.js"
import { Company } from "../models/company_model.js";

const registerCompany=async(req,res)=>{
try{
    const{companyName,companyEmail,companyPassword}=req.body;
    if(!companyName || !companyEmail || !companyPassword){
         return res.status(400).json( new apiResponse({
           message:"Fill all fields",
           success:true,
           status:400
         }))
    }
    let company= await Company.findOne({
        $or:[{name:companyName,email:companyEmail}]
    })
    if(company){
        return res.status(400).json( new apiResponse({
            message:"Company already exists",
              sucess:false
        }))
    }
    company= await Company.create({
        name:companyName,
        email:companyEmail,
        password:companyPassword,
        userId:req.id

    })
    return  res.status(201).json(new apiResponse({
        status:201,
        message:"Company created successfully",
        success:true
    }))


}catch(e){
    console.log(e)
    return res.status(400).json( new apiResponse({
        message:"Error in Company Register",
          sucess:false
    }))
}
}

const getCompanyByID= async(req,res)=>{
    try{
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(201).json( new apiResponse({
            message:`Company Found by [${companyId}] ID`,
              sucess:true,
              data:company
        }))


    }catch(e){
        console.log(e)
        return res.status(400).json( new apiResponse({
            message:"Error in Company ID",
              sucess:false
        }))
    }
}

const getCompany= async(req,res)=>{
    try{
        const userId=req.id // logged user
        const {companyEmail,companyPassword}=req.body
        const company=await Company.find({
         $or:[  {  userId},{email:companyEmail},{password:companyPassword}]
                })

        if(!company){
            return res.status(400).json( new apiResponse({
                message:" NO Company found",
                  sucess:false
            }))
        }
        return res.status(201).json( new apiResponse({
            message:"Company Found",
            sucess:true,
            data:  company,
              userId
        }))

        

    }catch(e){
        console.log(e)
        return res.status(400).json( new apiResponse({
            message:"Error in get Company",
              sucess:false
        }))
    }
}
 
const updateCompany=async(req,res)=>{
    try{
        const {name,description,website,location,email}=req.body
        const logoFile=req.logoFile
         // cloudinary
         const updateData ={name,description,website,location}
         const company =await Company.findByIdAndUpdate(req.params.id,updateData,{new:true})
         if(!company){
            res.status(401).json( new apiResponse({
                status:401,
                message:"Company Not found",
                company,
                success:false
             }))
         }
         return res.status(201).json( new apiResponse({
            status:201,
            message:"Company updated",
            company,
            success:true
         }))
    }catch(e){
        console.log(e)
        return res.status(400).json( new apiResponse({
            status:400,
            message:"error in update company",
            success:false
        }))
    }
}
export{
    getCompany,
    updateCompany,
    registerCompany,
    getCompanyByID

} 