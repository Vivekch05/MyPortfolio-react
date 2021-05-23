import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                        <img
                        src="https://lh3.googleusercontent.com/FXMh1bqdPLKBwwojOrjGV_VBSgSRVdfBW2_bxelObtnpWktAgH4Rf0xts6kaXhaK2LTsgPcXSeUuhTEA9bBTKurWiAsm0ZXd_gLnZeaobw1CXYIHafhYzLWHiXWxl3Ja54pcuj-uHKmUVYqAlYYlPsT50sgUaMm81Inzyjbmov3d6ZZ519BiHY7QPvhmIVCBspC-yGyFwJia8UyztdgS0NEOLCZhFjEj_jor-2zPq-k3aihkX4kcwIXLzqTZf9dROiIVXTbQO-VEjpl8cVRJDHlXeO3L985KUFn_M7G77FwEBFaqsj9jVA0NCDkRmv5uiPnIj0cao2LUVAQtZ76tQLg8EPr23UIDSA45aAjcH_DGv1BI8kPOWmjed-zBsHxnNvUNaHhb9P_BY5rdKqUILrCM6C1826M5AhLnXOXavZ5pjX14hlOX_GpUPd4LlsOXTITwzHUHFEMRfYxfkmuhRlzbEArWOvZaZfBGSlNBYjU7xrHHC5d1MufsQqrdGZtG-pdi8Z50tw47jk0FVH9JNqUi2KCxS5d7WsZKUB-I78prE0P8TJ5uEGiJ37QQ0P7NEIQlShSUI3mCzWe4fAtqSyW-VFhej35dFOPcVRkhnSFnlaum511UwbE0MZ1ubOYvan3TlU9TbmZHi7eGj5zUiNWceDYCLcP3xua3sxSsXY9VKAj1dhB7upWfb_IgZ28=w707-h883-no"
                        alt="avatar"
                        style={{ height: "300px",width:"300px",borderRadius:'100%',border:'1px solid white' }}
                    />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Vivek Chaurasia</h2>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p align="justify"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply 
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>J-120,Sector-41,Noida-201306,India</p>
                        <h5>Phone</h5>
                        <p>+91-7062424346</p>
                        <h5>Email</h5>
                        <p>vivek.kch05@gmail.com</p>
                        <h5>Skype</h5>
                        <p>MySkype id</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            degree="B.Tech-ECE"
                            schoolName="JECRC-Jaipur"
                            marks="71.06%"
                            startYear={"2014-"}
                            endYear={2018}
                        />
                        <Education
                            degree="Standard 10th"
                            schoolName="R.S.H School-Bagaha"
                            marks="71.4%"
                            startYear={"2014"}
                            endYear={""}
                        />
                        <Education
                            degree="B.Tech-ECE"
                            schoolName="JECRC-Jaipur"
                            marks="73.2%"
                            startYear={"2011"}
                            endYear={" "}
                        />
                        <hr style={{ borderTop: '3px solid grey' }} />

                        <h2>Work Experience</h2>

                        <Experience
                            companyName="GlobalLogic"
                            designation="Software Engineer"
                            jobLocation="Noida, India"
                            startYear={"December 2018 –"}
                            endYear={"Present"}
                            descreption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy 
                            text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"


                        />
                        <hr style={{ borderTop: '3px solid grey' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Java"
                            progress={80}
                        />
                        <Skills
                            skill="Data Structure"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills
                            skill="Html/Css"
                            progress={80}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

// import React,{ Component } from "react";
// import { Document, Page,pdfjs } from "react-pdf";
// import samplePDF from '../files/resume.pdf'


// export default class Resume extends Component {
//     constructor(props){
//         super(props);
//         pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//         this.state={
//             numPages:null,
//         }
//     }

//    onDocumentLoadSuccess = ( numPages1 ) => {
//        console.log(numPages1,'ksjfhsjd')
//     this.setState({numPages:numPages1});
//   }

//   // decodeBase64(str) {
//   //   if (str !== null && str !== undefined && str.length) {
//   //     try {
//   //       atob(str);
//   //       return `data:application/pdf;base64,${str}`;
//   //     } catch (e) {
//   //       return str;
//   //     }
//   //   }
//   //   return '';
//   // }

// render(){
//     console.log(Array.apply(null, Array(this.state.numPages)),this.state.numPages,'dsgfj');
// // const {pdf} = this.props
// // let fileBlob = this.decodeBase64(samplePDF);
// // console.log(`data:application/pdf;base64,${fileBlob}`,'dgldfgdo')
//   return (
            
//             <div className="all-page-container" >
//     <Document
//       file={samplePDF}
//       // file={`data:application/pdf;base64,${fileBlob}`}
//       options={{ workerSrc: "/pdf.worker.js" }}
//       onLoadSuccess={()=>this.onDocumentLoadSuccess()}
      
//     >

//         {[1,2,3].map(page => (
//             <Page pageNumber={page} 
//              />
//         ))}

//     </Document>
//     </div>
//   );
//       }
// }
