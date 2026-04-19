import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { personalInfo } from '../data/portfolioData';
import { SectionHeader } from './About';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contacts').insert([
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    ]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email directly.');
    } else {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Contact" title="Let's work together" />

        <div className="mt-16 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-teal-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-gray-200 text-sm font-medium hover:text-teal-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-200 text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20">
              <p className="text-teal-300 text-xs font-medium mb-1">Open to opportunities</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Available for freelance projects, full-time roles, and consulting engagements in web development, SEO, and digital marketing.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gray-950 border border-gray-800 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <FormField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Project inquiry, collaboration..."
                value={form.subject}
                onChange={handleChange}
                required
              />
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1.5">
                  Message <span className="text-teal-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:bg-teal-500/50 text-white font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-teal-500/25 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-gray-400 text-xs font-medium mb-1.5">
        {label} {required && <span className="text-teal-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all"
      />
    </div>
  );
}
