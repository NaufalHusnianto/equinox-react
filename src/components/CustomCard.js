import { Card } from "react-bootstrap";

function CustomCard({ backgroundImage, title, description }) {
    return (
      <Card className="bg-dark text-white">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${backgroundImage}")`,
            backgroundSize: 'cover',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    );
  }
  
  export default CustomCard;