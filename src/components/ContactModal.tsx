import React, { useState } from 'react';
import { X, Send, LifeBuoy, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../data/helpData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student',
    module: 'student',
    subject: '',
    message: '',
    urgency: 'medium'
  });

  const [submittedTicketId, setSubmittedTicketId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const ticketId = `OD-TICK-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicketId(ticketId);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedTicketId(null);
    setFormData({
      name: '',
      email: '',
      role: 'student',
      module: 'student',
      subject: '',
      message: '',
      urgency: 'medium'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-100 text-orange-600 border border-orange-200">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">Submit Okie Dokie Ticket</h3>
              <p className="text-xs text-slate-500">Direct assistance from Okie Dokie technical desk</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 max-h-[75vh] custom-scrollbar">
          {submittedTicketId ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-slate-900">Support Ticket Submitted!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Your issue has been logged with Okie Dokie Support. Our technical team will reach out to your registered email.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 max-w-xs mx-auto">
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Ticket Reference Number</span>
                <span className="text-sm font-mono font-bold text-orange-600">{submittedTicketId}</span>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs shadow-md shadow-orange-600/20 transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Role & Module Selectors */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Your Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl px-3 py-2 text-slate-800 outline-none"
                  >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty / Staff</option>
                    <option value="parent">Parent</option>
                    <option value="admin">System Admin</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Target Module</label>
                  <select
                    value={formData.module}
                    onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl px-3 py-2 text-slate-800 outline-none"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@campus.edu"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Subject / Issue Summary</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Outpass QR code error on main gate turnstile"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 outline-none"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Detailed Description</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe what happened, error codes, roll number, or screenshots..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl p-3 text-slate-800 placeholder-slate-400 outline-none resize-none"
                ></textarea>
              </div>

              {/* Priority */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Priority Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['low', 'medium', 'urgent'] as const).map((urgency) => (
                    <button
                      key={urgency}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency })}
                      className={`py-2 rounded-xl text-xs font-semibold capitalize border transition-all ${
                        formData.urgency === urgency
                          ? urgency === 'urgent'
                            ? 'bg-rose-600 text-white border-rose-600'
                            : 'bg-orange-600 text-white border-orange-600'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {urgency}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-600/20 transition-all mt-4"
              >
                {isSubmitting ? (
                  <span>Submitting Ticket...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Support Ticket</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
