'use client'

import { useState } from 'react'
import { Copy, Wand2, Plus } from 'lucide-react'

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState('clone')

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-foreground">
              Build a sleek, glassmorphic Apple-style site using these 2 images for the navigation bar button.
            </h2>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Nav Reference</p>
                  <p className="text-xs text-muted-foreground">Translucent navigation header</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Button Reference</p>
                  <p className="text-xs text-muted-foreground">Frosted blur effect sample</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('clone')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'clone'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Copy className="w-4 h-4" />
                Clone
              </button>
              
              <button
                onClick={() => setActiveTab('plan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'plan'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Wand2 className="w-4 h-4" />
                Plan
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              
              <button className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Wand2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors duration-200">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  )
}