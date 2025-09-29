import Card from 'react-bootstrap/Card';

function Category({fileName, categoryName}) {
  return (
    <Card className="bg-dark text-white" style={{height:"200px", width:'200px'}}>

      <Card.Img src={`public/${fileName}`} alt="Card image" height={'200px'}/>

      <Card.ImgOverlay style={{background:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Card.Title>{categoryName}</Card.Title>
      </Card.ImgOverlay>

    </Card>
    
  );
}

export default Category;