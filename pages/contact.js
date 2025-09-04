import HeroBanner from "@/components/common/Banner";
import { MyButton } from "@/components/common/Buttons";
import IconWithBackground from "@/components/common/IconWithBackground";
import { Card, Form } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
//test
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "@/components/common/ContactForm";

const OurLocationCard = () => {
  return (
    <>
      <Card className=" card border rounded w-25 p-4  position-absolute top-50  mx-5 translate-middle-y d-sm-none d-md-block d-xs-none pb-5">
        <div className="d-grid my-4">
          <MyButton
            style={{ backgroundColor: "#59330E" }}
            type="button"
            size="lg"
            className="fw-bold text-white fs-5"
          >
            আমাদের অবস্থান
          </MyButton>
        </div>
        <h5 className="my-2">অবস্থান ঠাকুরগাঁও</h5>
        <div className="mt-2">
          <p>
           ঠিকানা: ছোট সিংগিয়া কলেজ রোড লাহিড়ী বালিয়াডাঙ্গী ঠাকুরগাঁও। 

          </p>
          <p>মোবাইল: +৮৮০১৬১০৩৪৬৫৭৪</p>
          <p>মোবাইল: +৮৮০১৭০৮৫৮৮৫৯৯</p>
          



        </div>
      </Card>
    </>
  );
};
//test


function contact() {
  return (
    <>
      {" "}
      {/* <RouteNavSlider router="Contact Us" /> */}
      <HeroBanner name="/যোগাযোগ" />
      <div className="   container my-5  ">
        <div className="rounded border position-relative">
          <OurLocationCard />
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28652.63047757197!2d88.2948711!3d26.1452727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4e5c6230e95a1%3A0x293311525c5ffcd8!2sLahiri!5e0!3m2!1sen!2sbd!4v1744965695849!5m2!1sen!2sbd"  width="100%"
            height="450px"
            frameBorder="0"
            aria-hidden="false"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28652.63047757197!2d88.2948711!3d26.1452727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4e5c6230e95a1%3A0x293311525c5ffcd8!2sLahiri!5e0!3m2!1sen!2sbd!4v1744965695849!5m2!1sen!2sbd"
            width="100%"
            height="450px"
            frameBorder="0"
            aria-hidden="false"></iframe>
          {/* <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Globe%20Chamber%20(1st%20foor)%20104%20Motijheel%20Commercial%20Area,%20Dhaka-1000,%20Bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450px"
            frameBorder="0"
            aria-hidden="false"
          ></iframe> */}
        </div>

        <div className=" row my-4">
          <div className="col-md-4  cus-color-secondary">
            <Card className="card border rounded  p-5 mb-4 ">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaPhoneAlt size={25} className="" />
                </IconWithBackground>


                <div className="cus-color-secondary">
                  <h5 className="mb-2">মোবাইল</h5>
                  <p className="cus-color-secondary">
                   মোবাইল: +৮৮০১৬১০৩৪৬৫৭৪
                  </p>{" "}
                  {/* <p className="cus-color-secondary">আইপি ফোন: +৮৮০৯৬৭৮১১১৭৭৭</p> */}
                </div>
              </div>
            </Card>
            <Card className="card border rounded  p-5 mb-4">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaEnvelope size={25} className="" />
                </IconWithBackground>

                <div>
                  <h5 className="mb-2">ইমেইল</h5>
                  <p className="cus-color-secondary">madashatakua@heritagebd.com</p>
                  <p className="cus-color-secondary">info@heritagebd.com</p>
                </div>
              </div>
            </Card>
            <Card className="card border rounded  p-5 ">
              <div className="d-flex gap-4 align-items-center">
                <IconWithBackground>
                  <FaMapMarkerAlt size={25} className="" />
                </IconWithBackground>

                <div>
                  <h5 className="mb-2">ঠিকানা</h5>
                  <p className="cus-color-secondary">
                 ছোট সিংগিয়া কলেজ রোড লাহিড়ী বালিয়াডাঙ্গী ঠাকুরগাঁও। 
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* <OurOffices /> */}
    </>
  );
}

export default contact;
