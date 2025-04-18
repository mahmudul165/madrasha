
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


const ContactForm = () => {
    const { apiUrl } = useAuth();
    // console.log('test',`${apiUrl.apiRootUrl}`)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      let errors = {};
      if (!formData.name) {
        errors.name = "Name is required";
      }
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid email address";
      }
      if (!formData.message) {
        errors.message = "Message is required";
      }
      return errors;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const errors = validate();
      if (Object.keys(errors).length === 0) {
        axios
          .post(`${apiUrl.apiRootUrl}/api/v1/contact`, formData)
          .then((response) => {
            console.log(response);
            toast.success("Form submitted successfully!");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error);
          });
      } else {
        setErrors(errors);
      }
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    return (
      <>
        <Form id="contact-form" name="contact-form px-3" onSubmit={handleSubmit}>
          <h2 className="mb-2 fs-5 fw-bold cus-color-secondary">যোগাযোগ</h2>
          <ToastContainer position="top-center" />
          <Form.Group controlId="name" className="mb-3 ">
            <Form.Control
              type="text"
              name="name"
              placeholder="আপনার নাম"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group controlId="email" className="mb-3">
            <Form.Control
              type="text"
              name="email"
              placeholder="আপনার ইমেইল"
              যোগাযোগ
  
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group controlId="phone" className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              placeholder="আপনার ফোন"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group controlId="message" className="mb-3">
            <Form.Control
              className="p-4"
              as="textarea"
              rows={10}
              name="message"
              placeholder="আপনার বার্তা"
  
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
  
          {/* <MyButton
            type="submit"
            size="lg"
            className="text-white px-5 cus-bg-primary"
          >
            SEND
          </MyButton> */}
          <button
            type="submit"
            size="lg"
            className=" text-white px-5 cus-bg-primary py-2 btn "
          // onClick={handleClick}
          >
            পাঠান
          </button>
        </Form>
      </>
    );
  };

  export default ContactForm;