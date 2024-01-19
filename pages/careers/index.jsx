import { Fade } from "react-reveal";
import PageLayout from "../../uiComponents/PageLayout/PageLayout";
import Button from "../../uiComponents/button/Button";
import JobCard from "../../uiComponents/JobCard/JobCard";

const index = () => {
  return (
    <PageLayout title="About FoodChoo">
      <div className="layout i-am-careers">
        <Fade top>
          <h1 className="theme-head-lg md-bold text-center">
            We have all the people we need at the moment, but we’re expanding so
            please check back here often. We could ask you to go on our mailing
            list, but eh - that’s just another email to add to your overloaded
            inbox. We LOVE people that can work from home.
          </h1>
          {/* <div className="container">
            <div className="download-app container flex-column-center spacingY mb-5">
              <h1 className="theme-title theme-title-red theme-title-max">
                Join Our Awesom team!
              </h1>
              <p>
                We are always looking for talent to join our existing team Below
                is a list of positions we are recruiting for
              </p>
            </div>
            <JobCard />
            <JobCard />
            <JobCard />
          </div> */}
        </Fade>
      </div>
    </PageLayout>
  );
};

export default index;
