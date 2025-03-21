
import { useState } from 'react';
import Hero from '@/components/Hero';
import AnimatedText from '@/components/AnimatedText';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, AlertCircle, ChevronRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success toast
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for any inquiries or support"
        imageSrc="https://images.unsplash.com/photo-1560732488-7b5f5d8021d4?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <AnimatedText text="Get In Touch" />
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our products or services? Need technical support? We're here to help. Contact us using any of the methods below or fill out the form to send us a message.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">Sales & General Inquiries</p>
                    <a href="tel:+14155552671" className="text-primary hover:underline">(415) 555-2671</a>
                    <p className="text-muted-foreground mb-1 mt-3">Technical Support</p>
                    <a href="tel:+14155552672" className="text-primary hover:underline">(415) 555-2672</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">Sales & Quotes</p>
                    <a href="mailto:sales@techpulse.com" className="text-primary hover:underline">sales@techpulse.com</a>
                    <p className="text-muted-foreground mb-1 mt-3">Support</p>
                    <a href="mailto:support@techpulse.com" className="text-primary hover:underline">support@techpulse.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                    <p className="text-sm mt-2"><span className="text-primary font-medium">Note:</span> Technical support is available 24/7 for emergency issues.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Our Store</h3>
                    <p className="text-muted-foreground">
                      123 Tech Avenue<br />
                      Silicon Valley, CA 94043<br />
                      United States
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:underline mt-2"
                    >
                      Get Directions
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Product Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium mb-1">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.preferredContact}
                      onChange={handleChange}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-input text-primary focus:ring-primary/50"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-muted-foreground">
                      I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full button-glow bg-primary text-primary-foreground rounded-lg px-4 py-3 text-base font-medium flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Find Us" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our store to see our products in person and speak directly with our experts.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden h-[400px] shadow-lg border border-border">
            <iframe
              title="Store Location"
              className="w-full h-full"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639117951342!2d-122.08429708439176!3d37.4219998798196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x68a87f37d213a8f4!2sGoogle%20Building%2040%2C%20Mountain%20View%2C%20CA%2094043!5e0!3m2!1sen!2sus!4v1653880433675!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Frequently Asked Questions" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about contacting us and our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "What's the typical response time for inquiries?",
                answer: "We aim to respond to all emails within 24 hours during business days. Phone calls are answered immediately during business hours."
              },
              {
                question: "Do you offer on-site service for businesses?",
                answer: "Yes, we provide on-site IT services for businesses in the Silicon Valley area. Please contact us for availability and rates."
              },
              {
                question: "Can I schedule a consultation before making a purchase?",
                answer: "Absolutely! We offer free consultations to help you find the right computer solution. You can schedule one via phone, email, or using our contact form."
              },
              {
                question: "Do you offer remote technical support?",
                answer: "Yes, we provide remote technical support for software issues, troubleshooting, and guidance. Contact our support team to set up a remote session."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="animate-on-scroll rounded-lg border border-border bg-card overflow-hidden transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-start">
                    <AlertCircle size={20} className="flex-shrink-0 mr-2 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
