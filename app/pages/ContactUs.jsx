// components/ContactUs.jsx
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

export default function ContactUs() {
  const [form] = Form.useForm();

  const onFinish = async(values) => {
    try {
     
      const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
      });

      if (response.ok) {
        
        console.log("Successfully submitted message")// fetching all the data after adding a row and setting it to setDetails
      } else {
          const data = await response.json();
        console.log("Message Error:",data.message);
      }
  } catch (error) {
      console.log(error.message);
  }
  };

  return (
    <div className="bg-white h-full w-full absolute z-0">
      <div className=" mx-auto py-12 px-4 lg:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white h-full w-full p-8 shadow-md rounded-lg">
          
          {/* Contact Details Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">Contact Us</h2>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet</p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Address:</h3>
              <p>11 West Town</p>
              <p>PBo 12345, United States</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Phone:</h3>
              <p>+1 1234 56 789</p>
              <p>+1 1234 56 780</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Email:</h3>
              <p>info@example.com</p>
              <p>email@example.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Your Name" className="px-4 py-2 border rounded-md" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'The input is not a valid email!' },
                ]}
              >
                <Input placeholder="Your Email" className="px-4 py-2 border rounded-md" />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
              >
                <Input placeholder="Subject" className="px-4 py-2 border rounded-md" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <TextArea rows={4} placeholder="Write Your Message" className="px-4 py-2 border rounded-md" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
