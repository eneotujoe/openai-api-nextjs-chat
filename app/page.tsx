'use client'
import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      <div className='min-h-60'>
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap bg-gray-100 rounded my-3 p-3">
            <strong>
              {m.role === 'user' ? 'Me: ' : 'AI: '}
            </strong>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded focus:border-gray-300 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          />
      </form>
    </div>
  )
}