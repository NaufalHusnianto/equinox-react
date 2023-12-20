import { Card } from "react-bootstrap";

function CustomCard({ backgroundImage, title, description }) {
    return (
      <Card className="bg-dark text-white" style={{ borderRadius: '20px' }}>
        <Card.Img
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${backgroundImage}")`,
            backgroundSize: 'cover',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: '20px 20px 0 0'
          }}>
        </Card.Img>
        <Card.Body className="bg-black" style={{minHeight: '150px', borderRadius: '0 0 20px 20px'}}>
          <Card.Title className="text-white text-center mb-3">{title}</Card.Title>
          <Card.Text style={{width: '80%', marginLeft: '2rem'}}>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default CustomCard;