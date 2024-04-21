import { Input } from "antd";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function Footer() {
  return (
    <div className="bg-[#172A7E] padd-div">
      <div  className="container grid grid-cols-2 md:grid-cols-6">
        <div>
          <div className="flex justify-center items-center text-white">
            <div>
              <h5>UK</h5>
              <p>London</p>
              <p>Birmingham</p>
              <p>Glasgow</p>
              <p>Liverpool</p>
              <p>Edinburgh</p>
              <p>Manchester</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center text-white">
            <div>
              <h5>Australia</h5>
              <p>Sydney</p>
              <p>Melbourne</p>
              <p>Brisbane</p>
              <p>Perth</p>
              <p>Adelaide</p>
              <p>Canberra</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center text-white">
            <div>
              <h5>USA</h5>
              <p>New York</p>
              <p>Los Angeles</p>
              <p>Atlanta</p>
              <p>Raleigh</p>
              <p>New Orleans</p>
              <p>Riverside</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center text-white">
            <div>
              <h5>Casita</h5>
              <p>Become a Partner</p>
              <p>Sitemap</p>
              <p>Blog</p>
              <p>News</p>
              <p>Testimonials</p>
              <p>Why Casita?</p>
              <p>Accommodation</p>
              <p>How it Works</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div >
          <div className="flex justify-center items-center text-white">
            <div>
              <h5>Useful Links</h5>
              <p>About Us</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>FAQs</p>
              <p>Careers</p>
              <p>Arrival Services</p>
              <p>Refer a Friend</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center text-white">
            <div>
              <h5>Follow us on</h5>
              <div className="text-[1.5rem] gap-1 md:gap-2 flex mt-4">
                <FacebookOutlined />
                <InstagramOutlined />
                <TwitterOutlined />
                <LinkedinFilled />
                <YoutubeFilled />
              </div>
              <h5 className="mt-4 mb-4">Sign up to our newsletter</h5>
              <Search
                placeholder="your Mail"
                allowClear
                enterButton="Subscribe"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
