import React from 'react';

import './blog.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



// import { GetApp as DownloadIcon, LinkedIn as LinkedInIcon, Call as MobileIcon, LocationOn as LocationIcon, Mail as MailIcon, MenuBook as MenuBookIcon, School as SchoolIcon, CheckCircleOutlineRounded as MarkIcon, EventRounded as PassoutDate } from '@material-ui/icons';



const blog = () => {


    const blog_content = [

        {
            blog_heading: "Loop through simple array of object in React",
            blog_time: "Asked 6 years, 7 months ago \t\t Active 2 years, 7 months ago            ",
            blog_body: "Based on the basic list component section of the react docs, it seems like I should be able to print the contents of an array, the way I'm doing it inside my <ul></ul> \n https://facebook.github.io/react/docs/lists-and-keys.html#basic-list-component \n Is the problem that I am using an array of objects? The docs are using a simple array. I'd appreciate a push into the right direction.",
            blog_code: "",
            blog_link: "https://stackoverflow.com/questions/45857698/loop-through-simple-array-of-objects-in-react",
        },
        {
            blog_heading: "Generating inline font-size using ReactJs",
            blog_time: "Asked 3 years, 10 months ago \t\t Active 11 months ago",
            blog_body: "The problem is that I get this error when I run my code: \"Module build failed: Error: Parse Error: Line 5: Unexpected token -\" apparently, React doesn't like that font-size has a dash in it. How do I get around this? Is there some way to escape that character for react? Is there some different css property that react likes better that does the same thing? \n\n Thanks!",
            blog_code: "",
            blog_link: "https://stackoverflow.com/questions/26759819/generating-inline-font-size-style-using-reactjs",
        },
        {
            blog_heading: "Generating inline font-size using ReactJs",
            blog_time: "Asked 3 years, 10 months ago \t\t Active 11 months ago",
            blog_body: "The problem is that I get this error when I run my code: \"Module build failed: Error: Parse Error: Line 5: Unexpected token -\" apparently, React doesn't like that font-size has a dash in it. How do I get around this? Is there some way to escape that character for react? Is there some different css property that react likes better that does the same thing? \n\n Thanks!",
            blog_code: "",
            blog_link: "https://stackoverflow.com/questions/26759819/generating-inline-font-size-style-using-reactjs",
        },
        {
            blog_heading: "Generating inline font-size using ReactJs",
            blog_time: "Asked 3 years, 10 months ago \t\t Active 11 months ago",
            blog_body: "The problem is that I get this error when I run my code: \"Module build failed: Error: Parse Error: Line 5: Unexpected token -\" apparently, React doesn't like that font-size has a dash in it. How do I get around this? Is there some way to escape that character for react? Is there some different css property that react likes better that does the same thing? \n\n Thanks!",
            blog_code: "",
            blog_link: "https://stackoverflow.com/questions/26759819/generating-inline-font-size-style-using-reactjs",
        },
        {
            blog_heading: "Generating inline font-size using ReactJs",
            blog_time: "Asked 3 years, 10 months ago \t\t Active 11 months ago",
            blog_body: "The problem is that I get this error when I run my code: \"Module build failed: Error: Parse Error: Line 5: Unexpected token -\" apparently, React doesn't like that font-size has a dash in it. How do I get around this? Is there some way to escape that character for react? Is there some different css property that react likes better that does the same thing? \n\n Thanks!",
            blog_code: "",
            blog_link: "https://stackoverflow.com/questions/26759819/generating-inline-font-size-style-using-reactjs",
        }


    ];

    const redirect = () => {
        alert("New form Request Triggered");
    }

    const note_alert = () => {
        alert("The Below Details are Replica of Content From Stack OverFlow");
    }

    const listItems = blog_content.map((blog_details) =>
        <Card className="card_custom text-center">
            <Card.Header className="text-left">
                <Card.Title><a href={blog_details.blog_link} > {blog_details.blog_heading}</a> </Card.Title>
                {blog_details.blog_time}
            </Card.Header>
            <Card.Body className="text-left">
                <Card.Text>
                    {blog_details.blog_body}
                </Card.Text>
            </Card.Body>
        </Card>
    );


    return (
        <div onLoad={note_alert} className="blog_body" >


            <Row>
                {/* <Col xd={1} md={1} sm={1} /> */}
                <Col xd={9} md={9} sm={9} style={{ margin: '-10px 4%', fontSize: '20px', fontWeight: '700' }} >Blog</Col>
                <Col xd={2} md={2} sm={2} className="float-right">
                    <Button onClick={redirect}>Add New</Button>
                    {/* <Route className="btn" path="/blog/new" component={NewBlog}/> */}
                </Col>
            </Row>

            {listItems}


            {/* <Card className="card_custom text-center">
                <Card.Header className="text-left">
                    <Card.Title>Special title treatment</Card.Title>
                    Generation inline font-size style using ReactJs
                </Card.Header>

                <Card.Body className="text-left">
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card> */}



            {/* <div className="box">
                <div className="box-heading">
                    blog
                </div>
                <div className="box-content">
                    Body of blog
                </div>
            </div> */}

            <Card className="card_custom text-center">
                <CKEditor
                    editor={ClassicEditor}
                    data="<p> Hello ! Sample Text </p>"
                    onReady={editor => {
                        console.log('Editor is ready to use', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blure.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focuse.', editor);
                    }}

                />

                <br />
                <Row>
                    <Col xd={2} md={2} sm={2}>
                        <Button>Add Blog</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default blog;