'use client';

export default function SelectionGrid() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="grid grid-cols-2 gap-4 text-black">
        <div className="bg-gray-200 p-4 rounded border col-span-1">
            <h2 className="text-xl font-semibold mb-2 text-black">The Gardener</h2>
            <p>The Gardener assumes responsibility for their small plot of dirt. The labored remunerations conjured of the dotting caretaker planting, watering, and weeding are well imaged.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded border col-span-1">
            <h2 className="text-xl font-semibold mb-2">The Observer</h2>
            <p>The Observer is obligation personified. The Observer stays awake. They seek better viewpoints, better trues, and better explanations.</p>
        </div>
      </div>
    </div>
  );
}