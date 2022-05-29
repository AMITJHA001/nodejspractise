const fs = require('fs');
const HandlerCode = (req,res) =>{
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url === "/"){
        fs.writeFileSync('file.txt','Hello World!');
        res.write(`<form action='form_submit' method='post'> 
        <input type='text' name='my_input' ></input>
         <button type='submit'>submit data</button>
        </form>`);
        return res.end();
    }
    res.write("<p>Hello World</p>");
    res.end();
}
    
module.exports = HandlerCode;