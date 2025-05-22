'use client';

import { useEffect, useRef, useState } from 'react';
import { Mic, MicOff, Volume2, Bot, X } from 'lucide-react';
const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
type SpeechRecognition = typeof SpeechRecognition;
type SpeechRecognitionEvent = Event & {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
};
type BotState = 'idle' | 'listening' | 'processing' | 'speaking';

export default function VoiceBot() {
  const [botState, setBotState] = useState<BotState>('idle');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setBotState('listening');
    };

    recognition.onresult = async (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setMessages(prev => [...prev, { role: 'user', content: transcript }]);
      setBotState('processing');

      try {
        const res = await fetch('/api/voicebot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: transcript }),
        });

        const data = await res.json();
        const reply = data.message;

        setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
        setBotState('speaking');

        const utterance = new SpeechSynthesisUtterance(reply);
        utterance.onend = () => setBotState('idle');
        synthRef.current.speak(utterance);
      } catch (error) {
        console.error(error);
        setBotState('idle');
      }
    };

    recognition.onerror = (event: Event) => {
      console.error('Speech recognition error', event);
      setBotState('idle');
    };

    recognition.onend = () => {
      if (botState === 'listening') {
        setBotState('idle');
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => recognitionRef.current?.start();
  const stopListening = () => {
    recognitionRef.current?.stop();
    setBotState('idle');
  };

  const toggleChat = () => {
    setChatOpen(prev => !prev);
    setBotState('idle');
  };

  return (
    <>
      {/* Floating Bot Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {chatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {/* Chat Popup */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          <div className="p-4 text-lg font-semibold text-blue-700 flex items-center gap-2">
            <Bot className="w-5 h-5" />
            Ask Me Anything
          </div>

          <div className="flex-1 overflow-y-auto max-h-96 px-4 py-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-blue-100 text-blue-800 self-end ml-auto'
                    : 'bg-gray-100 text-gray-800 self-start mr-auto'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Voice Controls */}
          <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={botState === 'listening' ? stopListening : startListening}
                disabled={botState === 'processing' || botState === 'speaking'}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 ${
                  botState === 'listening'
                    ? 'bg-red-500 hover:bg-red-600 focus:ring-red-300 animate-pulse'
                    : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {botState === 'listening' ? (
                  <MicOff className="w-5 h-5 text-white" />
                ) : (
                  <Mic className="w-5 h-5 text-white" />
                )}
              </button>

              {botState === 'speaking' && (
                <button
                  onClick={() => {
                    synthRef.current.cancel();
                    setBotState('idle');
                  }}
                  className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  <Volume2 className="w-5 h-5 text-white" />
                </button>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Click the mic to ask your question by voice
            </p>
          </div>
        </div>
      )}
    </>
  );
}
