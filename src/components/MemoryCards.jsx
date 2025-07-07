import MemoryCard from "./MemoryCard";

const easyMemory = [
  { id: Math.random(), title: "sprite1" },
  { id: Math.random(), title: "sprite2" },
  { id: Math.random(), title: "sprite3" },
  { id: Math.random(), title: "sprite4" },
  { id: Math.random(), title: "sprite5" },
  { id: Math.random(), title: "sprite6" },
];

function MemoryCards({ difficulty }) {
  return (
    <div className="memory-cards">
      {difficulty === "easy" && (
        <>
          {easyMemory.map((easy) => (
            <MemoryCard key={easy.id} title={easy.title} />
          ))}
        </>
      )}
    </div>
  );
}

export default MemoryCards;
