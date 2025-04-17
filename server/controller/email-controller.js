import Email from '../model/Email.js'

export const saveSendEmails =  (request, response) => {
    try {
        const email = new Email(request.body);
        email.save();

        response.status(200).json('email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
        console.error(error);
    }
}

export const getEmails = async (req,res) => {

    try {
       let emails;
       
        if(req.params.type === 'bin'){
           emails = await Email.find({Bin: true})           
        }
        else if(req.params.type === 'allmail'){
            emails = await Email.find({})
        }
        else if(req.params.type === 'starred'){
            emails = await Email.find({Starred: true,Bin:false})
        }
        else{
            emails = await Email.find({Type: req.params.type})
        }
        return  res.status(200).json(emails);

    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const moveEmailsToBin = async (req,res) =>{
    try{
        await Email.updateMany({ _id: {$in: req.body}},{$set:{Bin: true,Starred: false,Type:''}})
        return res.status(200).json('emails deleted successfully')
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

export const toggleStarredEmails = async (req,res)=>{
    try{
        await Email.updateOne({_id: req.body.id}, {$set: {Starred: req.body.value}})
        return res.status(200).json('email is starred mark')
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

export const deleteEmails = async (req,res)=>{
    try{
        await Email.deleteMany({_id: {$in: req.body}})
        return res.status(200).json('emails delete successfully')
    }
    catch(error){
        res.status(500).json(error.message);
    }
}