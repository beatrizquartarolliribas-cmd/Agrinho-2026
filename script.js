*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial,sans-serif;
background:#f5f5f5;
color:#333;
}

header{
background:#004D40;
color:white;
padding:20px;
text-align:center;
}

nav{
margin-top:10px;
}

nav a{
color:white;
text-decoration:none;
margin:10px;
font-weight:bold;
}

.hero{
background:#00C853;
color:white;
text-align:center;
padding:80px 20px;
}

.hero button{
margin-top:20px;
padding:12px 25px;
border:none;
border-radius:8px;
cursor:pointer;
}

section{
padding:60px 20px;
}

section h2{
text-align:center;
margin-bottom:20px;
}

.cards{
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content:center;
}

.card{
background:white;
padding:20px;
width:250px;
border-radius:12px;
box-shadow:0 4px 8px rgba(0,0,0,.1);
}

.comparacao{
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content:center;
}

.positivo,
.negativo{
background:white;
padding:20px;
width:300px;
border-radius:12px;
}

.positivo{
border-left:5px solid green;
}

.negativo{
border-left:5px solid red;
}

#quiz{
text-align:center;
}

#quiz button{
margin:10px;
padding:12px 20px;
border:none;
border-radius:8px;
cursor:pointer;
}

footer{
background:#004D40;
color:white;
text-align:center;
padding:20px;
}

@media(max-width:768px){

.cards,
.comparacao{
flex-direction:column;
align-items:center;
}

}
