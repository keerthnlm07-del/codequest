import { motion } from 'framer-motion'
import { Sparkles, Terminal, Play, ArrowRight, Zap, Code2, CheckCircle } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading'
import Button from '../../../components/common/Button'
import Badge from '../../../components/common/Badge'

export default function ChallengePreviewSection() {
  return (
    <section id="challenges" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badgeText="Daily Quest"
          badgeIcon={Sparkles}
          badgeVariant="amber"
          title="Daily Challenge Preview"
          subtitle="Test your analytical skills with curated daily coding tasks designed for instant practice."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl shadow-indigo-950/50"
        >
          {/* Card Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="amber">Today's Challenge</Badge>
                <Badge variant="emerald">Easy</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Find the largest element in an array
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm">
                <Zap className="w-4 h-4 fill-amber-400" />
                <span>+50 XP</span>
              </div>
            </div>
          </div>

          {/* Card Body: Problem Statement & Interactive Code Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
            {/* Left: Description & Tags */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Given an array of integers <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono text-xs">nums</code>, write a function to iterate through the array and return its maximum element.
              </p>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400">Concepts Tested:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    Arrays
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    Loops
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    Basics
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Over 1,240 students solved this today</span>
              </div>
            </div>

            {/* Right: Mock IDE Window */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
                {/* IDE Window Bar */}
                <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" /> solution.js
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> JS Engine
                  </div>
                </div>

                {/* IDE Code Area */}
                <div className="p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                  <pre className="text-indigo-200">
                    <span className="text-purple-400">function</span> <span className="text-blue-400">findMax</span>(nums) &#123;{'\n'}
                    {'  '}<span className="text-purple-400">let</span> max = nums[<span className="text-cyan-400">0</span>];{'\n'}
                    {'  '}<span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = <span className="text-cyan-400">1</span>; i &lt; nums.length; i++) &#123;{'\n'}
                    {'    '}<span className="text-purple-400">if</span> (nums[i] &gt; max) &#123;{'\n'}
                    {'      '}max = nums[i];{'\n'}
                    {'    '}&#125;{'\n'}
                    {'  '}&#125;{'\n'}
                    {'  '}<span className="text-purple-400">return</span> max;{'\n'}
                    &#125;
                  </pre>
                </div>

                {/* Test Output Strip */}
                <div className="bg-slate-900/60 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-emerald-400" /> Test Passed: [3, 7, 2, 9, 1] ➔ 9
                  </span>
                  <span className="text-slate-500">Run Time: 2ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card Action */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Ready to code? Solve this challenge to kick off your streak.
            </span>
            <Button
              to="/signin"
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Try Challenge
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
