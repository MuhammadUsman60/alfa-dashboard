import { Avatar, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    date: "Today",
    items: [
      {
        name: "Jamie Smith",
        action: "updated account settings",
        time: "16:05",
        avatar: "https://i.pravatar.cc/40?img=2"
      },
      {
        name: "Alex Johnson",
        action: "logged in",
        time: "13:05",
        avatar: "https://i.pravatar.cc/40?img=3"
      }
    ]
  }
]

export default function Activity(){
    return(
      <div className="bg-white p-6 rounded-2xl">
        <h3 className="font-semibold text-gray-800 mb-6">
          Recent Activity
        </h3>
  
        <div className="space-y-6">
          {activities.map((group, groupIndex) => (
            <div key={groupIndex}>
              <p className="text-sm font-semibold text-gray-700 mb-3">{group.date}</p>
              <div className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={item.avatar} />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">
                        <span className="font-medium">{item.name}</span> {item.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  