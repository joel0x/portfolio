import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error('Web3Forms access key is not configured');
      setFormStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowForm(false);
          setFormStatus('');
        }, 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent" />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6 block">Contact</span>

          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Let's work together
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Available for consulting, contract work, and full-time roles in generative AI and production infrastructure.
          </p>

          {!showForm ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="group px-12 py-6 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all cursor-hover-target magnetic-btn flex items-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </button>
              <a
                href="https://www.linkedin.com/in/joel-machado-0a2917243/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 glass text-white font-semibold rounded-full hover:glass-strong transition-all cursor-hover-target magnetic-btn flex items-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all resize-none"
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-400 text-center">
                    Failed to send message. Please try again or email directly at joelmachado.work@gmail.com
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-12 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-12 py-4 glass text-white font-semibold rounded-full hover:glass-strong transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
