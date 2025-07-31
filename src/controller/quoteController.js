const model=require("../models/quotes")

exports.getAllQuotes=async (req,res)=>{
    const quotes=await model.find();
    res.json(quotes)
}

exports.addQuote=async (req,res)=>{
    const {quote,author}=req.body;
    const newQuote=new model({quote,author})
    await newQuote.save();
    res.status(201).json(newQuote)
}

exports.quoteById=async (req,res)=>{
    const index=parseInt(req.params.index)
    const quotes=await model.find();
    if(index<0 || index>=quotes.length)
    {
        return res.status(404).json({error:"index out of range"})
    }
    if(index==0){res.json(quotes[0])}
    res.json(quotes[index-1])

}

exports.deteleQuote=async (req,res)=>{
    const id=parseInt(req.params.index)
    const result = await model.findOneAndDelete({ yourNumericIdField: id });
    if(!result){
        return res.status(404).json({error:"can't find element to delete"})
    }
    res.json({message:"element deleted succesfully"})
}
