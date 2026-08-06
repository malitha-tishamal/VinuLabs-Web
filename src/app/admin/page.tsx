'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

interface Message {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [activeTab, setActiveTab] = useState<'messages' | 'services' | 'settings'>('messages');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch messages from API
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (err) {
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages);
        if (selectedMessage?.id === id) setSelectedMessage(null);
        toast.success('Message deleted successfully');
      }
    } catch (err) {
      toast.error('Failed to delete message');
    }
  };

  const filteredMessages = messages.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadCount = messages.filter(m => m.status === 'Unread').length;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                VinuLabs CMS Admin Dashboard
              </h1>
            </div>
            <p className="text-slate-400 text-sm mt-1">
              Full A-Z platform management, incoming client leads, tech stack & settings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
            >
              ← Back to Site
            </Link>
            <button
              onClick={fetchMessages}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all"
            >
              ↻ Refresh Data
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Total Messages</span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-bold text-white font-mono">{messages.length}</span>
              {unreadCount > 0 && (
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold">
                  {unreadCount} New
                </span>
              )}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Active Services</span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-bold text-cyan-400 font-mono">6 Modules</span>
              <span className="text-xs text-emerald-400">100% Operational</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Tech Stack Items</span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-bold text-purple-400 font-mono">18 Verified</span>
              <span className="text-xs text-slate-400">5 Categories</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">System Health</span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-bold text-emerald-400 font-mono">99.98%</span>
              <span className="text-xs text-emerald-400">Optimal</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-3 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'messages'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900/40 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            📬 Incoming Messages ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'services'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900/40 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🛠️ CMS Content Manager
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'settings'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900/40 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            ⚙️ Platform Settings
          </button>
        </div>

        {/* Tab 1: Messages */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <input
                type="text"
                placeholder="Search messages by name, email or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-96 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <span className="text-xs text-slate-400">
                Showing {filteredMessages.length} of {messages.length} messages
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Message List */}
              <div className={`${selectedMessage ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-3`}>
                {filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedMessage(msg)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      selectedMessage?.id === msg.id
                        ? 'bg-cyan-950/40 border-cyan-500/60 shadow-lg'
                        : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">{msg.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {msg.company}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">{msg.date}</span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                      <span>Service: <strong className="text-cyan-400">{msg.service}</strong></span>
                      <span className="text-slate-400">{msg.email}</span>
                    </div>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 italic">
                      "{msg.message}"
                    </p>
                  </div>
                ))}

                {filteredMessages.length === 0 && (
                  <div className="p-12 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
                    No messages found.
                  </div>
                )}
              </div>

              {/* Message Detail View */}
              {selectedMessage && (
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 sticky top-28">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="text-lg font-bold text-white">Message Details</h3>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      ✕ Close
                    </button>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-slate-500 block uppercase font-mono">From</span>
                      <span className="text-sm font-bold text-white">{selectedMessage.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase font-mono">Email / Phone</span>
                      <span className="text-cyan-400 font-mono">{selectedMessage.email}</span> · <span className="text-slate-300">{selectedMessage.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase font-mono">Company</span>
                      <span className="text-slate-200">{selectedMessage.company}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase font-mono">Requested Service</span>
                      <span className="text-purple-400 font-semibold">{selectedMessage.service}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-500 block uppercase font-mono mb-2">Full Message</span>
                      <p className="text-slate-200 text-sm whitespace-pre-wrap leading-relaxed">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white transition-colors"
                    >
                      ✉ Send Email Reply
                    </a>
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 text-xs font-semibold border border-rose-500/30 transition-colors"
                    >
                      🗑 Delete Lead
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: CMS Content Manager */}
        {activeTab === 'services' && (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white">VinuLabs CMS Content Management</h2>
            <p className="text-xs text-slate-400">
              Manage enterprise service offerings, tech stack classifications, case studies, and team profiles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-cyan-400">⚡ Enterprise Services</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2 rounded bg-slate-800/60 flex justify-between">
                    <span>1. AI Strategy & Autonomous Systems</span>
                    <span className="text-emerald-400">Active</span>
                  </li>
                  <li className="p-2 rounded bg-slate-800/60 flex justify-between">
                    <span>2. Enterprise Architecture & Cloud Migration</span>
                    <span className="text-emerald-400">Active</span>
                  </li>
                  <li className="p-2 rounded bg-slate-800/60 flex justify-between">
                    <span>3. IoT & Telemetry Platform Development</span>
                    <span className="text-emerald-400">Active</span>
                  </li>
                  <li className="p-2 rounded bg-slate-800/60 flex justify-between">
                    <span>4. Custom Full-Stack Web & Mobile Apps</span>
                    <span className="text-emerald-400">Active</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-purple-400">🚀 Technology Stack Modules</h3>
                <p className="text-xs text-slate-400">
                  18 verified tech items currently published in the interactive Tech Stack showcase.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'OpenAI GPT-4o'].map((item, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Settings */}
        {activeTab === 'settings' && (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white">Platform Settings & Localization</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="VinuLabs"
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Primary Support Email</label>
                  <input
                    type="email"
                    defaultValue="info@vinulabs.com"
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Default Language</label>
                  <select className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white">
                    <option value="en">English (EN)</option>
                    <option value="si">Sinhala (SI)</option>
                    <option value="ta">Tamil (TA)</option>
                    <option value="ja">Japanese (JP)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Default Theme Mode</label>
                  <select className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white">
                    <option value="dark">Dark Theme (Default)</option>
                    <option value="light">Light Theme</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => toast.success('Settings updated successfully')}
                className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white transition-colors"
              >
                Save Settings
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
