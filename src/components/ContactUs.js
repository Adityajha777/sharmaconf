import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({ name: '', contact: '', message: '' });  // Reset form
            }, (error) => {
                alert('Failed to send message, please try again.');
            });
    };

    // Array of images
 

    return (
        <div className="contact-us">
            {/* Contact Us Form */}
            <section className="contact-form">
                <h2>Contact Us</h2>
                <form onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Your Name" 
                        required 
                    />
                    <label>Phone Number:</label>
                    <input 
                        type="text" 
                        name="contact" 
                        value={formData.contact} 
                        onChange={handleInputChange} 
                        placeholder="Your Contact Number" 
                        required 
                    />
                    <label>Message/Query:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        placeholder="Your message" 
                        required 
                    />
                    <button type="submit">Send Message</button>
                </form>
            </section>

            {/* About Us Section */}
            <section className="about-us">
                <h2>About Us</h2>
                <p>Welcome to Sharma Confectionery, your one-stop shop for delicious treats and desserts! We have been serving the Dera Baba Nanak community with fresh and high-quality sweets for over a decade. Our passion for confectionery is reflected in every product we make, ensuring that each item brings a smile to your face.</p>
                <p>At Sharma Confectionery, we believe in using only the finest ingredients to create mouth-watering sweets that are perfect for any occasion. Whether you're celebrating a special event or just looking for a sweet snack, we've got something for everyone. Thank you for choosing us!</p>
            </section>
        </div>
    );
};

export default ContactUs;