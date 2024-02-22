import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Sonny Sangha",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOL2tTs-_CnTS_LmX7gK09ZreYo_6Fc8RyhDwk_QaaQ&s",
        profile:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDHX26rINXKfhQWquGJ6hgmebfW2KJKHQhmxZ1fqv5pr37wlFs",
    },

    {
        name: "Elon Musk" ,
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDHX26rINXKfhQWquGJ6hgmebfW2KJKHQhmxZ1fqv5pr37wlFs",
    },

    {
        name: "Jeff Bezoz",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDHX26rINXKfhQWquGJ6hgmebfW2KJKHQhmxZ1fqv5pr37wlFs",
    },

    {
        name: "Mark Zuckerberg",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDHX26rINXKfhQWquGJ6hgmebfW2KJKHQhmxZ1fqv5pr37wlFs" ,
    },

    {
        name: "Bill Gates",
        src: "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png",
        profile: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDHX26rINXKfhQWquGJ6hgmebfW2KJKHQhmxZ1fqv5pr37wlFs" 
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