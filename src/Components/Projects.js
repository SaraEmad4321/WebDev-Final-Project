import { Container, Col, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectsCard';
import TrackVisibility from 'react-on-screen';
import colorSharp from '../assets/img/color-sharp.svg';
import projImg1 from '../assets/img/project3.png';
import projImg2 from '../assets/img/project1.webp';
import projImg3 from '../assets/img/project2.jpg';
import projImg4 from '../assets/img/project4.jpg';
import projImg5 from '../assets/img/project5.jpg';
import projImg6 from '../assets/img/project6.png';
function Projects() {
 const projects = [
  {
    title: "Smart File Organizer",
    description: "Efficient file management with structured storage and retrieval",
    imgUrl: projImg1,
  },
  {
    title: "Secure File Explorer",
    description: "Enhanced file navigation with access control features",
    imgUrl: projImg2,
  },
  {
    title: "Cloud File Dashboard",
    description: "Modern UI for managing and organizing digital assets",
    imgUrl: projImg3,
  },
  {
    title: "Digital Signature System",
    description: "Cryptography-based document authentication using ECDSA",
    imgUrl: projImg4,
  },
  {
    title: "Secure Document Verification",
    description: "Ensures integrity and authenticity of digital documents",
    imgUrl: projImg5,
  },
  {
    title: "Cryptographic Signing Platform",
    description: "End-to-end secure signing and verification workflow",
    imgUrl: projImg6,
  },
];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> A collection of projects showcasing my skills, creativity, and experience in web development, cybersecurity, and problem solving through practical applications and real-world implementations.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Tab two projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Tab three projects</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp}></img>
    </section>
  )
}
export default Projects;