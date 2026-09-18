import { createContext, useContext, useState } from 'react'
import { programmingTopicsData, programmingWorldStats } from '../data/programmingWorldData'

const ProgrammingContext = createContext(null)

export function ProgrammingProvider({ children }) {
  const [topics, setTopics] = useState(programmingTopicsData)
  const [userXP, setUserXP] = useState(programmingWorldStats.xpEarned)

  const completeTopic = (topicId, xpEarned = 60) => {
    setTopics((prevTopics) => {
      const topicIndex = prevTopics.findIndex((t) => t.id === topicId)
      if (topicIndex === -1) return prevTopics

      const updated = [...prevTopics]
      // Mark current as COMPLETED
      updated[topicIndex] = {
        ...updated[topicIndex],
        status: 'COMPLETED',
        isCurrentQuest: false,
      }

      // Unlock next topic if exists
      if (topicIndex + 1 < updated.length) {
        updated[topicIndex + 1] = {
          ...updated[topicIndex + 1],
          status: 'UNLOCKED',
          isCurrentQuest: true,
          badgeText: 'CURRENT QUEST',
          route: `/programming/${updated[topicIndex + 1].id}`,
        }
      }

      return updated
    })

    setUserXP((prev) => prev + xpEarned)
  }

  const completedCount = topics.filter((t) => t.status === 'COMPLETED').length
  const masteryPercentage = Math.round((completedCount / topics.length) * 100)

  return (
    <ProgrammingContext.Provider
      value={{
        topics,
        userXP,
        completedCount,
        masteryPercentage,
        completeTopic,
      }}
    >
      {children}
    </ProgrammingContext.Provider>
  )
}

export function useProgramming() {
  const context = useContext(ProgrammingContext)
  if (!context) {
    // Fallback if rendered outside provider
    return {
      topics: programmingTopicsData,
      userXP: 0,
      completedCount: 0,
      masteryPercentage: 0,
      completeTopic: () => {},
    }
  }
  return context
}
