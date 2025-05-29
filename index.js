const express =require('express');
const app=express();
const PORT=3000;

app.use(express.json());

let books=[
    {
        "id":1,
        "title": "Art of overthinking",
        "author":"Mr shah"
    }
];

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Get all books
app.get('/books',(req,res)=>{
    res.json(books);
});

// Insert
app.post('/books',(req,res)=>{
    const newBook=req.body;
    newBook.id=books.length+1;
    books.push(newBook);
    res.status(201).json(newBook);
});

//Update

app.put('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
   
    const index=books.findIndex(b=>b.id === bookId);

    if(index !== -1)
    {
        books[index]={ ...books[index], ...req.body };
        res.json(books[index]);
    }
    else
    {
        res.status(404).json({ message: "Book not found" });
    }
});

//Delete

app.delete('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    books=books.filter(b=>b.id !== bookId);
    res.json({ message:"Book deleted successfully"});
});
