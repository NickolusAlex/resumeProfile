import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GetApp as DownloadIcon, LinkedIn as LinkedInIcon, Call as MobileIcon, LocationOn as LocationIcon, Mail as MailIcon, MenuBook as MenuBookIcon, School as SchoolIcon, CheckCircleOutlineRounded as MarkIcon, EventRounded as PassoutDate } from '@material-ui/icons';
// import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';


import './home.css';
// import { Document, Page } from 'react-pdf';
import ResumePdf from './resume.pdf';
import ParallaxImg from './career_banner.jpg';

const home = () => {

    // const pageNumber = 1;
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     // setNumPages(numPages);
    //     return 0;
    // }onDocumentLoadSuccess}


    const userValue = {
        name : 'Nithyanandhan. V',
        mobile: '+91 7402148766',
        address: '31 / 1, Jayaram Lane, Near Marimuthu Street,',
        city: 'Erode - 638001',
        mail: 'vnithyanandhan55@gmail.com',
        linkedin: 'http://www.linkedin.com/in/nithyanandhan-v-48b716192',

    };

    const paralax_style = {  
        backgroundImage: "url(" + ParallaxImg + ")",
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        minHeight: '480px',
        backgroundAttachment: 'fixed',
      };

    return (

        <div>
        <div style={paralax_style}></div>

        <div className="box">
            {/* <div className="box-heading">
               
            </div> */}
            <div className="box-content">

                {/* <Document
                    file={ResumePdf}
                    onLoadSuccess={(test)=>alert('Success')}
                >
                    <Page pageNumber={pageNumber} />
                </Document> */}

                {/* <Container className="border_change"> */}



                <Row className="box-heading justify-content-md-center">
                    <Col className="resume_title" xs={10} md={10} sm={10} >
                        Resume
                    </Col>
                    <Col xs={2} md={2} sm={2}>
                    <a target="_blank" rel="nofollow noreferrer" href={ResumePdf}>Download<DownloadIcon /></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={4} sm={12} className="bio" >
                        <br />
                        <div className="resume_name">
                            Nithyanandhan . V

                            
                        </div>
                        <div className="resume_address">
                            <LocationIcon className="job_date_icon" /> 13/1, Jayaram Lane, Near Marimuthu Street, <br />Erode - 638001 <br />
                        </div>
                        <div className="resume_address">
                            <MobileIcon className="job_date_icon" /> +91 7402148766 <br />
                        </div>
                        <div className="resume_address">

                            <MailIcon className="job_date_icon" /> vnithyanandhan55@gmail.com <br />
                        </div>
                        <div className="resume_address">

                            <LinkedInIcon className="job_date_icon" /> <a target="_blank" rel="nofollow noreferrer" href={userValue.linkedin}>linkedin.com/in/nithyanandhan-v-48b716192</a>

                        </div>

                        <div className="left_resume_content">
                            <div className="resume_heading">Objective</div>
                            <div className="resume_body">
                                &nbsp;Seeking for a Developer position in a fast growing organization to utilize expertise in web development and testing. Comming with well honed skills, addition to excellent communication skills.
                            </div>
                        </div>


                        <div className="resume_heading">Education</div>
                        <div className="resume_body">
                            <ul>
                                <li>
                                    <div className="school_name"><MenuBookIcon /> &nbsp; Erode Sengunthar Engineering College</div>
                                    <div className="school_degree"><SchoolIcon /> &nbsp; Computer Science and Engineering</div>
                                    <div className="school_percent"><MarkIcon /> &nbsp; 6.98</div>
                                    <div className="school_year">< PassoutDate /> &nbsp; 2016-2020</div>
                                </li>
                                <li>
                                    <div className="school_name"><MenuBookIcon /> &nbsp; Sengunthar Higher Secondary School</div>
                                    <div className="school_degree"><SchoolIcon /> &nbsp; Higher Secondary Certificate</div>
                                    <div className="school_percent"><MarkIcon /> &nbsp; 58.6</div>
                                    <div className="school_year">< PassoutDate /> &nbsp; 2015-2016</div>
                                </li>
                                <li>
                                    <div className="school_name"><MenuBookIcon /> &nbsp; Sengunthar Higher Secondary School</div>
                                    <div className="school_degree"><SchoolIcon /> &nbsp; Secondary School Leaving Certificate</div>
                                    <div className="school_percent"><MarkIcon /> &nbsp; 81.2</div>
                                    <div className="school_year">< PassoutDate /> &nbsp; 2013-2014</div>
                                </li>
                            </ul>
                        </div>

                        <div className="resume_heading">Skills</div>
                        <div className="resume_body">
                            <ul className="resume_skills">
                                <li>C Programming</li>
                                <li>OPPs</li>
                                <li>Java</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JQuery</li>
                                <li>PhP</li>
                                <li>ReactJs</li>
                                <li>MySQL</li>
                            </ul>
                        </div>

                        <div className="resume_heading">Personal Strengths</div>
                        <div className="resume_body">
                            <ul className="">
                                <li>Quick Learning</li>
                                <li>Problem Solving</li>
                                <li>Punctuality</li>
                            </ul>
                        </div>
                        <br />

                    </Col>
                    <Col xs={8} md={8} sm={12} className="records" >
                        <br />
                        <div className="records_body">
                            <div className="records_heading">Experience</div>
                            <div className="records_content">
                                <ul className="experience_list">
                                    <li>
                                        <Row className="job_company">
                                            <Col xs={11} md={8} sm={6} >
                                                Freelance
                                            </Col>
                                            <Col xs={1} md={4} sm={6} className="job_date" >
                                                < PassoutDate className="job_date_icon" />    October, 2020 - Till Now
                                            </Col>
                                        </Row>
                                        <Row className="job_title">
                                            <Col>  Web Developer ( Full Stack ) </Col>
                                        </Row>
                                        <Row className="job_discription">
                                            <Col offset={1}>
                                                With Team of Trusted Members Working with Customer need Delivering the Quality Web Applications.
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="job_company">
                                            <Col xs={11} md={8} sm={6} >
                                                Santhila Databot Pvt Ltd
                                            </Col>
                                            <Col xs={1} md={4} sm={6} className="job_date" >
                                                < PassoutDate className="job_date_icon" />    November, 2020 - Till Now
                                            </Col>
                                        </Row>
                                        <Row className="job_title">
                                            <Col>  PhP Developer </Col>
                                        </Row>
                                        <Row className="job_discription">
                                            <Col offset={1}>
                                                Work in ERP Application to give the optimal solution for the problems to the customer within the given deadline.
                                            </Col>
                                        </Row>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="records_body">
                            <div className="records_heading">Interest</div>
                            <div className="records_content">
                                <ul className="interest_list" >
                                    <li>Web Development</li>
                                    <li>Mobile Application</li>
                                    <li>UI / UX</li>
                                    <li>Cyber Security</li>
                                    <li>Linux</li>
                                </ul>
                            </div>
                        </div>

                        <div className="records_body">
                            <div className="records_heading">Projects</div>
                            <div className="records_content">
                                <ul className="projects_list" >
                                    <li>
                                        <Row className="project_name">
                                            <Col xs={11} md={9} sm={8} >
                                                Stock Maintenance System
                                            </Col>
                                            <Col xs={1} md={3} sm={4} className="job_date" >
                                                Completed In 1 Month
                                            </Col>
                                        </Row>
                                        <Row className="job_discription">
                                            <Col offset={1}>
                                                Its a mini project that used to alert the Manager when the stock goes below critical level in quantity and order the goods. By using PhP and SQL this project was completed.
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="project_name">
                                            <Col xs={11} md={9} sm={8} >
                                                Smart Transport Maintenance System
                                            </Col>
                                            <Col xs={1} md={3} sm={4} className="job_date" >
                                                Completed In 2 Month
                                            </Col>
                                        </Row>
                                        <Row className="job_discription">
                                            <Col offset={1}>
                                                It was a IoT based project specially for vehicles belong to an organisation. By using this we can track the vehicle and the presence of the person in that bus. And an attendance get maintained on the cloud.
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row className="project_name">
                                            <Col xs={11} md={9} sm={8} >
                                                Web application for "3m finance, Erode"
                                            </Col>
                                            <Col xs={1} md={3} sm={4} className="job_date" >
                                                Completed In 2 Month
                                            </Col>
                                        </Row>
                                        <Row className="job_discription">
                                            <Col offset={1}>
                                                It was a dynamic website to maintain details about debt and borrows. Borrowers details like photo copy, drivers license, address are stored in server. It has SQL inject prevention, Session hijacking prevension, Phishing Attack prevention as 3 level of security.
                                            </Col>
                                        </Row>

                                    </li>
                                    <li>
                                        <Row className="project_name">
                                            <Col xs={11} md={9} sm={8} >
                                                Website for "Design Corner India"
                                            </Col>
                                            <Col xs={1} md={3} sm={4} className="job_date" >
                                                Completed In 2 Month
                                            </Col>
                                        </Row>
                                        <Row className="job_discription">
                                            <Col offset={1}>
                                                It is a Commercial WebSite with Admin panel Specifically designed with customer requirement.
                                            </Col>
                                        </Row>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="records_body">
                            <div className="records_heading">Achievements & Awards</div>
                            <div className="records_content">
                                <ul className="interest_list">
                                    <li>Distinction in Typewriting English Junio at Government State Technical Examination in 2016.</li>
                                    <li>First Class in Typewriting English at the Government Technical Examination in Commerce subject held in August 2016.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="records_body">
                            <div className="records_heading">Industrial Exposure</div>
                            <div className="records_content">
                                <ul className="interest_list">
                                    <li>Completed 1 week hands on training "IoT Programming" in National Institue of Skill development at Bangalore.</li>
                                    <li>Completed online course "Career Edge" in TCSion Digital Learning Hub.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="records_body">
                            <div className="records_heading">Activities</div>
                            <div className="records_content">
                                <ul className="interest_list">
                                    <li>Frequently Participating In TechGig Coding Competitions. Scored Full points on "Code Gladiator 2020" on Techgig. </li>
                                    <li>Attended a workshop on "Industrial Based Mobile Controlled Robotics Car" at Coimbator.</li>
                                    <li>Volunteer to help with details gathering for Corona symptoms during first wave of Corona pandamic.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="records_body">
                            <div className="records_heading">Work Sample</div>
                            <div className="records_content">
                                <ul className="interest_list">
                                    <li> <a target="_blank" rel="nofollow noreferrer" href="http://www.designcornerindia.com">www.designcornerindia.com</a></li>
                                </ul>
                            </div>
                        </div>


                    </Col>
                </Row>

                {/* </Container> */}

            </div>
        </div >
        </div >
    );
}

export default home;