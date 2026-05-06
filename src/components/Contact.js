import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  const [ref, shown] = useReveal();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus('');

    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormStatus('error');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      const data = await res.json();
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
    } catch {
      setFormStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-ink text-paper-50 py-20 md:py-32 lg:py-40"
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
        <div ref={ref} className={`reveal ${shown ? 'in' : ''}`}>
          <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paper-400 mb-6">
            Contact
          </span>

          <h2
            className="font-serif font-light leading-[1.05] tracking-[-0.025em] text-paper-50 mb-8"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontVariationSettings: '"opsz" 96, "SOFT" 50',
            }}
          >
            Let's work together
          </h2>

          <p className="text-lg text-paper-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Available for consulting, contract work, and full-time roles in generative AI and production infrastructure.
          </p>

          {!showForm ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-paper-50 text-ink text-base font-medium transition-colors duration-300 ease-editorial hover:bg-copper-400 hover:text-ink"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </button>
              <a
                href="https://www.linkedin.com/in/joel-machado-0a2917243/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-transparent text-paper-50 text-base font-medium border border-paper-700 transition-colors duration-300 ease-editorial hover:border-copper-400 hover:text-copper-400"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-paper-900 border border-paper-700 rounded-sm text-paper-50 placeholder-paper-500 focus:outline-none focus:border-copper-400 transition-colors duration-200 ease-editorial"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-paper-900 border border-paper-700 rounded-sm text-paper-50 placeholder-paper-500 focus:outline-none focus:border-copper-400 transition-colors duration-200 ease-editorial"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="w-full px-6 py-4 bg-paper-900 border border-paper-700 rounded-sm text-paper-50 placeholder-paper-500 focus:outline-none focus:border-copper-400 transition-colors duration-200 ease-editorial resize-none"
                />

                {formStatus === 'success' && (
                  <div className="p-4 border border-copper-400 text-copper-300 rounded-sm text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 border border-paper-400 text-paper-200 rounded-sm text-center">
                    Failed to send message. Please try again or email directly at joelmachado.work@gmail.com
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-12 py-4 rounded-full bg-paper-50 text-ink font-medium transition-colors duration-300 ease-editorial hover:bg-copper-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-12 py-4 rounded-full bg-transparent text-paper-50 font-medium border border-paper-700 transition-colors duration-300 ease-editorial hover:border-paper-400"
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
