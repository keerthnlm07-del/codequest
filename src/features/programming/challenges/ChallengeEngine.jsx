import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChallengeHeader from './ChallengeHeader'
import ChallengeFeedback from './ChallengeFeedback'
import ChallengeComplete from './ChallengeComplete'
import FillChallenge from './types/FillChallenge'
import OutputChallenge from './types/OutputChallenge'
import DebugChallenge from './types/DebugChallenge'
import SpeedChallenge from './types/SpeedChallenge'
import BossChallenge from './types/BossChallenge'
import { variablesLevelInfo, variablesChallengesData } from '../data/variablesChallenges'

export default function ChallengeEngine() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sessionXP, setSessionXP] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isLevelComplete, setIsLevelComplete] = useState(false)

  const currentChallenge = variablesChallengesData[currentIndex]
  const isLastChallenge = currentIndex === variablesChallengesData.length - 1

  const handleEvaluate = (userResponse) => {
    if (submitted) return

    let correct = false

    if (currentChallenge.type === 'fill') {
      const codeTrimmed = userResponse.trim()
      correct = currentChallenge.expectedPatterns.some((pattern) =>
        pattern.test(codeTrimmed)
      )
    } else if (currentChallenge.type === 'mcq') {
      correct = userResponse === currentChallenge.correctAnswer
    } else if (currentChallenge.type === 'debug') {
      const codeTrimmed = userResponse.trim()
      correct = currentChallenge.expectedPatterns.some((pattern) =>
        pattern.test(codeTrimmed)
      )
    } else if (currentChallenge.type === 'speed') {
      correct = userResponse === currentChallenge.correctAnswer
    } else if (currentChallenge.type === 'boss') {
      const t1Valid = userResponse.t1 === currentChallenge.tasks[0].correctAnswer
      const t2Valid = userResponse.t2 === currentChallenge.tasks[1].correctAnswer
      const t3Valid = currentChallenge.tasks[2].expectedPatterns.some((p) =>
        p.test(userResponse.t3.trim())
      )
      correct = t1Valid && t2Valid && t3Valid
    }

    setIsCorrect(correct)
    setSubmitted(true)

    if (correct) {
      setSessionXP((prev) => prev + currentChallenge.xp)
    }
  }

  const handleNext = () => {
    if (isLastChallenge) {
      setIsLevelComplete(true)
    } else {
      setCurrentIndex((prev) => prev + 1)
      setIsCorrect(null)
      setSubmitted(false)
    }
  }

  const handleRetry = () => {
    setIsCorrect(null)
    setSubmitted(false)
  }

  if (isLevelComplete) {
    return <ChallengeComplete totalXpEarned={sessionXP} />
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Level Header */}
      <ChallengeHeader
        levelInfo={variablesLevelInfo}
        currentIndex={currentIndex}
        totalChallenges={variablesChallengesData.length}
        sessionXP={sessionXP}
      />

      {/* Main Challenge Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentChallenge.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-2xl"
        >
          {/* Challenge Title & Instructions */}
          <div className="space-y-2 border-b border-slate-800/80 pb-4">
            <div className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
              Task {currentIndex + 1} of {variablesChallengesData.length}
            </div>
            <h2 className="text-2xl font-black text-white">
              {currentChallenge.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentChallenge.instruction}
            </p>
          </div>

          {/* Dynamic Challenge Type Renderer */}
          {currentChallenge.type === 'fill' && (
            <FillChallenge
              challenge={currentChallenge}
              onSubmit={handleEvaluate}
              disabled={submitted && isCorrect}
            />
          )}

          {currentChallenge.type === 'mcq' && (
            <OutputChallenge
              challenge={currentChallenge}
              onSubmit={handleEvaluate}
              disabled={submitted && isCorrect}
            />
          )}

          {currentChallenge.type === 'debug' && (
            <DebugChallenge
              challenge={currentChallenge}
              onSubmit={handleEvaluate}
              disabled={submitted && isCorrect}
            />
          )}

          {currentChallenge.type === 'speed' && (
            <SpeedChallenge
              challenge={currentChallenge}
              onSubmit={handleEvaluate}
              disabled={submitted && isCorrect}
            />
          )}

          {currentChallenge.type === 'boss' && (
            <BossChallenge
              challenge={currentChallenge}
              onSubmit={handleEvaluate}
              disabled={submitted && isCorrect}
            />
          )}

          {/* Feedback & Result Panel */}
          <ChallengeFeedback
            isCorrect={isCorrect}
            explanation={currentChallenge.explanation}
            hint={currentChallenge.hint}
            xp={currentChallenge.xp}
            onNext={handleNext}
            onRetry={handleRetry}
            isLastChallenge={isLastChallenge}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
