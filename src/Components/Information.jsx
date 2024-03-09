import React from 'react'
import { useParams } from 'react-router-dom'

function Information() {

  const { id } = useParams()

  const infodata = [
    {
      id: 1,
      infoname: "Full Stack Development",
      about: "Full Stack Development encompasses the comprehensive skill set required to design, develop, and maintain both the client-side (frontend) and server-side (backend) aspects of web applications. Full Stack Developers possess a versatile range of proficiencies, including knowledge of programming languages, frameworks, databases, and deployment technologies. They play a crucial role in the entire software development lifecycle, from conceptualization and prototyping to deployment and ongoing maintenance. With their ability to navigate through various technologies and solve problems across different layers of application development, Full Stack Developers are highly sought after in the tech industry for their capacity to create robust, end-to-end solutions that meet modern web development demands."
    },
    {
      id: 2,
      infoname: "Frontend (HTML, CSS, JAVASCRIPT)",
      about: "Frontend Development with HTML, CSS, and JavaScript is the cornerstone of creating engaging and interactive user interfaces for web applications. HTML provides the structure of web pages, allowing Frontend Developers to organize content in a logical hierarchy. CSS complements HTML by styling the elements, defining their appearance, layout, and responsiveness across different devices and screen sizes. Meanwhile, JavaScript adds functionality and interactivity to the frontend, enabling features such as form validation, animations, and dynamic content updates without requiring page reloads. Frontend Developers meticulously craft user experiences, ensuring cross-browser compatibility and performance optimization through efficient coding practices and utilization of modern frameworks like React, Angular, or Vue.js. With their expertise in these technologies, Frontend Developers play a pivotal role in shaping the visual and interactive aspects of web applications, ultimately enhancing user satisfaction and engagement."
    },
    {
      id: 3,
      infoname: "Backend (Nodejs, Python, Java)",
      about: "Backend Development with Node.js, Python, and Java involves the creation of the server-side logic and infrastructure that power web applications. Backend Developers utilize these versatile programming languages to handle critical tasks such as data processing, authentication, and business logic execution. Leveraging frameworks like Express.js for Node.js, Django or Flask for Python, and Spring for Java, they streamline development and ensure robustness. Backend Developers also manage interactions with databases, employing SQL or NoSQL databases to store and retrieve data efficiently. They design and implement APIs to facilitate communication between the frontend and backend, focusing on reliability, security, and scalability. Security is paramount, with Backend Developers implementing measures such as encryption, input validation, and access controls to protect against cyber threats. Additionally, they optimize performance through techniques like caching and asynchronous processing, ensuring that web applications deliver a seamless and responsive user experience."
    },
    {
      id: 10,
      infoname: "Node js",
      about: "Node.js, a runtime environment based on the V8 JavaScript engine, has revolutionized Backend Development by enabling server-side JavaScript execution. Its event-driven, non-blocking I/O model makes it highly efficient for handling concurrent connections and asynchronous tasks, making it ideal for building scalable and real-time web applications. With Node.js, Backend Developers can leverage a vast ecosystem of libraries and frameworks such as Express.js to streamline API development and routing. Its lightweight architecture allows for rapid prototyping and deployment, facilitating agile development practices. Node.js excels in handling I/O-bound operations, such as file system access and network communication, making it a preferred choice for building microservices and RESTful APIs. Additionally, its support for package management through npm (Node Package Manager) simplifies dependency management and enhances code reusability. Overall, Node.js empowers Backend Developers to build high-performance, event-driven applications with JavaScript, offering a compelling solution for modern web development needs."
    },
    {
      id: 4,
      infoname: "Python",
      about: "Python has emerged as a prominent language for Backend Development due to its simplicity, readability, and extensive ecosystem of libraries and frameworks. With frameworks like Django and Flask, Python offers robust solutions for building scalable and maintainable web applications. Django, a high-level web framework, provides built-in features for handling authentication, routing, and database management, enabling rapid development of complex applications. On the other hand, Flask, a lightweight framework, offers flexibility and simplicity, making it suitable for smaller projects and prototypes. Python's versatility extends beyond web development, with libraries such as NumPy and Pandas facilitating data manipulation and analysis, further enriching backend functionalities. Its clear syntax and readability enhance code maintainability, fostering collaboration among developers. Additionally, Python's strong community support and extensive documentation make it an attractive choice for Backend Developers, empowering them to build sophisticated web applications with ease and efficiency."
    },
    {
      id: 5,
      infoname: "Java",
      about: "Java remains a stalwart in Backend Development, renowned for its robustness, platform independence, and scalability. With frameworks like Spring and Hibernate, Java offers comprehensive solutions for building enterprise-grade web applications. Spring provides a modular and flexible framework for developing RESTful APIs, handling dependency injection, and managing transactions, making it a cornerstone of Java-based backend development. Hibernate, an object-relational mapping (ORM) framework, simplifies database interactions by abstracting away SQL complexities and enabling seamless integration with various databases. Java's strong typing and compile-time checks ensure code reliability and maintainability, mitigating common errors and facilitating large-scale application development. Furthermore, Java's widespread adoption and mature ecosystem ensure extensive community support, continuous improvement, and compatibility with industry standards. Its enterprise-level features, such as robust security mechanisms and comprehensive documentation, make Java a preferred choice for building mission-critical backend systems that demand reliability, performance, and scalability."
    },
    {
      id: 6,
      infoname: "Html",
      about: "HTML, or Hypertext Markup Language, forms the backbone of Frontend Development, providing the structural foundation for web pages. As a markup language, HTML defines the structure and content hierarchy of web documents, including text, images, links, and multimedia elements. Frontend Developers utilize HTML tags to organize content into meaningful sections, such as headers, paragraphs, lists, and forms, creating an intuitive and accessible user interface. HTML5, the latest version of HTML, introduces new semantic elements and features, enabling developers to create more expressive and interactive web experiences. These include elements like <header>, <nav>, <main>, and <footer>, which enhance document structure and accessibility for both users and search engines. HTML's simplicity, versatility, and compatibility with other web technologies make it an essential skill for Frontend Developers, empowering them to create visually appealing and well-structured web pages that meet modern design standards and user expectations."
    },
    {
      id: 7,
      infoname: "Css",
      about: "Cascading Style Sheets (CSS) play a pivotal role in Frontend Development, shaping the visual presentation and layout of web pages. CSS provides a powerful set of rules and properties for styling HTML elements, allowing Frontend Developers to control aspects such as colors, fonts, spacing, and positioning. With CSS, developers can create visually engaging and responsive designs that adapt seamlessly to different screen sizes and devices. CSS frameworks like Bootstrap and Tailwind CSS further streamline the styling process by offering pre-designed components and utility classes, enabling rapid prototyping and consistent design patterns. Moreover, CSS preprocessors such as Sass and Less extend CSS with features like variables, mixins, and nested rules, enhancing code organization and maintainability. CSS3 introduces advanced features like animations, transitions, and flexbox/grid layouts, enabling Frontend Developers to create dynamic and interactive user interfaces. With its flexibility, modularity, and browser compatibility, CSS remains an indispensable tool for Frontend Developers, empowering them to transform HTML structures into visually appealing and user-friendly web experiences."
    },
    {
      id: 8,
      infoname: "Javascript",
      about: "JavaScript stands as the backbone of modern web development, empowering developers to create dynamic and interactive web experiences. As a versatile and powerful scripting language, JavaScript runs directly in the browser, enabling Frontend Developers to manipulate the Document Object Model (DOM), handle user interactions, and dynamically update content. Beyond frontend development, JavaScript is also utilized in Backend Development with technologies like Node.js, allowing developers to build server-side applications using a unified language. JavaScript's asynchronous capabilities facilitate efficient handling of I/O operations, ensuring responsive and scalable web applications. With its extensive ecosystem of libraries and frameworks such as React, Angular, and Vue.js, JavaScript facilitates rapid development and code reusability, enabling developers to create sophisticated user interfaces and streamline development workflows. JavaScript's ubiquity across web browsers and platforms, coupled with its flexibility and performance, cements its position as an indispensable tool for crafting modern web applications."
    },
    {
      id: 9,
      infoname: "React js",
      about: "React.js has revolutionized Frontend Development with its component-based architecture and declarative approach to building user interfaces. Developed by Facebook, React.js enables Frontend Developers to create dynamic and interactive web applications with ease. Its component-based structure promotes code reusability, modularity, and maintainability, allowing developers to compose complex UIs from smaller, self-contained components. React's virtual DOM (Document Object Model) efficiently updates and renders UI components, optimizing performance and ensuring smooth user experiences. Additionally, React's one-way data flow and state management capabilities simplify application logic, facilitating predictable and scalable development. React's ecosystem includes libraries like React Router for client-side routing and Redux for managing application state, further enhancing its capabilities. With its growing community, extensive documentation, and support for server-side rendering and mobile app development through React Native, React.js has become a cornerstone of modern Frontend Development, empowering developers to build powerful and responsive user interfaces for web and mobile applications."
    },
    {
      id: 11,
      infoname: "Dom",
      about: "The Document Object Model, or DOM, serves as the interface between web browsers and the content of web pages, providing a structured representation of the document's elements. It organizes HTML documents into a hierarchical tree structure, where each element, attribute, and text node is represented as an object. Through the DOM, Frontend Developers can dynamically manipulate the content, structure, and style of web pages using scripting languages like JavaScript. By accessing and modifying DOM elements, developers can create interactive user interfaces, respond to user actions, and update content dynamically without requiring page reloads. Additionally, the DOM enables seamless integration of multimedia content, forms, and interactive elements into web pages, enhancing user engagement and interactivity. With its standardized API and support across various web browsers, the DOM plays a fundamental role in modern web development, enabling developers to create dynamic and responsive web experiences that adapt to user interactions and preferences."
    },

  ]

  return (<>
    {
      infodata.filter((amu) => amu.id === parseInt(id)).map((amu, index) => {
        return (
          <div className="infocard" key={index}>
            <div className="heading">
              <h3>{amu.infoname}</h3>
            </div>
            <div className="info">
              <p>{amu.about}</p>
            </div>
          </div>
        )
      })

    }

  </>)
}

export default Information
