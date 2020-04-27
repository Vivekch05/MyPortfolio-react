import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
export default class AboutMe extends Component {
    render() {
        return (
            <Grid>
                <Cell className="aboutme-grid" col={12}>
                    <img
                        src="https://lh3.googleusercontent.com/EYo5xN-ALewbKQMFAzNwx2AQpURzWlU4Ciw3UTHZhbiaceva7plNGcWTVOTpmuBz_USluJ6dstJhoAHyG1-A1YnEq5hWl7-k6fZINWbRgMD3zPefnRMNRyUOU4DUCqqu78PsqZ3xLqgdjgK87SlmmSAiEAzYrDVAXMuHWPC6ui6Rwl3pRZKk923pzp3O7nmID1X-se6Gj6P2QE5bxQKH2PJe3O1AcdU1ClHWIK7E6yXqV4G3Cbz-iUB2YBePszcTNyn8wSRlQtz8eeFBmF1Uom_4ZSyxhSNWBbpNJW97eGnA8rsCvgiiRMSlu4YzKGr7ug2ZgxvZ3Syj7cjH3wknZWi5Sf2Cn50a9xiL8hU5mAiesNHB7MsCwxEMG-npp6HvUD2qkQ1YogjuXh0P0VzXt5hThsRp0xVDf_xVpQd7k7naqJijPRbqIBmjrn4wwPxK15NZyvnDXyZiuoF9Nt_Qv_kVH_FZ2lWYtDidHzbTf5Y9T09BsZx8GBCsq4Dxgmd_OzIpnFDbutxKtW7nR8O0T-eRShBKVjZBI9NVtpkL0SZPg8FWGYCFRCF8nD8ftjXXaoVAgfvkMRaFsnfQVWA1YpOKur1rFyP4Ww3f8y7T-mpuGQuj3QCFfUnyKabO6_ZRixoCqRZOsT8IFFjHZY8SBynrmxi77funrY76oQ8cG9uN4OGRflkcVlF9h30eyt0=w707-h883-no"
                        alt="avatar"
                        style={{ height: "300px", width: "300px", borderRadius: '100%',border:'1px solid black' }}
                    />
                    <h2>Vivek Chaurasia</h2>
                    <p>I am a software engineer of GlobalLogic.It is a Digital Product Engineering Services company.
                    I completed my btech from 'Jaipur engineering college and research centre'. I completed my 12th standard from
                    'R.k.d College patna'.
                    I completed my scholling and 10th standard from my native place 'R.s.high school parasauni farm'.
                    I love learning new Things and Tools every day.
                    I loves programming and problem solving.
                    I am aValuable Team Player with Personable and Dedicated Nature.
                    My hobbies are traveling and cooking.
                    I am a fitnessfreak also i love exercise daily.

                    </p>
                </Cell>
            </Grid>





        )
    }
}