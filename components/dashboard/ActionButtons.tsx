import { Plus, ArrowLeftRight, UserPlus, History } from "lucide-react";

export default function ActionButtons() {
  const actions = [
    { icon: <Plus size={20} />, label: "Add Money" },
    { icon: <ArrowLeftRight size={20} />, label: "Transfer" },
    { icon: <UserPlus size={20} />, label: "Request" },
    { icon: <History size={20} />, label: "History" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl hover:bg-alfa-muted transition group"
        >
          <div className="w-12 h-12 bg-alfa-muted rounded-full flex items-center justify-center text-alfa-primary group-hover:bg-alfa-light transition">
            {action.icon}
          </div>
          <span className="text-sm font-medium text-gray-700">{action.label}</span>
        </button>
      ))}
    </div>
  );
}

