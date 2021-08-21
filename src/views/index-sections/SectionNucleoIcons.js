/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Jaloliddin Tulanov</h2>
              <br />
              <p className="description">
                Men 1 yil (2020-2021) davomida 
                Bobir akilkhanov Tech academyda 
                (Full stack Python) yo'nalishida taqsil oldim! 
                Manga o'qish davomida Frontend yoqib qoldi ! 
                Backend esa shunchaki oson ekan, shuning uchun Backend yoqmadi! ))

                Har kim o'z sevgan ishini qilishi lozim shunda u ish qilmaydi !

              </p>
              <br />
              <Button
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
              >
                Allohu
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                href=""
                outline
                target="_blank"
              >
                Akbar
              </Button>
            </Col>
            <Col lg="6" md="12">
              <h3>HAYOTDAGI MAQSADIM !!!</h3>
             <h1>
               Alloh roziligini topish va Barcha insonlarga yaxshilik qilish !

               </h1>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
