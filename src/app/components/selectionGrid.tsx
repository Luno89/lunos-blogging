'use client';

export default function SelectionGrid() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Selection Component</h1>
      <div className="grid grid-cols-3 gap-4 text-black">
        <div className="bg-gray-200 p-4 rounded border col-span-1">
            <h2 className="text-xl font-semibold mb-2 text-black">The Gardener</h2>
            <p>The Gardener assumes responsibility for their small plot of dirt. The labored remunerations conjured of the dotting caretaker planting, watering, and weeding are well imaged.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded border col-span-1">
            <h2 className="text-xl font-semibold mb-2">The Observer</h2>
            <p>The Observer is obligation personified. The Observer stays awake. They seek better viewpoints, better trues, and better explanations.</p>
            <p>The Observer is a passive participant in the garden. They may stroll the grounds, admire the flora, and perhaps even take notes, but they do not engage in the cultivation process.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded border col-span-1">
            <h2 className="text-xl font-semibold mb-2">The Expert</h2>
            <p>The Expert knowns. The Expert knowns nothing can absolutely be known. The Expert gives assertions, then acts, when arranging their actionable truths.</p>
            <p>The Expert is a seasoned horticulturist who brings a wealth of knowledge to the garden. They may offer advice, identify plant species, and share insights on best practices for cultivation.</p>
        </div>
      </div>
    </div>
  );
}