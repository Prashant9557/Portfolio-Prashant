import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Detective from "../../Assets/Projects/Detective.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import onlineBanking from "../../Assets/Projects/onlineBanking.png";
import chatApp from "../../Assets/Projects/chatify.png";
import MovieRecommender from "../../Assets/Projects/Recommender.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="ChatApp"
              description="The chat application is a real-time communication platform that supports secure user authentication and authorization, dynamic chat room management, and one-to-one messaging using Socket.IO. It ensures scalability with an optimized backend architecture using Node.js, Express.js, and MongoDB, while providing real-time updates and notifications for an engaging user experience. This project showcases a robust implementation of real-time communication and efficient data handling."
              ghLink="https://github.com/Prashant9557/Chat-App"
              demoLink="https://chatappsp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce-Filpazone"
              description="This e-commerce website provides a comprehensive platform for online shopping with functionalities such as dynamic product display, interactive cart management, seamless navigation using breadcrumbs, and a descriptive product detail page. It incorporates user-friendly features like a hero section for promotions, a responsive footer with essential links and social media icons, and efficient state management for tracking cart items and calculating totals. The project demonstrates a robust implementation of modern frontend practices, state handling, and UI/UX principles."
              ghLink="https://github.com/Prashant9557/Ecommerce-Flipzone"
              demoLink="https://ecommerce-flipazone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineBanking}
              isBlog={false}
              title="Online Banking System"
              description="The Bankist website is a comprehensive banking application that allows users to securely log in, view their account balance, track transactions, transfer funds, request loans, and close accounts. It also includes a logout timer for enhanced security and a clean, user-friendly interface to simulate a real banking experience. With its robust functionality, this project demonstrates key concepts in web development and financial application design."
              ghLink="https://github.com/Prashant9557/Online-Bank-Transaction-project"
              demoLink="https://asianbank.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Detective}
              isBlog={false}
              title="Fake-News-Detector"
              description="The Fake News Detection project is a machine learning-based system designed to identify and classify news articles as real or fake. It leverages a combination of preprocessing techniques, TF-IDF vectorization, and multiple models such as Logistic Regression, Gradient Boosting, Random Forest, and Naive Bayes for accurate predictions. The project ensures robust evaluation with high precision, recall, and accuracy across the implemented classifiers."
              ghLink="https://github.com/Prashant9557/DETECT-FAKE-NEWS"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieRecommender}
              isBlog={false}
              title="Movie Recommender System"
              description="The Movie Recommender System is a Python-based application that suggests movies to users using a content-based filtering approach. It leverages a precomputed similarity matrix to recommend top movies similar to the user's selected choice, ensuring personalized recommendations. The system is implemented with Streamlit for an interactive user interface."
              ghLink="https://github.com/Prashant9557/Movie-Recommender-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe Game"
              description="This is an interactive and customizable Tic Tac Toe game using ReactJS, JavaScript, HTML, and CSS. This game is designed to provide a modern and engaging user experience, leveraging a responsive grid system."
              ghLink="https://github.com/Prashant9557/tictactoe"
              demoLink="https://665a11e237abf67848ca1d1d--tictactoebyprashant.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
