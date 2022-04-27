const express = require ('express');

const server = express();


server.use(express.json());

const produtos = ['prod1 xpty','prod2 xpty','prod3 do bão'];

// Retona um curso 
//  index é o parâmetro passado pela url para o index do vetor produtos.
server.get('/produtos/:index',(req,res)=>{
    const { index } = req.params;
    return res.json(produtos[index]);
});


//retorna todos os produtos
server.get('/produtos',(req,res)=>{
    return res.json(produtos);
});

//Cria um produto
server.post('/produtos',(req,res)=>{
    const {name} = req.body;
    produtos.push(name);
    return res.json(produtos);
});


// Atualizar um produto
server.put('/produtos/:index',(req,res)=>{
    const { index } = req.params;
    const { name } = req.body;
    console.log(index,name,produtos[index]);
    
    produtos[index] = name;

    return res.json(produtos);

});

//Deletar um produto

server.delete('produtos/:index',(req,res)=>{
    const {index} = req.params;

    produtos.splice(index,1);

    return res.json({message : "O curso foi deletado"});
});




server.listen(3000);
