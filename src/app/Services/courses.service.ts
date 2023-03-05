export class CoursesService{
  courses = [
      { id:101, name:'Autocomplete', github: 'https://github.com/Deepanshu-saini/Auto_complete.git', duration: 0.5, type: 'Solo Project', 
        ratings: 4.0, image:'./assets/autocomplete.png',
        description: 'This Autocomplete project speeds up human-computer interactions when it correctly predicts the word a user intends to enter after only a few characters have been typed into a text input field.',
        link:"https://github.com/Deepanshu-saini/Auto_complete.git"
      },
      { id:102, name:'FRAS', github: 'https://github.com/Deepanshu-saini/face-recognition-based-attendance-system.git', duration: 4, type: 'Group Project', 
        ratings: 4.5, image:'./assets/face-recognition-attendance-system.jpg',
        description: 'The main purpose of this project is to build a human face recognition for an institute or organization to mark the attendance of their students or employees. It is a subdomain of Object Detection, where we try to observe the instance of semantic objects. This system is fully automated and easily deployable.',
      link:"https://github.com/Deepanshu-saini/face-recognition-based-attendance-system.git"
    },
      { id:103, name:' Sentiment-analysis', github: 'https://github.com/Deepanshu-saini/Sentiment-analysis.git', duration: 4, type: 'Group Project', 
        ratings: 4.0, image:'./assets/sentiment_analysis.jpg',
        description: 'The objective of sentiment analysis project is to accurately extract people opinions from a large number of unstructured review texts and classifying them into sentiment classes, i.e., positive, negative, or neutral.',
        link:"https://github.com/Deepanshu-saini/Sentiment-analysis.git"
      },
      { id:104, name:'Enzyme-stability', github: 'https://github.com/Deepanshu-saini/Enzyme-stability-prediction.git', duration: 1, type: 'Solo Project', 
        ratings: 4.8, image:'./assets/enzyme.png',
        description: 'The goal of this project is to predict the thermostability of enzyme variants. The experimentally measured thermostability (melting temperature) data includes natural sequences, as well as engineered sequences with single or multiple mutations upon the natural sequences.',
        link:"https://github.com/Deepanshu-saini/Enzyme-stability-prediction.git"
      },
      { id:105, name:'web-scraper-tool', github: 'https://github.com/Deepanshu-saini/web-scraper-tool.git', duration: 2, type: 'Solo Project', 
        ratings: 4.5, image:'./assets/web.jpg',
        description: 'In this project, data are scrap from website called sitelike.org to find list of similar websites using python with Beautifulsoup and Selenium. It is a full stack project developed using flask as web framework.',
        link:"https://github.com/Deepanshu-saini/web-scraper-tool.git"
      },
      { id:106, name:'Ad-click-pediction', github: 'https://github.com/Deepanshu-saini/Ad-click-pediction.git', duration: 1, type: 'Solo Project', 
        ratings: 4.5, image:'./assets/ad.jpg',
        description: 'Publicizing is a multi-billion-dollar industry that goes about as a scaffold among organizations and their clients. While the vast majority are aware of the promotions around them, they represent the intensity of those advertisements and the impact of publicizing all in all. Research proposes that basically making somebody mindful of items, occasions, and brands expands the chances of that individual really purchasing those items, going to those occasions, or supporting those brands. Further, if an advertisement catches a man thoughtfulness regarding the degree that he or she has a prompt, positive response to it, those chances of direct item commitment spikes significantly. In this project, we are going to work on an advertising dataset, indicating whether or not a particular internet user has clicked on an Advertisement. The goal is to predict if a user would click on an advertisement based on the features of the user.',
        link:"https://github.com/Deepanshu-saini/Ad-click-pediction.git"
      },
      { id:107, name:'client-server', github: 'https://github.com/Deepanshu-saini/client-server-programming.git', duration: 0.5, type: 'Solo Project', 
        ratings: 3.5, image:'./assets/cs.png',
        description: 'A basic example of a TCP client/server network using Python socket and threading library. The server uses instances of a client object and individual threads to listen to incoming data from each client while listening for new connections.',
        link:"https://github.com/Deepanshu-saini/client-server-programming.git"
      }
    ];

    works=[
      {title:"Biz2Credit", role: "Software Intern", start:"February,2023", end:"Present",Descp:"We work as Full stack developer."},
      {title:"Birla Institute of Information Technology", role: "student Researcher", start:"May,2022", end:"July,2022",Descp:"We wrote a survey research paper on Blockchain envisioned UAV network using 6G communication."},
      {title:"Indian Institute of Technology", role: "Campus Ambassador", start:"January,2020", end:"March,2020",Descp:"We had to create awareness for IIT-roorkie fest using Digital marketing and by collaborating with student societies in college."},
    ];

    skillsData = [
      {
        'id': '1','skill': 'PYTHON',
        'progress': '90%'
        
      },
      {
        'id': '2','skill': 'C++',
        'progress': '70%'
        
      },
      {
        'id': '3','skill': 'JAVA',
        'progress': '50%'
      },
      {
        'id': '4','skill': 'JAVASCRIPT',
        'progress': '80%'
        
      },
      {
        'id': '5','skill': 'SQL , MYSQL',
        'progress': '75%'
      },
      {
        'id': '6','skill': 'NODE JS',
        'progress': '60%'
        
      },
      {
        'id': '7','skill': 'ANGULAR',
        'progress': '75%'
        
      },
      {
        'id': '8','skill': 'ExpressJs',
        'progress': '25%'
        
      },
      {
        'id': '9','skill': 'MONOGODB',
        'progress': '50%'
        
      },
      {
        'id': '10','skill': 'REACT JS',
        'progress': '25%'
        
      },
      {
        'id': '8','skill': 'MEAN Stack',
        'progress': '70%'        
      },
      {
        'id': '8','skill': 'MERN Stack',
        'progress': '50%'
        
      },
    ];
}