import React from 'react';
import { ArrowLeft, Database, Moon, Users, BarChart2, Volume2, Zap, Smartphone, Shield, Server, Layers, Globe, Radio } from 'lucide-react';

interface RecommendationsProps {
  onBack: () => void;
}

type Category = 'Frontend' | 'Backend';

interface Recommendation {
  icon: any;
  title: string;
  description: string;
  difficulty: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  category: Category;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ onBack }) => {
  const recommendations: Recommendation[] = [
    // Backend
    {
      icon: Database,
      title: "Supabase / Postgres Integration",
      description: "Replace browser storage with a real Postgres database to persist user accounts, captured collections, and sync data across devices.",
      difficulty: "High",
      impact: "High",
      category: "Backend"
    },
    {
      icon: Shield,
      title: "JWT Authentication Strategy",
      description: "Implement a secure login system using JWTs stored in HttpOnly cookies, with refresh token rotation for long-lived sessions.",
      difficulty: "Medium",
      impact: "High",
      category: "Backend"
    },
    {
      icon: Server,
      title: "RESTful Proxy / Cache Layer",
      description: "Build a middleware server (Node/Express) to cache PokeAPI responses and serve aggregated data to the frontend, reducing external calls.",
      difficulty: "Medium",
      impact: "High",
      category: "Backend"
    },
    {
      icon: Radio,
      title: "WebHooks for Events",
      description: "Set up WebHooks to trigger external actions (like email notifications or discord alerts) when a rare Pokemon is captured.",
      difficulty: "Medium",
      impact: "Low",
      category: "Backend"
    },

    // Frontend
    {
      icon: Users,
      title: "Team Builder UI",
      description: "Drag-and-drop interface to build competitive teams of 6, complete with move validation and visual type coverage analysis.",
      difficulty: "Medium",
      impact: "High",
      category: "Frontend"
    },
    {
      icon: Moon,
      title: "System-wide Dark Mode",
      description: "Implement a Tailwind-based theme provider that allows manual toggling between light and dark themes.",
      difficulty: "Low",
      impact: "Medium",
      category: "Frontend"
    },
    {
      icon: Zap,
      title: "Virtual List Rendering",
      description: "Use 'react-window' to efficiently render the complete list of 1000+ Pokemon without performance degradation.",
      difficulty: "Medium",
      impact: "High",
      category: "Frontend"
    },
    {
      icon: BarChart2,
      title: "Stat Comparison Charts",
      description: "Interactive radar charts to compare base stats between two selected Pokemon side-by-side.",
      difficulty: "Medium",
      impact: "Medium",
      category: "Frontend"
    },
    {
      icon: Smartphone,
      title: "Mobile Gestures",
      description: "Add swipe-to-capture or pull-to-refresh interactions for a native app feel on mobile web.",
      difficulty: "Medium",
      impact: "Medium",
      category: "Frontend"
    },
    {
      icon: Layers,
      title: "Component System",
      description: "Extract common UI elements (Cards, Buttons, Inputs) into a reusable design system.",
      difficulty: "Medium",
      impact: "Low",
      category: "Frontend"
    },
    {
      icon: Globe,
      title: "Social Share Cards",
      description: "Generate dynamic images of your team or collection using HTML5 Canvas for sharing on social platforms.",
      difficulty: "Medium",
      impact: "Low",
      category: "Frontend"
    },
    {
      icon: Volume2,
      title: "Audio Feedback",
      description: "Add sound effects for user interactions and retro 8-bit cries for specific Pokemon.",
      difficulty: "Low",
      impact: "Low",
      category: "Frontend"
    }
  ];

  const categories: Category[] = ['Frontend', 'Backend'];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Project Roadmap</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="p-8 border-b border-slate-100 bg-indigo-50/50">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Technical Recommendations</h2>
            <p className="text-slate-600 max-w-2xl">
              Focusing strictly on Frontend experiences and Backend integrations (RESTful API) to scale the application.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className={`h-8 w-1 rounded-full ${
                  category === 'Backend' ? 'bg-blue-500' : 'bg-pink-500'
                }`}></span>
                <h3 className="text-xl font-bold text-slate-800">{category} Development</h3>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="divide-y divide-slate-100">
                  {recommendations
                    .filter(r => r.category === category)
                    .map((rec, index) => (
                      <div key={index} className="p-5 hover:bg-slate-50 transition-colors group">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform ${
                            category === 'Backend' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
                          }`}>
                            <rec.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-slate-800 text-sm">{rec.title}</h4>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-3">{rec.description}</p>
                            <div className="flex gap-2">
                              <span className={`text-[10px] uppercase tracking-wide font-bold px-2 py-0.5 rounded-full ${
                                rec.difficulty === 'High' ? 'bg-red-50 text-red-600 border border-red-100' :
                                rec.difficulty === 'Medium' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                                'bg-green-50 text-green-600 border border-green-100'
                              }`}>
                                Diff: {rec.difficulty}
                              </span>
                              <span className={`text-[10px] uppercase tracking-wide font-bold px-2 py-0.5 rounded-full ${
                                rec.impact === 'High' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                                rec.impact === 'Medium' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                'bg-slate-50 text-slate-600 border border-slate-100'
                              }`}>
                                Impact: {rec.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
