import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Revanth",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkS4U9_dRq2keilvghDPN9IrXOTbKAcCb8mAlJayZqw&s",
    },

    {
        name: "Rohith" ,
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkS4U9_dRq2keilvghDPN9IrXOTbKAcCb8mAlJayZqw&s",
    },

    {
        name: "Vishnu",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkS4U9_dRq2keilvghDPN9IrXOTbKAcCb8mAlJayZqw&s",
    },

    {
        name: "khundan",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkS4U9_dRq2keilvghDPN9IrXOTbKAcCb8mAlJayZqw&s" ,
    },

    {
        name: "sonali",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkS4U9_dRq2keilvghDPN9IrXOTbKAcCb8mAlJayZqw&s" 
    }
]


const Stories = () => {  
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story, index)=>(
            <StoryCard key = {index} name = {story.name} src = {story.src} profile = {story.profile}/>
        ))}
    </div>
  )
}

export default Stories