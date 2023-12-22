import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import CustomCard from "../../components/CustomCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function InternationalBanking() {
        const location = useLocation();

        const [amount, setAmount] = useState('');
        const [usdAmount, setUsdAmount] = useState('');

        const convertToUSD = () => {
            const convertedAmount = parseFloat(amount) * 1.12;

            setUsdAmount(convertedAmount.toFixed(2));
        };

        const handleInputChange = (event) => {
            setAmount(event.target.value);
        };

        return (
            <div className="d-flex justify-content-center align-items-center user-select-none">
              <Container fluid className="text-white">
                <Row className="justify-content-center mb-5 mt-5">
                  <p style={{ marginBottom: '3rem', width: '75%', color: 'palevioletred'}} className="fs-5">Home<span className="text-white">{location.pathname}</span></p>
                  <Col md={8} className="text-left">
                      <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>International Banking</h1>
                      <p className="mb-4">
                      Nikmati kemudahan bertransaksi International dengan harga yang bersaing sesuai dengan kebutuhan dan bisnis Anda
                      </p>
                  </Col>
                </Row>

                <Row className="mb-4 w-70 mx-auto bg-dark pt-5 pb-5 ps-5 pe-5">
                  <Col md={6} className="mb-4">
                      <Form>
                          <Form.Group controlId="amount">
                              <Form.Label>Masukkan Jumlah Mata Uang (EUR, GBP, dll)</Form.Label>
                              <Form.Control
                                  type="number"
                                  placeholder="Jumlah"
                                  value={amount}
                                  onChange={handleInputChange}
                              />
                          </Form.Group>
                          <Button variant="primary" onClick={convertToUSD} className="mt-3">
                              Konversi ke USD
                          </Button>
                      </Form>
                  </Col>
                  <Col md={6} className="mb-4">
                      <h4>Hasil Konversi:</h4>
                      <p>{usdAmount ? `${amount} EUR setara dengan ${usdAmount} USD` : '...'}</p>
                  </Col>
              </Row>
                
                <Row className="mb-4 mt-5">
                  <Col md={6} className="mb-4">
                      <CustomCard
                      backgroundImage="/image/kredit-multiguna.jpg"
                      title="Treasury"
                      description="Kredit untuk membiayai berbagai kebutuhan anda"
                      />
                  </Col>
                  <Col md={6} className="mb-4">
                      <CustomCard
                      backgroundImage="/image/tabungan-valas.jpg"
                      title="International Banking"
                      description="Wujudkan kendaraan idaman anda dengan mudah"
                      />
                  </Col>
                </Row>
              </Container>
            </div>
      );
}

export default InternationalBanking;