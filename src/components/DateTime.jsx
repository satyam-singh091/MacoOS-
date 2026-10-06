import { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(now)

  const monthAndDay = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  }).format(now)

  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(now)

  return (
    <time dateTime={now.toISOString()}>{weekday}  {monthAndDay}  {time}</time>
  )
}

export default DateTime
