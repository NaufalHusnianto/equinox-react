import { Card } from "react-bootstrap";

function CustomCard({ backgroundImage, title, description }) {
    return (
      <Card className="bg-dark text-white">
        <Card.Img
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${backgroundImage}")`,
            backgroundSize: 'cover',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
        </Card.Img>
          <Card.Body className="bg-black">
            <Card.Title className="text-white text-center">{title}</Card.Title>
            <Card.Text style={{width: '80%', marginLeft: '4rem'}}>{description}</Card.Text>
          </Card.Body>
      </Card>
    );
  }
  
  export default CustomCard;