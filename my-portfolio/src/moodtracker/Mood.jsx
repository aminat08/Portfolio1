import React, { useState } from 'react';

const Mood = () => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [moodsHistory, setMoodsHistory] = useState(
    JSON.parse(localStorage.getItem('moodsHistory')) || []
  );

  // Function to handle mood selection and save to localStorage
  const handleMood = () => {
    const newMood = { mood, note };
    const updatedHistory = [...moodsHistory, newMood];
    localStorage.setItem('moodsHistory', JSON.stringify(updatedHistory));
    setMoodsHistory(updatedHistory); // Update state with the new mood and note
  };
 
  return (
    <div style={{ fontFamily: 'cursive' }}>
      <div className='bg-pink-100 rounded-md shadow-md w-[600px] space-y-8 flex flex-col py-8 px-8 items-center'>
        <h1 className='underline text-xl'>Mood Tracker 🎀</h1>

        {/* Textarea for note input */}
        <textarea
          type="text"
          autoFocus
          placeholder='How are you doing today? 😇🥰'
          className='bg-pink-200 shadow-md w-full px-5 py-10 rounded-md focus:outline-0 placeholder:text-pink-700'
          value={note}
          maxLength={200}
          onChange={(e) => setNote(e.target.value)}
        />

        {/* Button to save the note */}
        <button
          className='px-5 py-3 bg-pink-500 text-white rounded-md'
          onClick={handleMood}
        >
          Send Mood & Note
        </button>

        {/* Mood buttons to set mood state */}
        <div className='flex space-x-4'>
          <button
            className='px-4 py-2 rounded-md bg-pink-300 shadow-md capitalize focus:outline-0 hover:bg-pink-500'
            onClick={() => setMood('😊 Happy')}
          >
            😊 Happy
          </button>
          <button
            className='px-4 py-2 rounded-md bg-pink-300 shadow-md capitalize focus:outline-0 hover:bg-pink-500'
            onClick={() => setMood('😌 Chill')}
          >
            😌 Chill
          </button>
          <button
            className='px-4 py-2 rounded-md bg-pink-300 shadow-md capitalize focus:outline-0 hover:bg-pink-500'
            onClick={() => setMood('😡 Angry')}
          >
            😡 Angry
          </button>
          <button0898
            className='px-4 py-2 rounded-md bg-pink-300 shadow-md capitalize focus:outline-0 hover:bg-pink-500'
            onClick={() => setMood('😢 Sad')}
          >
            😢 Sad
          </button0898>
        </div>

        {/* Display saved mood and note in a table format */}
        <div className='bg-pink-600 w-full mt-10 px-10 py-5 rounded-md'>
          <h2 className='text-lg font-semibold text-white mb-4'>Your Moods & Notes</h2>
          <table className='w-full text-white'>
            <thead>
              <tr>
                <th className='px-4 py-2 font-bold'>Mood</th>
                <th className='px-4 py-2 font-bold'>Note</th>
              </tr>
            </thead>
            <tbody>
              {moodsHistory.length > 0 ? (
                moodsHistory.map((item, index) => (
                  <tr key={index}>
                    <td className='px-4 py-2'>{item.mood}</td>
                    <td className='px-4 py-2'>{item.note}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className='px-4 py-2 text-center'>
                    No mood and note recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mood;
